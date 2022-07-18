//This file will aid in building the configurator.
// Written by #KaizenKody#9426

var _hardwareList = {
    bolt :[{
        partname: "m3x6", image: "urltoimage",
        type: [{din: "7991", iso: "10642"}],
        store: [{region: "CN", name: "AliExpress - Nindejin",   url: "https://s.click.aliexpress.com/e/_AEXIMh",                    verified: true},
                {region: "US", name: "Boltdepot",               url: "https://www.boltdepot.com/Product-Details.aspx?product=7212", verified: true},
                {region: "US", name: "Boltsplus",               url: "https://boltsplus.ca/productInfo.php?prodID=4103-0001",       verified: true},
            ],

        partname: "m5x8", image: "urltoimage",
        type: [{din: "7380", iso: "7380"}],
        store: [{region: "CN", name: "AliExpress - Nindejin",   url: "https://s.click.aliexpress.com/e/_A19eD7",                    verified: true},
                {region: "US", name: "Boltdepot",               url: "https://www.boltdepot.com/Product-Details.aspx?product=6631", verified: true},
                {region: "US", name: "Boltsplus",               url: "https://boltsplus.ca/productInfo.php?prodID=4104-0049",       verified: true},
            ],
    }],
}


var getDocumentList = () => {
    //stop the page from changing.
    event.preventDefault();
    //Get selections
    var hotendSelected = document.getElementById('hotend');
    var extruderSelected = document.getElementById('extruder');
    var probeSelected = document.getElementById('probe');
    var backplateSelected = document.getElementById('backplate');

    //Aggregate the files
    var fileList = [];

    //Add generic files
    fileList = fileList.concat(_partsList.generic)

    //add hotends
    fileList = fileList.concat(_partsList.hotends.map( item => {
        if (item.id == hotendSelected.value)
            return item.dependencies;
    }))

    //add extruder
    fileList = fileList.concat(_partsList.extruders.map( item => {
        if (item.id == extruderSelected.value)
            return item.dependencies;
    }))

    //add probes
    fileList = fileList.concat(_partsList.probes.map( item => {
    if (item.id == probeSelected.value)
        return item.dependencies;
    }))

    //add backplate
    fileList = fileList.concat(_partsList.backplates.map( item => {
        if (item.id == backplateSelected.value)
            return item.dependencies;
        }))

    //cleanup cause im lazy.....and this is a PoC
    fileList = fileList.flat().filter(item => item != undefined)

    console.log(fileList)
    return fileList;
    // zipAndDownload(getDocumentList(), "/assets/stl/downloads");
}

var loadDataSet = () => {
                //Load the configurator
            // document.getElementById('hotend').innerHTML = "";
            var hotendSelect = document.getElementById('hotend');
            var extruderSelect = document.getElementById('extruder');
            var probeSelect = document.getElementById('probe');
            var backplateSelect = document.getElementById('backplate');

            //Set the options for both

            hotendSelect.innerHTML = _partsList.hotends.reduce((prev, element, acc) => {
                return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
            }, "");

            extruderSelect.innerHTML = _partsList.extruders.reduce((prev, element, acc) => {
                return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
            }, "");

            probeSelect.innerHTML = _partsList.probes.reduce((prev, element, acc) => {
                return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
            }, "");

            backplateSelect.innerHTML = _partsList.backplates.reduce((prev, element, acc) => {
                return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
            }, "");
}

const exportZip = (blobs, docArray) => {
    //use the jszip module to do the heavy lifting.
    const zip = new JSZip();
    blobs.forEach((blob, i) => {
        zip.file(docArray[i], blob);
    });
    //zoom zoom
    zip.generateAsync({ type: 'blob' }).then(zipFile => {
        const fileName = `EVA-Toolhead-${new Date().getTime()}.zip`;
        //use the fileSave module to handle security issues
        return saveAs(zipFile, fileName);
    });
}

const download2Blob = urls => {
    //download all the files, then get the blob response.
    return Promise.all(
        urls.map(url => { return fetch(url).then(resp => resp.blob()) }))
};

const zipAndDownload = (docArray, base_uri = '') => {
    //parent function to call from frontend
    //base URI to be updated to change the file location
    urls = docArray.map(item => `${base_uri}/${item}`);
    return download2Blob(urls, 5).then(blobs => exportZip(blobs, docArray));
}