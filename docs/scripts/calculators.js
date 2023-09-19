function calculate_flowRatio()
{
    let flowRatioModifierValue = document.getElementById("flowRatioModifier").value;
    
    // Define Regular Expression using the RegExp constructor
    let regex = new RegExp("^[+-][0-9]+$");

    // Access the status div
    let statusDiv = document.getElementById("hasValueModifier");

    if (!regex.test(flowRatioModifierValue)) {
        statusDiv.innerHTML = "<h5>Please enter a valid Callibration print number starting with '+' or '-' followed by a number.</h5><br/>";
        return;
    } else {
        statusDiv.innerHTML = "";  // Clear any error message if input is valid
    }

    let flowRatio = parseFloat(document.getElementById("flowRatio").value);
    let flowRatioModifier = parseFloat(flowRatioModifierValue); 

    let result = flowRatio * (100 + flowRatioModifier) / 100;
    result = parseFloat(result.toFixed(3));

    document.getElementById("result_flowRatio").innerText = result.toString();
}
