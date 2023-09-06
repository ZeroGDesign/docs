let config = {}; // This will hold our JSON configuration data

async function loadConfig() {
    const response = await fetch('../../../scripts/macro_generators/print_start_config.json');
    config = await response.json();
    toggleDropdownsBasedOnProbe(); // Initialize the dropdown state after loading the config
}

function toggleDropdownsBasedOnProbe() {
    const probeValue = document.getElementById('probe').value;
    const shouldDisable = probeValue === "no";
    
    document.getElementById('leveling').disabled = shouldDisable;
    document.getElementById('bedMeshCalibrate').disabled = shouldDisable;

    // Reset values to default if they're disabled and not default
    if (shouldDisable) {
        document.getElementById('leveling').value = "None"; // Assuming "None" is the default value
        document.getElementById('bedMeshCalibrate').value = "no"; // Assuming "no" is the default value
    }
}

function generateMacro() {
    let generatedMacro = config.macro;

    const probe = document.getElementById('probe').value;
    const leveling = document.getElementById('leveling').value;
    const bedMeshCalibrate = document.getElementById('bedMeshCalibrate').value;
    const extruderTemp = document.getElementById('extruderTemp').value || 190;
    const bedTemp = document.getElementById('bedTemp').value || 60;
    const enablePartFan = document.getElementById('enablePartFan').value;
    let primeMoveLength = document.getElementById('primeMoveLength').value || 100;
    primeMoveLength = Math.max(50, primeMoveLength);  // Ensure it's at least 50

    let heatsoakTime = document.getElementById('heatsoakTime').value * 1000 || 0; // convert to milliseconds
    const heatsoakMacro = heatsoakTime > 0 ? config.heatsoak.custom.replace('[VALUE]', heatsoakTime) : config.heatsoak.default;

    generatedMacro = generatedMacro.replace(/\[CHANGE_EXTRUDER_TEMP\]/g, extruderTemp);
    generatedMacro = generatedMacro.replace('[CHANGE_BED_TEMP]', bedTemp);
    generatedMacro = generatedMacro.replace('[ENABLE_PART_FAN]', config.enablePartFan[enablePartFan]);
    generatedMacro = generatedMacro.replace('[CHANGE_PRIME_MOVELENGHT]', primeMoveLength);
    generatedMacro = generatedMacro.replace('[CHANGE_HEATSOAK]', heatsoakMacro);
    generatedMacro = generatedMacro.replace('[enable_bed_mesh_calibrate1]', config.probes[probe]);
    generatedMacro = generatedMacro.replace('[enable_leveling_option]', config.levelingOptions[leveling]);
    generatedMacro = generatedMacro.replace('[enable_bed_mesh_calibrate2]', config.bedMeshCalibrate[bedMeshCalibrate]);

    document.getElementById('output').textContent = generatedMacro;
    generateSlicerGcode();
}

function generateSlicerGcode() {
    const slicerSelected = document.getElementById('slicerSelection').value;
    const slicerTemplate = "START_PRINT EXTRUDER_TEMP=[replace_nozzle] BED_TEMP=[replace_bed]";

    if (config.slicerReplacements[slicerSelected]) {
        const slicerNozzleReplace = config.slicerReplacements[slicerSelected].nozzle;
        const slicerBedReplace = config.slicerReplacements[slicerSelected].bed;
        let slicerGcode = slicerTemplate.replace('[replace_nozzle]', slicerNozzleReplace);
        slicerGcode = slicerGcode.replace('[replace_bed]', slicerBedReplace);

        document.getElementById('output_slicer').textContent = slicerGcode;
    }
}

// Add event listener to monitor changes in the "probe" dropdown
document.getElementById('probe').addEventListener('change', toggleDropdownsBasedOnProbe);

// Load configuration on script start
loadConfig();