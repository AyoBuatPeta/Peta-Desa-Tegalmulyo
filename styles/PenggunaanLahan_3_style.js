var size = 0;
var placement = 'point';
function categories_PenggunaanLahan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Lapangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,224,190,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Permukiman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,239,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sawah/Ladang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,241,199,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Semak-Semak':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,215,171,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tambang Pasir':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,158,158,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetasi/Pepohonan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,192,133,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PenggunaanLahan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Lahan");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PenggunaanLahan_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
