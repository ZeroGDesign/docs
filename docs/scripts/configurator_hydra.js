//This file will aid in building the configurator.
// Written by #KaizenKody#9426

var _partsList = {
    magnet: [
        { id: "12_5mm", name: "12x5mm", dependencies: ["a_MGN_12x5.stl"] },
        { id: "12_4mm", name: "12x4mm", dependencies: ["a_MGN_12x4.stl"] },
        { id: "12_3mm", name: "12x3mm", dependencies: ["a_MGN_12x3.stl"] }
    ],
    carriage: [
      { id: "100mm_MGN9C", name: "MGN9C" },
      { id: "100mm_MGN9H", name: "MGN9H" }
    ],
    ziptie: [
        { id: "none", name: "None", dependencies: [] },
        { id: "2020_cabletie", name: "Include", dependencies: ["2020_CableTie.stl"] }
        
    ],
    wago: [
      { id: "none", name: "None", dependencies: [] },
      { id: "triple_wago_221412", name: "Wago mount 221-412", dependencies: ["Wago_221_Triple.stl"] }
      
  ],
    hydra_generic: ["ChainEnd.stl", "Hydra_Left_Arm.stl", "Hydra_Left_stepper_mount.stl", "Hydra_Rear_Arm.stl", "Hydra_Rear_stepper_mount.stl",
    "Hydra_Right_Arm.stl", "Hydra_Right_stepper_mount.stl", "Wago_221_Triple.stl"
    ]
}

var getDocumentList = () => {
    // stop the page from changing
    event.preventDefault();
  
    // get selections
    var magnetSelected = document.getElementById('magnet');
    var carriageSelect = document.getElementById('carriage');
    var ziptieSelect = document.getElementById('ziptie');
    var wagoSelect = document.getElementById('wago');

  
    // aggregate the files
    var fileList = [];

    fileList = fileList.concat(_partsList.hydra_generic);

    // Adding Minitank based on selected magnet + carriage type
    fileList = fileList.concat(_partsList.magnet.map(item => {
      let selectedName = "";
    
      for (let i = 0; i < _partsList.carriage.length; i++) {
        if (_partsList.carriage[i].id === carriageSelect.options[carriageSelect.selectedIndex].value) {
          selectedName = _partsList.carriage[i].name;
          break;
        }
      }
    
      const dependenciesObject = JSON.stringify(item.dependencies).replace("MGN", selectedName);
    
      if (item.id === magnetSelected.value) {
        return JSON.parse(dependenciesObject);
      }
    }));

    // Add ziptie mount
    fileList = fileList.concat(_partsList.ziptie.map(item => {
      if (item.id == ziptieSelect.value)
        return item.dependencies;
    }));

    // Add wago mount
    fileList = fileList.concat(_partsList.wago.map(item => {
      if (item.id == wagoSelect.value)
        return item.dependencies;
    }));

    // cleanup because I'm lazy... and this is a PoC
    fileList = fileList.flat().filter(item => item != undefined);
  
    console.log(fileList);
    return fileList;
    // zipAndDownload(getDocumentList(), "/assets/stl/downloads");
  }  

const loadDataSet = () => {
    const magnetSelect = document.getElementById('magnet');
    const carriageSelect = document.getElementById('carriage');
    const ziptieSelect = document.getElementById('ziptie');
    const wagoSelect = document.getElementById('wago');
  
    magnetSelect.innerHTML = _partsList.magnet.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    carriageSelect.innerHTML = _partsList.carriage.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    ziptieSelect.innerHTML = _partsList.ziptie.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    wagoSelect.innerHTML = _partsList.wago.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
};

const exportZip = (blobs, docArray) => {
    // use the jszip module to do the heavy lifting
    const zip = new JSZip();
    blobs.forEach((blob, i) => {
      zip.file(docArray[i], blob);
    });
  
    // zoom zoom
    zip.generateAsync({ type: 'blob' }).then(zipFile => {
      const fileName = `Hydra-${new Date().getTime()}.zip`;
      
      // use the fileSave module to handle security issues
      return saveAs(zipFile, fileName);
    });
  };

const download2Blob = urls => {
    // download all the files, then get the blob response
    return Promise.all(
        urls.map(url => {
        return fetch(url).then(resp => resp.blob());
        })
    );
};

const zipAndDownload = (docArray, base_uri = '') => {
    document.getElementById('progressStats').innerHTML = `<h5>The file is large and may take a while to download depending on your internet speed. If you encounter issues, try using a different browser.</h5>`;
    // Parent function to call from frontend
    // Base URI to be updated to change the file location
    const urls = docArray.map(item => `${base_uri}/${item}`);
    return download2Blob(urls, 5)
      .then(blobs => exportZip(blobs, docArray));
  };  