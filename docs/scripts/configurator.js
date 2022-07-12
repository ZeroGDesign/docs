//This file will aid in building the configurator.
// Written by #KaizenKody#9426

var _partsList = {
    hotends: [
        {id: "sliceworks_mosquito", name: "Mosquito", dependencies: ["mosquito_face.stl", "mosquito_support.stl", "EVA2_4_Trihorn_high-wide.stl"]},
        {id: "sliceworks_copperhead", name: "Copperhead", dependencies: ["copperhead_face.stl", "copperhead_support_a.stl", "copperhead_support_b.stl", "EVA2_4_Trihorn_high-wide.stl"]},
        {id: "rapido", name: "Rapido HF", dependencies: ["face_rapido.stl"]},
        {id: "dragon_red_lizard", name: "Dragon HF / Red Lizard", dependencies: ["dragon_face.stl", "v6_support.stl", "EVA2_4_Trihorn_high-narrow.stl"]},
        {id: "dragonfly_bmo", name: "DragonFly BMO", dependencies: ["bmo_face.stl", "bmo_support.stl", "EVA2_4_Trihorn_high-narrow.stl"]},
        {id: "e3d_v6", name: "E3D V6", dependencies: ["v6_face.stl", "v6_face_clamp.stl", "v6_support.stl", "EVA2_4_Trihorn_high-narrow.stl"]}
    ],
    extruders: [
        {id: "sherpa_mini", name: "Sherpa Mini", dependencies: ["Extruder_X_Limit_Top_Sherpa_Mini_MGN12.stl"]},
        {id: "lgx_lite", name: "LGX Lite", dependencies: ["Extruder_X_Limit_Top_LGX_Lite_MGN12.stl"]},
        {id: "lgx", name: "LGX", dependencies: ["Extruder_X_Limit_Top_LGX_MGN12_a.stl", "Extruder_X_Limit_Top_LGX_MGN12__b.stl"]},
        {id: "orbiter_1_5", name: "Orbitor 1.5", dependencies: ["Extruder_X_Limit_Top_Orbiter_1_5_MGN12.stl"]},
        {id: "orbiter_2", name: "Orbitor 2.0", dependencies: ["Extruder_X_Limit_Top_Orbiter_2_0_MGN12.stl"]},
        {id: "bmg", name: "BMG", dependencies: ["Extruder_X_Limit_Top_BMG_MGN12.stl"]},
        {id: "titan", name: "Titan", dependencies: ["Extruder_X_Limit_Top_Titan_MGN12.stl"]},
        {id: "bowden", name: "bowden", dependencies: ["Extruder_X_Limit_Top_MGN12.stl"]}
    ],
    probes: [
        {id: "bl_touch", name: "BLTouch", dependencies: ["bl_touch_mount.stl", "bl_touch_mount_alt.stl"]},
        //{id: "euclid", name: "Euclid", dependencies: ["soon.stl"]},
        {id: "inductive", name: "Inductive", dependencies: ["LJ8_probe_mount.stl", "LJ12_probe_mount.stl", "LJ18_probe_mount.stl"]},
        {id: "none", name: "None", dependencies: []}
    ],
    backplates: [
        {id: "splitloom", name: "Splitloom", dependencies: ["EVA_M1-1_Backplate_SplitLoom.stl", "RearSplitloomArm_V1-1-0.stl"]},
        {id: "chain", name: "Generic Chain", dependencies: ["EVA_M1-1_Backplate_generic_chain.stl", "EVA_M1-1_generic_chain_holder.stl"]}
    ],
    generic: ["Belt_clamp_x2.stl", "EVA_M1-1_FrontPlate_HD_v0-1.stl", "EVA_M1-1_bottom_mgn12_short_duct.stl", "y_endstop.stl", "D2F-L_X_Limit_Stop_Block.stl"]
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