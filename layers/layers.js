var wms_layers = [];


        var lyr_GooglSatelite_0 = new ol.layer.Tile({
            'title': 'Googl Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GooglSatelitedenganLabel_1 = new ol.layer.Tile({
            'title': 'Googl Satelite dengan Label',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PenggunaanLahan_3 = new ol.format.GeoJSON();
var features_PenggunaanLahan_3 = format_PenggunaanLahan_3.readFeatures(json_PenggunaanLahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_3.addFeatures(features_PenggunaanLahan_3);
var lyr_PenggunaanLahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahan_3, 
                style: style_PenggunaanLahan_3,
                popuplayertitle: 'Penggunaan Lahan',
                interactive: true,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_3_0.png" /> Lapangan<br />\
    <img src="styles/legend/PenggunaanLahan_3_1.png" /> Permukiman<br />\
    <img src="styles/legend/PenggunaanLahan_3_2.png" /> Sawah/Ladang<br />\
    <img src="styles/legend/PenggunaanLahan_3_3.png" /> Semak Belukar<br />\
    <img src="styles/legend/PenggunaanLahan_3_4.png" /> Tambang Pasir<br />\
    <img src="styles/legend/PenggunaanLahan_3_5.png" /> Vegetasi/Pepohonan<br />' });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_JalanSetapak_5 = new ol.format.GeoJSON();
var features_JalanSetapak_5 = format_JalanSetapak_5.readFeatures(json_JalanSetapak_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSetapak_5.addFeatures(features_JalanSetapak_5);
var lyr_JalanSetapak_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSetapak_5, 
                style: style_JalanSetapak_5,
                popuplayertitle: 'Jalan Setapak',
                interactive: true,
                title: '<img src="styles/legend/JalanSetapak_5.png" /> Jalan Setapak'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });
var format_Bangunan_7 = new ol.format.GeoJSON();
var features_Bangunan_7 = format_Bangunan_7.readFeatures(json_Bangunan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_7.addFeatures(features_Bangunan_7);
var lyr_Bangunan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_7, 
                style: style_Bangunan_7,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_7.png" /> Bangunan'
            });
var format_BGbatas_desa_8 = new ol.format.GeoJSON();
var features_BGbatas_desa_8 = format_BGbatas_desa_8.readFeatures(json_BGbatas_desa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BGbatas_desa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BGbatas_desa_8.addFeatures(features_BGbatas_desa_8);
var lyr_BGbatas_desa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BGbatas_desa_8, 
                style: style_BGbatas_desa_8,
                popuplayertitle: 'BG — batas_desa',
                interactive: true,
                title: '<img src="styles/legend/BGbatas_desa_8.png" /> BG — batas_desa'
            });
var format_BatasDesa_9 = new ol.format.GeoJSON();
var features_BatasDesa_9 = format_BatasDesa_9.readFeatures(json_BatasDesa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_9.addFeatures(features_BatasDesa_9);
var lyr_BatasDesa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_9, 
                style: style_BatasDesa_9,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_9.png" /> Batas Desa'
            });
var format_BatasKecamatan_10 = new ol.format.GeoJSON();
var features_BatasKecamatan_10 = format_BatasKecamatan_10.readFeatures(json_BatasKecamatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_10.addFeatures(features_BatasKecamatan_10);
var lyr_BatasKecamatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_10, 
                style: style_BatasKecamatan_10,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_10.png" /> Batas Kecamatan'
            });
var format_BatasKabupaten_11 = new ol.format.GeoJSON();
var features_BatasKabupaten_11 = format_BatasKabupaten_11.readFeatures(json_BatasKabupaten_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_11.addFeatures(features_BatasKabupaten_11);
var lyr_BatasKabupaten_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_11, 
                style: style_BatasKabupaten_11,
                popuplayertitle: 'Batas Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_11.png" /> Batas Kabupaten'
            });
var format_BatasProvinsi_12 = new ol.format.GeoJSON();
var features_BatasProvinsi_12 = format_BatasProvinsi_12.readFeatures(json_BatasProvinsi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_12.addFeatures(features_BatasProvinsi_12);
var lyr_BatasProvinsi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvinsi_12, 
                style: style_BatasProvinsi_12,
                popuplayertitle: 'Batas Provinsi',
                interactive: true,
                title: '<img src="styles/legend/BatasProvinsi_12.png" /> Batas Provinsi'
            });
var format_TitikPentingDesa_13 = new ol.format.GeoJSON();
var features_TitikPentingDesa_13 = format_TitikPentingDesa_13.readFeatures(json_TitikPentingDesa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPentingDesa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPentingDesa_13.addFeatures(features_TitikPentingDesa_13);
var lyr_TitikPentingDesa_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPentingDesa_13, 
                style: style_TitikPentingDesa_13,
                popuplayertitle: 'Titik Penting Desa',
                interactive: true,
    title: 'Titik Penting Desa<br />\
    <img src="styles/legend/TitikPentingDesa_13_0.png" /> Balai Desa<br />\
    <img src="styles/legend/TitikPentingDesa_13_1.png" /> Embung Titor Mulyo<br />\
    <img src="styles/legend/TitikPentingDesa_13_2.png" /> Gedung Serbaguna<br />\
    <img src="styles/legend/TitikPentingDesa_13_3.png" /> Lapangan Sapuangin<br />\
    <img src="styles/legend/TitikPentingDesa_13_4.png" /> Lapangan SDN Tegalmulyo<br />\
    <img src="styles/legend/TitikPentingDesa_13_5.png" /> Makam Brajan<br />\
    <img src="styles/legend/TitikPentingDesa_13_6.png" /> Makam Pucang<br />\
    <img src="styles/legend/TitikPentingDesa_13_7.png" /> Masjid Al Adil<br />\
    <img src="styles/legend/TitikPentingDesa_13_8.png" /> Masjid Al Fatah<br />\
    <img src="styles/legend/TitikPentingDesa_13_9.png" /> Masjid Al Furqon<br />\
    <img src="styles/legend/TitikPentingDesa_13_10.png" /> Masjid Al Hidayah<br />\
    <img src="styles/legend/TitikPentingDesa_13_11.png" /> Masjid Al Ikhlas<br />\
    <img src="styles/legend/TitikPentingDesa_13_12.png" /> Masjid Al Muminun<br />\
    <img src="styles/legend/TitikPentingDesa_13_13.png" /> Masjid An Nuur<br />\
    <img src="styles/legend/TitikPentingDesa_13_14.png" /> Masjid At Taqwa<br />\
    <img src="styles/legend/TitikPentingDesa_13_15.png" /> Masjid Baiturrahman<br />\
    <img src="styles/legend/TitikPentingDesa_13_16.png" /> Masjid Baitussalam<br />\
    <img src="styles/legend/TitikPentingDesa_13_17.png" /> Masjid Miftachul Huda<br />\
    <img src="styles/legend/TitikPentingDesa_13_18.png" /> Masjid Miftakhul Huda<br />\
    <img src="styles/legend/TitikPentingDesa_13_19.png" /> Masjid Ngringin<br />\
    <img src="styles/legend/TitikPentingDesa_13_20.png" /> Masjid NU Girpasang<br />\
    <img src="styles/legend/TitikPentingDesa_13_21.png" /> Masjid Nurul Huda<br />\
    <img src="styles/legend/TitikPentingDesa_13_22.png" /> Masjid Umar Bin Khatab<br />\
    <img src="styles/legend/TitikPentingDesa_13_23.png" /> Mushola Darul Fiqih<br />\
    <img src="styles/legend/TitikPentingDesa_13_24.png" /> Pendopo Her<br />\
    <img src="styles/legend/TitikPentingDesa_13_25.png" /> SDN 1 Tegalmulyo<br />\
    <img src="styles/legend/TitikPentingDesa_13_26.png" /> SDN 2 Tegalmulyo<br />\
    <img src="styles/legend/TitikPentingDesa_13_27.png" /> Spot Foto Giripasang<br />\
    <img src="styles/legend/TitikPentingDesa_13_28.png" /> Spot Foto Ujung Kampung<br />\
    <img src="styles/legend/TitikPentingDesa_13_29.png" /> TPU Klerep<br />' });
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasDesa_9,lyr_BatasKecamatan_10,lyr_BatasKabupaten_11,lyr_BatasProvinsi_12,],
                                fold: 'close',
                                title: 'Batas Administrasi'});

lyr_GooglSatelite_0.setVisible(true);lyr_GooglSatelitedenganLabel_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_PenggunaanLahan_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_JalanSetapak_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_Bangunan_7.setVisible(true);lyr_BGbatas_desa_8.setVisible(true);lyr_BatasDesa_9.setVisible(true);lyr_BatasKecamatan_10.setVisible(true);lyr_BatasKabupaten_11.setVisible(true);lyr_BatasProvinsi_12.setVisible(true);lyr_TitikPentingDesa_13.setVisible(true);
var layersList = [lyr_GooglSatelite_0,lyr_GooglSatelitedenganLabel_1,lyr_OpenStreetMap_2,lyr_PenggunaanLahan_3,lyr_Sungai_4,lyr_JalanSetapak_5,lyr_Jalan_6,lyr_Bangunan_7,lyr_BGbatas_desa_8,group_BatasAdministrasi,lyr_TitikPentingDesa_13];
lyr_PenggunaanLahan_3.set('fieldAliases', {'fid': 'fid', 'Lahan': 'Lahan', });
lyr_Sungai_4.set('fieldAliases', {'fid': 'fid', });
lyr_JalanSetapak_5.set('fieldAliases', {'fid': 'fid', });
lyr_Jalan_6.set('fieldAliases', {'full_id': 'full_id', });
lyr_Bangunan_7.set('fieldAliases', {'fid': 'fid', });
lyr_BGbatas_desa_8.set('fieldAliases', {'fid': 'fid', });
lyr_BatasDesa_9.set('fieldAliases', {'fid': 'fid', 'WADMKD': 'WADMKD', });
lyr_BatasKecamatan_10.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', });
lyr_BatasKabupaten_11.set('fieldAliases', {'fid': 'fid', 'WADMKK': 'WADMKK', });
lyr_BatasProvinsi_12.set('fieldAliases', {'fid': 'fid', 'WADMPR': 'WADMPR', });
lyr_TitikPentingDesa_13.set('fieldAliases', {'fid': 'fid', 'Label': 'Label', 'Kategori': 'Kategori', 'Foto': 'Foto', });
lyr_PenggunaanLahan_3.set('fieldImages', {'fid': 'TextEdit', 'Lahan': 'TextEdit', });
lyr_Sungai_4.set('fieldImages', {'fid': '', });
lyr_JalanSetapak_5.set('fieldImages', {'fid': '', });
lyr_Jalan_6.set('fieldImages', {'full_id': '', });
lyr_Bangunan_7.set('fieldImages', {'fid': '', });
lyr_BGbatas_desa_8.set('fieldImages', {'fid': '', });
lyr_BatasDesa_9.set('fieldImages', {'fid': '', 'WADMKD': '', });
lyr_BatasKecamatan_10.set('fieldImages', {'fid': '', 'WADMKC': '', });
lyr_BatasKabupaten_11.set('fieldImages', {'fid': '', 'WADMKK': '', });
lyr_BatasProvinsi_12.set('fieldImages', {'fid': '', 'WADMPR': '', });
lyr_TitikPentingDesa_13.set('fieldImages', {'fid': 'TextEdit', 'Label': 'TextEdit', 'Kategori': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_PenggunaanLahan_3.set('fieldLabels', {'fid': 'hidden field', 'Lahan': 'hidden field', });
lyr_Sungai_4.set('fieldLabels', {'fid': 'hidden field', });
lyr_JalanSetapak_5.set('fieldLabels', {'fid': 'hidden field', });
lyr_Jalan_6.set('fieldLabels', {'full_id': 'hidden field', });
lyr_Bangunan_7.set('fieldLabels', {'fid': 'hidden field', });
lyr_BGbatas_desa_8.set('fieldLabels', {'fid': 'hidden field', });
lyr_BatasDesa_9.set('fieldLabels', {'fid': 'hidden field', 'WADMKD': 'inline label - visible with data', });
lyr_BatasKecamatan_10.set('fieldLabels', {'fid': 'hidden field', 'WADMKC': 'inline label - visible with data', });
lyr_BatasKabupaten_11.set('fieldLabels', {'fid': 'hidden field', 'WADMKK': 'inline label - visible with data', });
lyr_BatasProvinsi_12.set('fieldLabels', {'fid': 'hidden field', 'WADMPR': 'inline label - visible with data', });
lyr_TitikPentingDesa_13.set('fieldLabels', {'fid': 'hidden field', 'Label': 'inline label - always visible', 'Kategori': 'hidden field', 'Foto': 'inline label - visible with data', });
lyr_TitikPentingDesa_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});