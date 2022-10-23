//This file will aid in building the configurator.
// Written by #KaizenKody#9426


// var _hardwareList = {
//     bolt: [
//         // M3 BOLTS 
//         {
//             partname: "m3x6", image: "urltoimage", identifier: "m3x6_7991",
//             type: { din: "7991", iso: "10642", description: "FHCS" },
//             source: [{ region: "CN", name: "AliExpress - Nindejin", url: "https://s.click.aliexpress.com/e/_AEXIMh", verified: true },
//             { region: "US", name: "Boltdepot", url: "https://www.boltdepot.com/Product-Details.aspx?product=7212", verified: true },
//             { region: "CA", name: "Boltsplus", url: "https://boltsplus.ca/productInfo.php?prodID=4103-0001", verified: true },
//             ]
//         },
//         {
//             partname: "m3x8", image: "urltoimage", identifier: "m3x8_912",
//             type: { din: "912", iso: "4762 ", description: "SHCS" },
//             source: [{ region: "CN", name: "AliExpress - Nindejin", url: "https://s.click.aliexpress.com/e/_9yeIIO", verified: true },
//             { region: "US", name: "Boltdepot", url: "https://www.boltdepot.com/Product-Details.aspx?product=6379", verified: true },
//             { region: "CA", name: "Boltsplus", url: "https://boltsplus.ca/productInfo.php?prodID=4101-0037", verified: true },
//             ]
//         },
//         {
//             partname: "m3x10", image: "urltoimage", identifier: "m3x10_912",
//             type: { din: "912", iso: "4762 ", description: "SHCS" },
//             source: [{ region: "CN", name: "AliExpress - Nindejin", url: "https://s.click.aliexpress.com/e/_9yeIIO", verified: true },
//             { region: "US", name: "Boltdepot", url: "https://www.boltdepot.com/Product-Details.aspx?product=6380", verified: true },
//             { region: "CA", name: "Boltsplus", url: "https://boltsplus.ca/productInfo.php?prodID=4101-0040", verified: true },
//             ]
//         },
//         // END M3 BOLTS

//         // M4 BOLTS
//         {
//             partname: "m4x16", image: "urltoimage", identifier: "m4x16_912",
//             type: { din: "912", iso: "4762 ", description: "SHCS" },
//             source: [{ region: "CN", name: "AliExpress - Nindejin", url: "https://s.click.aliexpress.com/e/_9yeIIO", verified: true },
//             { region: "US", name: "Boltdepot", url: "https://www.boltdepot.com/Product-Details.aspx?product=6396", verified: true },
//             { region: "CA", name: "Boltsplus", url: "https://boltsplus.ca/productInfo.php?prodID=4101-0088", verified: true },
//             ]
//         },

//         // END M4 BOLTS

//         // M5 BOLTS 
//         {
//             partname: "m5x8", image: "urltoimage", identifier: "m5x8_7380",
//             type: { din: "7380", iso: "7380", description: "BHCS" },
//             source: [{ region: "CN", name: "AliExpress - Nindejin", url: "https://s.click.aliexpress.com/e/_A19eD7", verified: true },
//             { region: "US", name: "Boltdepot", url: "https://www.boltdepot.com/Product-Details.aspx?product=6631", verified: true },
//             { region: "CA", name: "Boltsplus", url: "https://boltsplus.ca/productInfo.php?prodID=4104-0049", verified: true },
//             ]
//         },
//         {
//             partname: "m5x10", image: "urltoimage", identifier: "m5x10_912",
//             type: { din: "912", iso: "4762 ", description: "SHCS" },
//             source: [{ region: "CN", name: "AliExpress - Nindejin", url: "https://s.click.aliexpress.com/e/_9yeIIO", verified: true },
//             { region: "US", name: "Boltdepot", url: "https://www.boltdepot.com/Product-Details.aspx?product=6407", verified: true },
//             { region: "CA", name: "Boltsplus", url: "https://boltsplus.ca/productInfo.php?prodID=4101-0127", verified: true },
//             ]
//         },
//         // END M5 BOLTS

//     ],
//     nuts: [
//         // T-NUTS BOLTS 
//         {
//             partname: "M3 T-nut", image: "urltoimage", identifier: "m3_rollin_tnut",
//             type: { description: "M3 Roll in T-Nuts" },
//             source: [{ region: "CN", name: "Aliexpress - Link CNC", url: "https://s.click.aliexpress.com/e/_9JpX52", verified: true },
//             { region: "DE", name: "Dold Mechatronik", url: "https://www.dold-mechatronik.de/Nutenstein-137x7mm-einschwenkbar-Nut-8-M8-l22mm-Federkugel-Edelstahl-14301-14305", verified: false },
//             { region: "GB", name: "Printyplease", url: "https://www.printyplease.uk/M3TNUT", verified: false },
//             { region: "US", name: "Deepfriedhero", url: "https://deepfriedhero.in/products/roll-in-spring-nuts?variant=39612700393641", verified: false },
//             { region: "US", name: "KB-3D", url: "https://kb-3d.com/store/extrusion-framing/365-t-nut-drop-in-roll-in-40-series-8mm-slot-width-m3-threads.html", verified: false },
//             { region: "CA", name: "Sparta3D", url: "https://sparta3d.ca/products/3d-sidekick-roll-in-t-nuts-tnuts-tnuts-t-nuts?_pos=3&_sid=916827c77&_ss=r", verified: false },
//             { region: "CA", name: "Spool3D", url: "https://spool3d.ca/m3-roll-in-spring-t-nut-2020", verified: false },
//             ]
//         },
//         {
//             partname: "M5 T-nut", image: "urltoimage", identifier: "m5_rollin_tnut",
//             type: { description: "M5 Roll in T-Nuts" },
//             source: [{ region: "CN", name: "Aliexpress - Link CNC", url: "https://s.click.aliexpress.com/e/_9JpX52", verified: true },
//             { region: "DE", name: "Dold Mechatronik", url: "https://www.dold-mechatronik.de/Nutenstein-137x7mm-einschwenkbar-Nut-8-M8-l22mm-Federkugel-Edelstahl-14301-14305", verified: false },
//             { region: "US", name: "KB-3D", url: "https://kb-3d.com/store/extrusion-framing/253-t-nut-roll-in-30-series-8mm-slot-width-m5-threads.html", verified: false },
//             { region: "CA", name: "Sparta3D", url: "https://sparta3d.ca/products/3d-sidekick-roll-in-t-nuts-tnuts-tnuts-t-nuts?variant=42096937337088", verified: false },
//             { region: "CA", name: "Spool3D", url: "https://spool3d.ca/m5-roll-in-spring-t-nut-2020", verified: false },
//             ]
//         },
//     ],
//     extrusions: [
//         // T-NUTS BOLTS 
//         {
//             partname: "2020", image: "urltoimage", identifier: "extrusion_2020",
//             type: { description: "Extrusion" },
//             source: [{ region: "NL", name: "Aluxprofiel", url: "https://www.aluxprofiel.nl/aluminium-constructieprofiel-2020-zwart/a3957?c=3470", verified: true },
//             { region: "US", name: "Misumi", url: "https://us.misumi-ec.com/vona2/detail/110302683830/?Inch=0", verified: true },
//             ]
//         },
//     ]
// }

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

fetch_Data().then(result => {
    document.getElementById("generatedDiv").innerHTML = source_generator(JSON.parse(result).document);
})

function source_generator(database) {
    var source_generator = '';

    for (const key in database) {
        if (key == "_id")
            continue;

        if (Object.hasOwnProperty.call(database, key)) {
            const element = database[key];
            source_generator = source_generator += element.reduce((prev, item) => {
                return `${prev} ${source_html(item)}`;
            }, "")

        }
    }

    document.getElementById("pageLoading").remove();
    return source_generator;
}


function source_html(item) {
    const sourceRows = item.source.reduce((prev, source) => {
        return `${prev}
        <tr>
        <td> <span class="fi fi-${source.region.toLowerCase()}"> </span> </td>
        <td> ${source.verified ? '<i class="bi bi-check-all"></i>' : ''}
        <a href="${source.url}" target="_blank"> ${source.name} </a></td>
        </tr>
        `
    }, '')

    const noteRow =
        `
        ${item.type.note ? `
        <tr>
        <td>Note</td>
        <td>${item.type.note}</td>
        </tr>
        ` : ''} `;

    return `
        <div id="${item.identifier}" class="storebox__item">
            <div onclick="location.href='##'; "class="background_close"></div>
            <div class="content">
                <div class="titlebar"> ${item.partname.toProperCase()} - ${item.type.description} </div>
                <a href=##" class="close"></a>
                <div class="table-wrapper">
                    <table class="“store_table” cellspacing="0">
                        <tr>
                            <th>Region</th>
                            <th>URL</th>
                        </tr>

                        ${noteRow}
                        ${sourceRows}
                    </table>
                </div>
            </div>
        </div>
    `
}
