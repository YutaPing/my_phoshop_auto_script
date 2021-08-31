
// ※これをかけるときはなにかレイヤーを選択している必要がある
//レイヤーに明るめのカーブをかける
var doc = app.activeDocument;
var layerLength = doc.layers.length;
//backgroundもlayerLengthに入るので＜で含めない
for(var len = 1; len < layerLength; len++){
  applyCurv(len)
}


function applyCurv(layerNum){

// =======================================================
// ラスタライズされている画像を1枚取得
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
// 上で取得した画像にカーブを設定
var idCrvs = charIDToTypeID( "Crvs" );
    var desc3 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc3.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idAdjs = charIDToTypeID( "Adjs" );
        var list1 = new ActionList();
            var desc4 = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref2 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idCmps = charIDToTypeID( "Cmps" );
                ref2.putEnumerated( idChnl, idChnl, idCmps );
            desc4.putReference( idChnl, ref2 );
            var idCrv = charIDToTypeID( "Crv " );
                var list2 = new ActionList();
                    var desc5 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc5.putDouble( idHrzn, 0.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc5.putDouble( idVrtc, 0.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list2.putObject( idPnt, desc5 );
                    var desc6 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc6.putDouble( idHrzn, 90.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc6.putDouble( idVrtc, 130.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list2.putObject( idPnt, desc6 );
                    var desc7 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc7.putDouble( idHrzn, 255.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc7.putDouble( idVrtc, 255.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list2.putObject( idPnt, desc7 );
            desc4.putList( idCrv, list2 );
        var idCrvA = charIDToTypeID( "CrvA" );
        list1.putObject( idCrvA, desc4 );
    desc3.putList( idAdjs, list1 );
executeAction( idCrvs, desc3, DialogModes.NO );
}

