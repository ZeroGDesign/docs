const databasePath = window.location.origin+'/database/bom.json';

async function fetch_Data() {
    return fetch(databasePath)
        .then(respone => respone.json())
        .catch(error => console.log('error', error));
}