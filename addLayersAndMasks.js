// alert('photoshopCS6');
// フォトショップCS6用自動化
// 
// 初回のみA4サイズのキャンバス作成
// 画像の取り込み(folderの中身全部取り出す)
// スマートオブジェクト化
// 画像にレイヤマスク追加
// マスク反転
// 

preferences.rulerUnits = Units.PIXELS;

// var doc = app.documents[1].name; //2番めのドキュメント名
//var adoc = activeDocument.name;//activeなドキュメント名

var docLeng = app.documents.length;

//ドキュメントがなければ実行　A4サイズ（ピクセル単位）でベース画像を作成
if (docLeng == 0) {
var docObj = app.documents.add(2894,4093);//backgournd作成a4 pixel
var layObj = docObj.artLayers.add();//layerを追加
}

// layObj.kind = LayerKind.TEXT;//text layer 追加
// layObj.textItem.contents = "Love and Peace";//layerの中身
// layObj.textItem.size =  36;//文字のサイズ
//

// var imagePaths = ['c:\\img\\04.jpg','c:\\img\\03.jpg','c:\\img\\02.jpg'];
var folder = Folder.selectDialog('画像フォルダを選択');

if(folder)
{
  var files = folder.getFiles(/jpe?g/);
  for(var i = 0; i < files.length; i++ ) {
      addLayersAndMasks(files[i]);
  }

}


function addLayersAndMasks(path){
      fileObj = new File(path);
      open(fileObj);
      activeDocument.selection.selectAll();
      activeDocument.activeLayer.copy();
      activeDocument.close(SaveOptions.DONOTSAVECHANGES);
      // docObj.paste();
      activeDocument.paste();

      //smartobjectにする
      var idnewPlacedLayer = stringIDToTypeID( "newPlacedLayer" );
      executeAction( idnewPlacedLayer, undefined, DialogModes.NO );

      // ==== addLayerMask
      var idMk = charIDToTypeID( "Mk  " );
          var desc2 = new ActionDescriptor();
          var idNw = charIDToTypeID( "Nw  " );
          var idChnl = charIDToTypeID( "Chnl" );
          desc2.putClass( idNw, idChnl );
          var idAt = charIDToTypeID( "At  " );
              var ref1 = new ActionReference();
              var idChnl = charIDToTypeID( "Chnl" );
              var idChnl = charIDToTypeID( "Chnl" );
              var idMsk = charIDToTypeID( "Msk " );
              ref1.putEnumerated( idChnl, idChnl, idMsk );
          desc2.putReference( idAt, ref1 );
          var idUsng = charIDToTypeID( "Usng" );
          var idUsrM = charIDToTypeID( "UsrM" );
          var idRvlA = charIDToTypeID( "RvlA" );
          desc2.putEnumerated( idUsng, idUsrM, idRvlA );
      executeAction( idMk, desc2, DialogModes.NO );

      // ========= maskを反転させる
      var idInvr = charIDToTypeID( "Invr" );
      executeAction( idInvr, undefined, DialogModes.NO );
      }
