function storeData() {
    const data = document.getElementById('inputData').value;

    // Commented out console logs for cleaner output
    // console.log('Data:', data);

    // Validation: Check if all necessary stepper configurations are present
    if (!data || !['[stepper_x]', '[stepper_y]', 'step_pin', 'dir_pin', 'enable_pin'].every(prop => data.includes(prop))) {
        // console.log('Validation failed');
        document.getElementById('nowWhatText').innerHTML = createResponse('white', '<h2>Houston, we have a problem</h2>Either input your stepper config or ensure it is correct.<br/>Example: <a href="https://i.imgur.com/rOBl0q3.gif" target="_blank">Show example</a>');                                                                                            
        return;
    }

    // console.log('Validation passed');

    const structuredData = { stepper_x: {}, stepper_y: {} };

    // Processing input data into structured data object
    let currentSection = null;
    data.split('\n').filter(Boolean).forEach(line => {
        if (line.startsWith('[stepper_x]')) currentSection = 'stepper_x';
        else if (line.startsWith('[stepper_y]')) currentSection = 'stepper_y';
        else if (currentSection) {
            const [key, value] = line.split(/:|=/).map(s => s.trim());
            structuredData[currentSection][key] = value;
        }
    });

    // Storing structured data for future use
    sessionStorage.setItem('userInput', JSON.stringify(structuredData));
    updateNowWhatText(structuredData);
    applyLogic();
}

function updateNowWhatText(data) {
    const formattedHTML = `
<div class="language-lua highlighter-rouge">
    <div class="highlight">
        <pre class="highlight"><code id="output">${formatDataToString(data)}</code></pre>
    </div>
</div>`;
    document.getElementById('nowWhatText').innerHTML = formattedHTML;
}

function formatDataToString(data) {
    return Object.entries(data)
        .map(([section, values]) => `[${section}]\n${Object.entries(values).map(([k, v]) => `${k}: ${v}`).join('\n')}\n`)
        .join('\n').trim();
}

function applyLogic() {
    const data = JSON.parse(sessionStorage.getItem('userInput'));
    const selections = `${document.getElementById('stepperA').value}-${document.getElementById('stepperB').value}`;

    const nowWhatText = document.getElementById('nowWhatText');

    switch (selections) {
        case 'right-front':
        case 'rear-left':
        case 'front-right':
        case 'left-rear':
            nowWhatText.innerHTML = createResponse('white', '<h2>Your steppers are swapped.</h2>You need to swap the A & B connectors, otherwise known as X & Y.<h2>SWAP DONE?</h2><h3>Redo the homing on X/Y as they\'re likely still wrong.</h3>');
            return;
        case 'right-rear':
            nowWhatText.innerHTML = createResponse('lightgreen', 'Your config seems good!<br/>Issues? Contact us on Discord.'); 
            return;
        case 'rear-right':
            data.stepper_y.dir_pin = toggleExclamation(data.stepper_y.dir_pin);
            break;
        case 'front-left':
            data.stepper_x.dir_pin = toggleExclamation(data.stepper_x.dir_pin);
            break;
        case 'left-front':
            Object.keys(data).forEach(k => data[k].dir_pin = toggleExclamation(data[k].dir_pin));
            break;
        default:
            nowWhatText.innerHTML = createResponse('yellow', 'The homing direction issues might be related to something else.<br/>Ask help on the Discord server.');
            return;
    }

    updateNowWhatText(data);
}

function toggleExclamation(value) {
    return value.startsWith('!') ? value.substring(1) : '!' + value;
}

function createResponse(color, message) {
    return `<span style="color:${color};text-align:center;">${message}</span>`;
}

function onSaveButtonClick() {
    storeData();
}
