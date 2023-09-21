// const databasePath = window.location.origin+'/database/bom_test.yaml';

// async function fetch_Data() {
//     return fetch(databasePath)
//         .then(respone => respone.json())
//         .catch(error => console.log('error', error));
// }

const databasePath = window.location.origin + '/database/bom.yml';

async function fetch_Data() {
    try {
        const response = await fetch(databasePath);
        
        if (!response.ok) throw new Error('Network response was not ok');

        const textData = await response.text();
        return jsyaml.load(textData); // Parse YAML using js-yaml library
        
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Calling function to test - Disabled for now
// fetch_Data().then(data => console.log(data));