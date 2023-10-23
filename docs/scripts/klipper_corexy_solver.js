function storeData() {
    var data = document.getElementById("inputData").value;

    console.log("Data:", data);  // Log the input data to console

    if (!data || !data.includes("[stepper_x]") || 
        !data.includes("[stepper_y]") || 
        !data.includes("step_pin") || 
        !data.includes("dir_pin") || 
        !data.includes("enable_pin")) {
            
        console.log("Validation failed");  // Log validation result to console
        document.getElementById("nowWhatText").innerHTML = '<span style="color:white"><center>Either you need to input your stepper config or your config is incorrect!</center></span>';

        return;
    }

    console.log("Validation passed");  // Log validation result to console

    var structuredData = {
        stepper_x: {},
        stepper_y: {}
    };


    var currentSection = null;
    var lines = data.split("\n").filter(Boolean);
    
    lines.forEach(function(line) {
        if (line.startsWith("[stepper_x]")) {
            currentSection = "stepper_x";
            return;
        } else if (line.startsWith("[stepper_y]")) {
            currentSection = "stepper_y";
            return;
        }

        var parts = line.split(/:|=/).map(s => s.trim());
        if (currentSection) {
            structuredData[currentSection][parts[0]] = parts[1];
        }
    });

    sessionStorage.setItem("userInput", JSON.stringify(structuredData));
    updateNowWhatText(structuredData);

    applyLogic();
}

function updateNowWhatText(data) {
    var content = formatDataToString(data);
    var formattedHTML = `
<div class="language-lua highlighter-rouge">
    <div class="highlight">
        <pre class="highlight"><code id="output">${content}</code></pre>
    </div>
</div>
    `;
    document.getElementById("nowWhatText").innerHTML = formattedHTML;
}

function formatDataToString(data) {
    var result = "";
    for (let section in data) {
        result += `[${section}]\n`;
        for (let key in data[section]) {
            result += `${key}: ${data[section][key]}\n`;
        }
        result += "\n"; // Add an empty line between sections
    }
    return result.trim(); // Remove any trailing newline
}

function applyLogic() {
    // Retrieve the stored data
    var data = JSON.parse(sessionStorage.getItem("userInput"));

    // Get selected values from the drop-down lists
    var xSelection = document.getElementById("stepperA").value;
    var ySelection = document.getElementById("stepperB").value;

    if (xSelection === "right" && ySelection === "rear") {
        // Do nothing, output data as is
    } else if (xSelection === "rear" && ySelection === "right") {
        data.stepper_y.dir_pin = toggleExclamation(data.stepper_y.dir_pin);
    } else if (xSelection === "front" && ySelection === "left") {
        data.stepper_x.dir_pin = toggleExclamation(data.stepper_x.dir_pin);
    } else if (xSelection === "left" && ySelection === "front") {
        data.stepper_x.dir_pin = toggleExclamation(data.stepper_x.dir_pin);
        data.stepper_y.dir_pin = toggleExclamation(data.stepper_y.dir_pin);
    } else if (xSelection === "right" && ySelection === "front") {
        swapStepperData(data);
        data.stepper_y.dir_pin = toggleExclamation(data.stepper_y.dir_pin);
    } else if (xSelection === "rear" && ySelection === "left") {
        swapStepperData(data);
        data.stepper_x.dir_pin = toggleExclamation(data.stepper_x.dir_pin);
        data.stepper_y.dir_pin = toggleExclamation(data.stepper_y.dir_pin);
    } else if (xSelection === "front" && ySelection === "right") {
        swapStepperData(data);
    } else if (xSelection === "left" && ySelection === "rear") {
        swapStepperData(data);
        data.stepper_x.dir_pin = toggleExclamation(data.stepper_x.dir_pin);
    }

    // Update the "nowWhatText" section with the modified data
    updateNowWhatText(data);
}

// Helper function to toggle the "!" in dir_pin
function toggleExclamation(value) {
    if (value.startsWith('!')) {
        return value.substring(1);
    } else {
        return '!' + value;
    }
}

// Helper function to swap data between stepper_x and stepper_y
function swapStepperData(data) {
    var keysToSwap = ['step_pin', 'dir_pin', 'enable_pin'];
    keysToSwap.forEach(key => {
        var temp = data.stepper_x[key];
        data.stepper_x[key] = data.stepper_y[key];
        data.stepper_y[key] = temp;
    });
}

function onSaveButtonClick() {
    storeData();
}
