
//ラスタライズ
activeDocument.rasterizeAllLayers();


var doc = app.activeDocument;
var layerLength = doc.layers.length;
//backgroundもlayerLengthに入るので＜で含めない
for(var len = 1; len < layerLength; len++){
  applyLayers(len)
}


function applyLayers(layerNum){

// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc23 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref17 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref17.putName( idLyr, "Layer " + layerNum );
    desc23.putReference( idnull, ref17 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc23.putBoolean( idMkVs, false );
executeAction( idslct, desc23, DialogModes.NO );

// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc24 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref18 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idMsk = charIDToTypeID( "Msk " );
        ref18.putEnumerated( idChnl, idChnl, idMsk );
    desc24.putReference( idnull, ref18 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc24.putBoolean( idMkVs, false );
executeAction( idslct, desc24, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
    var desc25 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref19 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref19.putEnumerated( idChnl, idOrdn, idTrgt );
    desc25.putReference( idnull, ref19 );
    var idAply = charIDToTypeID( "Aply" );
    desc25.putBoolean( idAply, true );
executeAction( idDlt, desc25, DialogModes.NO );
}

