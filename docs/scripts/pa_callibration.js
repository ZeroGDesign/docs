// Function to convert extrusion volume to length
function extrusion_volume_to_length(volume, filament_diameter) {
    return volume / (filament_diameter * filament_diameter * Math.PI * 0.25);
}

// Function to calculate extrusion for length
function extrusion_for_length(length, extrusion_width, layer_height, filament_diameter) {
    return extrusion_volume_to_length(length * extrusion_width * layer_height, filament_diameter);
}

// Function to generate G-code
function generateGCode() {
    // Extracting values from the form
    const selectedOS = document.getElementById('os').value;
    const extrusion_width = parseFloat(document.getElementById('extrusionWidth').value);
    const layer_height = parseFloat(document.getElementById('layerHeight').value);
    const filament_diameter = parseFloat(document.getElementById('filamentDiameter').value);
    const travel_speed = parseFloat(document.getElementById('travelSpeed').value);
    const first_layer_speed = parseFloat(document.getElementById('firstLayerSpeed').value);
    const slow_speed = parseFloat(document.getElementById('slowSpeed').value);
    const fast_speed = parseFloat(document.getElementById('fastSpeed').value);
    const layers = parseInt(document.getElementById('layers').value, 10);
    const object_width = parseFloat(document.getElementById('objectWidth').value);
    const num_patterns = parseInt(document.getElementById('numPatterns').value, 10);
    const pattern_width = parseFloat(document.getElementById('patternWidth').value);
    const pressure_advance_min = parseFloat(document.getElementById('pressureAdvanceMin').value);
    const pressure_advance_max = parseFloat(document.getElementById('pressureAdvanceMax').value);
    const bed_x = parseFloat(document.getElementById('bedMaxX').value) / 2;
    const bed_y = parseFloat(document.getElementById('bedMaxY').value) / 2;
    const startGCode = document.getElementById('startGCode').value;
    const endGCode = document.getElementById('endGCode').value;
    const flowNumber = parseFloat(document.getElementById('flowNumber').value); // Add the flowNumber field

    let curr_x = bed_x;
    let curr_y = bed_y;
    let curr_z = layer_height;

    
    if (pressure_advance_min >= pressure_advance_max) return alert("Pressure Advance Max needs to be higher than Pressure Advance Min.");
    if ((bed_x * 2) < (object_width + 10)) return alert("Your print bed is too small for a " + object_width + "mm object.\nAdjust the Object Width in advanced settings and Number of Patterns to fit your plate.");

    // G-code string to store the generated commands
    let gcodeString = '';

    // Function to append a G-code command to the string
    function appendGCode(command) {
        gcodeString += command + '\n';
    }

    // Function to calculate extrusion with flowNumber
    function extrusion_with_flow(length, extrusion_width, layer_height, filament_diameter, flowNumber) {
        const extrusionLength = extrusion_for_length(length, extrusion_width, layer_height, filament_diameter);
        return extrusionLength * flowNumber;
    }

    // Function to handle line movements and extrusion
    function line(x, y, speed) {
        const length = Math.sqrt(x ** 2 + y ** 2);
        curr_x += x;
        curr_y += y;
        if (speed > 0) {
            appendGCode(`G1 X${curr_x.toFixed(3)} Y${curr_y.toFixed(3)} E${extrusion_with_flow(length, extrusion_width, layer_height, filament_diameter, flowNumber).toFixed(4)} F${(speed * 60).toFixed(0)}`);
        } else {
            appendGCode(`G1 X${curr_x.toFixed(3)} Y${curr_y.toFixed(3)} F${(travel_speed * 60).toFixed(0)}`);
        }
    }

    // Function to handle upward movement
    function up() {
        curr_z += layer_height;
        appendGCode(`G1 Z${curr_z.toFixed(3)}`);
    }

    // Function to handle positioning
    function goto(x, y) {
        curr_x = x + bed_x;
        curr_y = y + bed_y;
        appendGCode(`G1 X${curr_x.toFixed(3)} Y${curr_y.toFixed(3)}`);
    }

    appendGCode(startGCode);

    // Initial move
    appendGCode(`G1 X${curr_x.toFixed(3)} Y${curr_y.toFixed(3)} Z${curr_z.toFixed(3)} F${(travel_speed * 60).toFixed(0)}`);

    // Line movements
    line(-object_width / 2, 0, 0);

    for (let l = 0; l < 2; l++) {
        for (let offset_i = 0; offset_i < 5; offset_i++) {
            const offset = offset_i * extrusion_width;
            line(object_width + offset, 0, first_layer_speed);
            line(0, extrusion_width + offset * 2, first_layer_speed);
            line(-object_width - offset * 2, 0, first_layer_speed);
            line(0, -extrusion_width - offset * 2, first_layer_speed);
            line(offset, 0, first_layer_speed);
            line(0, -extrusion_width, 0);
        }
        up();
        goto(-object_width / 2, 0);
    }

    const segment = object_width * 1.0 / num_patterns;
    const space = segment - pattern_width;

    for (let l = 0; l < layers; l++) {
        const pressure_advance = (l / layers) * (pressure_advance_max - pressure_advance_min) + pressure_advance_min;
        appendGCode(`; layer ${l}, pressure advance: ${pressure_advance.toFixed(3)}`);
        // appendGCode(`M572 D0 S${pressure_advance.toFixed(3)}`);
        // Check selected OS and adjust the G-code accordingly
        appendGCode((selectedOS === 'raprap')
            ? `M572 D0 S${pressure_advance.toFixed(3)}`
            : `SET_PRESSURE_ADVANCE EXTRUDER=extruder ADVANCE=${pressure_advance.toFixed(3)}`);

        for (let i = 0; i < num_patterns; i++) {
            line(space / 2, 0, fast_speed);
            line(pattern_width, 0, slow_speed);
            line(space / 2, 0, fast_speed);
        }

        line(0, extrusion_width, fast_speed);

        for (let i = 0; i < num_patterns; i++) {
            line(-space / 2, 0, fast_speed);
            line(-pattern_width, 0, slow_speed);
            line(-space / 2, 0, fast_speed);
        }

        line(0, -extrusion_width, fast_speed);
        up();
    }

    appendGCode(endGCode);

    // Save the generated G-code as a file
    const blob = new Blob([gcodeString], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'generated_gcode.gcode';
    document.body.appendChild(a);
    a.click();
}

function calculatePressure() {
    const measuredInMm = parseFloat(document.getElementById("measuredLine").value);
    const pressure_advance_min = parseFloat(document.getElementById('pressureAdvanceMin').value);
    const pressure_advance_max = parseFloat(document.getElementById('pressureAdvanceMax').value);
    const layers = parseInt(document.getElementById('layers').value, 10);
    const layer_height = parseFloat(document.getElementById('layerHeight').value);

    if (!isNaN(measuredInMm)) {
        const start_pa = pressure_advance_min;
        const end_pa = pressure_advance_max;
        const totalHeight = layers * layer_height;

        const slope = (end_pa - start_pa) / totalHeight;
        const pressureAdvanced = start_pa + slope * measuredInMm;

        document.getElementById("result").textContent = `You measured ${measuredInMm}mm, Pressure Advanced is: ${pressureAdvanced.toFixed(4)}`;
    } else {
        alert("Please enter a valid numeric value for height.");
    }
}