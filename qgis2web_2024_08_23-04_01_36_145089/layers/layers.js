var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasDesaterbaruMaret2020_1 = new ol.format.GeoJSON();
var features_BatasDesaterbaruMaret2020_1 = format_BatasDesaterbaruMaret2020_1.readFeatures(json_BatasDesaterbaruMaret2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaterbaruMaret2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaterbaruMaret2020_1.addFeatures(features_BatasDesaterbaruMaret2020_1);
var lyr_BatasDesaterbaruMaret2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaterbaruMaret2020_1, 
                style: style_BatasDesaterbaruMaret2020_1,
                popuplayertitle: "Batas Desa terbaru Maret 2020",
                interactive: true,
                title: '<img src="styles/legend/BatasDesaterbaruMaret2020_1.png" /> Batas Desa terbaru Maret 2020'
            });
var format_namadanalamatmuseumbandung_2 = new ol.format.GeoJSON();
var features_namadanalamatmuseumbandung_2 = format_namadanalamatmuseumbandung_2.readFeatures(json_namadanalamatmuseumbandung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_namadanalamatmuseumbandung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_namadanalamatmuseumbandung_2.addFeatures(features_namadanalamatmuseumbandung_2);
var lyr_namadanalamatmuseumbandung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_namadanalamatmuseumbandung_2, 
                style: style_namadanalamatmuseumbandung_2,
                popuplayertitle: "nama dan alamat museum bandung",
                interactive: true,
                title: '<img src="styles/legend/namadanalamatmuseumbandung_2.png" /> nama dan alamat museum bandung'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasDesaterbaruMaret2020_1.setVisible(true);lyr_namadanalamatmuseumbandung_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasDesaterbaruMaret2020_1,lyr_namadanalamatmuseumbandung_2];
lyr_BatasDesaterbaruMaret2020_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_namadanalamatmuseumbandung_2.set('fieldAliases', {'Museum Name': 'Museum Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BatasDesaterbaruMaret2020_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'KDPKAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_namadanalamatmuseumbandung_2.set('fieldImages', {'Museum Name': '', 'Latitude': '', 'Longitude': '', });
lyr_BatasDesaterbaruMaret2020_1.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'KDPKAB': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_namadanalamatmuseumbandung_2.set('fieldLabels', {'Museum Name': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_namadanalamatmuseumbandung_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});