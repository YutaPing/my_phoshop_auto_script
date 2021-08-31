# my_photoshop_auto_script
My photoshop script(js) for automation.

# 使用環境

photoshop cs6

# 使用プラグイン

scriptlistener 

## addLayersAndMasks.js

### 使い方：このスクリプトをctl + oで開く

- とりあえずA４サイズのまっさらな画像を作成
- 画像が入ったフォルダを選択
- 画像（jpg or jpeg)を読み込む
- 画像をスマートオブジェクトにする
- 各画像にレイヤーマスクをつける
- レイヤーマスクを反転させる
- あとは作業する

## rasted.js

### 使い方：このスクリプトをctl + oで開く

- 全ての画像をラスタライズ
- レイヤーの数を取得
- レイヤーの数だけループしてapply layer mask
- 仕上げ

## select-curv.js

-全てのレイヤー（デフォのbackgroundを除く）に対してちょっと明るめのトーンカーブをかける
