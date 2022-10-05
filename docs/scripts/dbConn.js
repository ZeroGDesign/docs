async function fetch_Data() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Headers", "*");
    myHeaders.append("api-key", "56g80pr5yL40eXdGVXRRZdbye8ffvFLTRCc6ie1tHR1K5WwsOAsmTVqajxV1f820");

    var raw = JSON.stringify({
        "collection": "hardware",
        "database": "default",
        "dataSource": "Cluster0"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://calm-springs-24046.herokuapp.com/https://data.mongodb-api.com/app/data-lakli/endpoint/data/v1/action/findOne", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('error', error));
}
