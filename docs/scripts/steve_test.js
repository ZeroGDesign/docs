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
    const offset_x = parseFloat(document.getElementById('offsetX').value);
    const offset_y = parseFloat(document.getElementById('offsetY').value);
    const startGCode = document.getElementById('startGCode').value;
    const endGCode = document.getElementById('endGCode').value;

    let curr_x = offset_x;
    let curr_y = offset_y;
    let curr_z = layer_height;

    // G-code string to store the generated commands
    let gcodeString = '';

    // Function to append a G-code command to the string
    function appendGCode(command) {
        gcodeString += command + '\n';
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
        appendGCode(`M572 D0 S${pressure_advance.toFixed(3)}`);

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