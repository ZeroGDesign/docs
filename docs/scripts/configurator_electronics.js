//This file will aid in building the configurator.
// Written by #KaizenKody#9426

var _partsList = {
    printers: [
        { id: "none", name: "None", dependencies: [] },
        { id: "5plus", skirtsize: "438", name: "Ender 5 Plus", dependencies: ["skirt/5plus/Electronics_Bay.pdf", "skirt/SK_Center_Logo_x4.stl"
        , "skirt/SK_CenterLogo_Inlay_x4.stl", "skirt/5plus/SK-438-Left.stl" , "skirt/5plus/SK-438-Right_x2.stl", "skirt/5plus/SK-455-Left_x2.stl", "skirt/5plus/SK-455-Right_x2.stl"
        , "skirt/5plus/5Plus_Hydra_TopPanel.dxf", "skirt/5plus/SK_5Plus_BottomPanel.dxf", "2020_Cable_Tie_x3.stl", "Clip_Base_x4.stl", "Clip_Top_x4.stl", "DIN-DropBracket_x4.stl" ] },
        { id: "5pro", skirtsize: "310", name: "Ender 5 (pro)", dependencies: ["skirt/5pro/Electronics_Bay.pdf", "skirt/SK_Center_Logo_x4.stl"
        , "skirt/SK_CenterLogo_Inlay_x4.stl", "skirt/5pro/SK-310-Right_x4.stl", "skirt/5pro/SK-310-Left_x3.stl"
        , "skirt/5pro/5Pro_BottomPanel.dxf", "skirt/5pro/5Pro_Hydra_TopPanel.dxf", "2020_Cable_Tie_x3.stl", "Clip_Base_x4.stl", "Clip_Top_x4.stl", "DIN-DropBracket_x4.stl"] }
    ],
    feet: [
        { id: "none", name: "None", dependencies: [] },
        { id: "standard", name: "Standard Feet", dependencies: ["skirt/SK_FT_Stock_PowerSW.stl", "skirt/SK_FT_Stock_x3.stl"] },
        { id: "wide", name: "38mm Feet", dependencies: ["skirt/SK_FT_38mm_x3.stl", "skirt/SK_FT_38mm_PowerSW.stl"] }
    ],
    iec: [
        { id: "none", name: "None", dependencies: [] },
        { id: "Normal IEC", name: "Normal IEC", dependencies: ["skirt/5pro/SK-310-Left-IEC.stl"] },
        { id: "Switched IEC", name: "Switched IEC", dependencies: ["skirt/5pro/SK-310-Left-IEC-SW.stl"] }
    ],
    psu: [
        { id: "none", name: "None", dependencies: [] },
        { id: "uhp200", name: "UHP 200", dependencies: ["DIN-UHP200-M3_heatset_1.stl", "DIN-UHP200-M3_heatset_2.stl"] },
        { id: "uhp350", name: "UHP 350", dependencies: ["DIN-UHP350-M3_heatset_1.stl", "DIN-UHP350-M3_heatset_2.stl"] },
        { id: "lrs200", name: "LRS 200", dependencies: ["DIN-PSU-LRS200_LRS350-M4_1.stl", "DIN-PSU-LRS200_LRS350-M4_2.stl"] },
        { id: "lrs350", name: "LRS 350", dependencies: ["DIN-PSU-LRS200_LRS350-M4_1.stl", "DIN-PSU-LRS200_LRS350-M4_2.stl"] },
        { id: "rsp500", name: "RSP 500", dependencies: ["DIN-RSP500-M4TR_1.stl", "DIN-RSP500-M4TR_2.stl"] },
    ],
    secondpsu: [
      { id: "none", name: "None", dependencies: [] },
      { id: "rs255", name: "RS-25-5", dependencies: ["DIN-RS-25-5-Left.stl", "DIN-RS-25-5-Rig_heatset.stl"] }
    ],
    motherboard: [
        { id: "none", name: "None", dependencies: [] },
        { id: "spider", name: "Fysetc Spider", dependencies: ["DIN-Spider-M3_heatset_1.stl", "DIN-Spider-M3_heatset_2.stl"] },
        { id: "octoopus", name: "BTT Octopus", dependencies: ["DIN-Octopus-M3_heatset_1.stl", "DIN-Octopus-M3_heatset_2.stl"] },
        { id: "manta8p", name: "BTT Manta M8P", dependencies: ["DIN-M8PLT-M3_heatset.stl", "DIN-M8PRT-M3_heatset.stl"] },
        { id: "skr", name: "BTT SKR Mini", dependencies: ["SKR_Mini_and_Creality.stl", "DIN-Generic-M2_5_threaded.stl", "DIN-Generic-M2_5_threaded_2.stl"] },
        { id: "creality", name: "Creality", dependencies: ["SKR_Mini_and_Creality.stl", "DIN-Generic-M2_5_threaded.stl", "DIN-Generic-M2_5_threaded_2.stl"] },
    ],
    raspberry: [
        { id: "none", name: "None", dependencies: [] },
        { id: "2_5mm", name: "Use 2.5mm Self-tapping", dependencies: ["DIN-Pi-M2_5_1.stl", "DIN-Pi-M2_5_2.stl"] },
        { id: "heatset", name: "Use 3mm Heatsets", dependencies: ["DIN-Pi-M3_heatset_1.stl", "DIN-Pi-M3_heatset_2.stl"] }
    ],
    generic: [
    ]
}

var getDocumentList = (option) => {
    // stop the page from changing
    event.preventDefault();
  
    // get selections
    var printerSelected = document.getElementById('printerSize');
    var feetSelected = document.getElementById('feet');
    var iecSelected = document.getElementById('iec');
    var psuSelected = document.getElementById('psu');
    var secondPsuSelected = document.getElementById('second_psu');
    var motherboardSelected = document.getElementById('motherboard');
    var raspberryMountSelected = document.getElementById('raspberry_mount');
    var panelsSelected = document.getElementById('panels');
  
    // aggregate the files
    var fileList = [];
  

    fileList = fileList.concat(_partsList.generic);

    // add Printer size
    fileList = fileList.concat(_partsList.printers.map(item => {
      if (item.id == printerSelected.value)
        return item.dependencies;
    }));

    // add Feet wide normal
    fileList = fileList.concat(_partsList.feet.map(item => {
      if (item.id == feetSelected.value)
        return item.dependencies;
    }));

    // // add IEC Inlet
    // fileList = fileList.concat(_partsList.iec.map(item => {
    //   if (item.id == iecSelected.value)
    //     return item.dependencies;
    // }));

    if (printerSelected.value !== "none")
    fileList = fileList.concat(_partsList.iec.map(item => {
      let selectedName = "";
      let size = "";
    
      for (let i = 0; i < _partsList.printers.length; i++) {
        if (_partsList.printers[i].id === printerSelected.options[printerSelected.selectedIndex].value) {
          selectedName = _partsList.printers[i].id;
          size = _partsList.printers[i].skirtsize;
          break;
        }
      }


      const dependenciesObject = JSON.stringify(item.dependencies).replace("5pro", selectedName).replace("310", size);
    
      if (item.id === iecSelected.value) {
        return JSON.parse(dependenciesObject);
      }
    }));

    // add PSU
    fileList = fileList.concat(_partsList.psu.map(item => {
      if (item.id == psuSelected.value)
        return item.dependencies;
    }));

    // add secondary PSU
    fileList = fileList.concat(_partsList.secondpsu.map(item => {
      if (item.id == secondPsuSelected.value)
        return item.dependencies;
    }));

    // add Motherboard
    fileList = fileList.concat(_partsList.motherboard.map(item => {
      if (item.id == motherboardSelected.value)
        return item.dependencies;
    }));

    // add Raspberry mount
    fileList = fileList.concat(_partsList.raspberry.map(item => {
      if (item.id == raspberryMountSelected.value)
        return item.dependencies;
    }));

    // cleanup because I'm lazy... and this is a PoC
    fileList = fileList.flat().filter(item => item != undefined);
  
    console.log(fileList);
    return fileList;
    // zipAndDownload(getDocumentList(), "/assets/stl/downloads");
  }  

const loadDataSet = () => {
    const printerSelected = document.getElementById('printerSize');
    const feetSelected = document.getElementById('feet');
    const iecSelected = document.getElementById('iec');
    const psuSelected = document.getElementById('psu');
    const secondPsuSelected = document.getElementById('second_psu');
    const motherboardSelected = document.getElementById('motherboard');
    const raspberryMountSelected = document.getElementById('raspberry_mount');
  
    printerSelected.innerHTML = _partsList.printers.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
  
    feetSelected.innerHTML = _partsList.feet.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
  
    iecSelected.innerHTML = _partsList.iec.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
  
    psuSelected.innerHTML = _partsList.psu.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
  
    secondPsuSelected.innerHTML = _partsList.secondpsu.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
  
    motherboardSelected.innerHTML = _partsList.motherboard.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    raspberryMountSelected.innerHTML = _partsList.raspberry.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
};

const exportZip = (blobs, docArray, option) => {
    // use the jszip module to do the heavy lifting
    const zip = new JSZip();
    blobs.forEach((blob, i) => {
      zip.file(docArray[i], blob);
    });
  
    // zoom zoom
    zip.generateAsync({ type: 'blob' }).then(zipFile => {
      const fileName = `electronics-enclosure-${new Date().getTime()}.zip`;
  
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

const zipAndDownload = (docArray, base_uri = '', option) => {
    document.getElementById('progressStats').innerHTML = `<h5>The file is large and may take a while to download depending on your internet speed. If you encounter issues, try using a different browser.</h5>`;

    // Parent function to call from frontend
    // Base URI to be updated to change the file location
    const urls = docArray.map(item => `${base_uri}/${item}`);
    return download2Blob(urls, 5)
      .then(blobs => exportZip(blobs, docArray, option));
  };  