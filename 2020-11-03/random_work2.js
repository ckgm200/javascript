<<<<<<< HEAD
startX = 300
startY = 200
startX2 = 300
startY2 = 200

=======

var N = 10
>>>>>>> 23f3b0288214b0d08327a5562cb823db7c2d589e
var SCALE = 50
WIDTH = 600
HEIGHT = 400
var timer = null
<<<<<<< HEAD

=======
startX=new Array(N)
startY=new Array(N)
for(var i=0;i<N;i++){
    startX[i]=300
    startY[i]=200
}
>>>>>>> 23f3b0288214b0d08327a5562cb823db7c2d589e
function makeTheta() {
    return 2 * Math.PI * Math.random()
}
function doAction() {
    var log = function () {
<<<<<<< HEAD
        var dx, dy  //  1回あたりの移動量を計算する
        // 移動量の計算
        var kakudo = makeTheta()
        dx = SCALE * Math.sin(kakudo)
        dy = SCALE * Math.cos(kakudo)
        // キャンバスの取得と、描画の準備
        var item = document.getElementById("myCanvas")
        var context = item.getContext("2d")
        if (item.getContext) {
            // ペンを使用する
            context.strokeStyle="#00FFFF"
            context.beginPath()
            // ペンの始点の移動
            context.moveTo(startX, startY)
            // 画面サイズをオーバーするときの処理

            // ログ出力
            //    console.log( "   :"+startX+ ", startY:"+startY)
            // ペンの終点の移動
            context.lineTo(startX + dx, startY + dy)
            // 次の支店の移動
            startX += dx
            startY += dy
            // ペン処理の終了
            context.closePath()
            // 描画
            context.stroke()
            // ペンを使用する
        // 移動量の計算
         kakudo = makeTheta()
        dx = SCALE * Math.sin(kakudo)
        dy = SCALE * Math.cos(kakudo)
            context.strokeStyle="#FF0000"
            context.beginPath()
            // ペンの始点の移動
            context.moveTo(startX2, startY2)
            // 画面サイズをオーバーするときの処理

            // ログ出力
            //    console.log( "   :"+startX+ ", startY:"+startY)
            // ペンの終点の移動
            context.lineTo( startX2+dx, startY2+dy)
            // 次の支店の移動
            startX2+=dx
            startY2+=dy
            // ペン処理の終了
            context.closePath()
            // 描画
            context.stroke()
=======
        var dx = new Array(N), dy = new Array(N)  //  1回あたりの移動量を計算する
        // 移動量の計算
        
        for (var i = 0; i < 0; i++) {
            var kakudo = makeTheta()
            dx[i] = SCALE * Math.sin(kakudo)
            dy[i] = SCALE * Math.cos(kakudo)
            // キャンバスの取得と、描画の準備
            var item = document.getElementById("myCanvas")
            var context = item.getContext("2d")
            if (item.getContext) {
                // ペンを使用する
                context.strokeStyle = "#00FFFF"
                context.beginPath()
                // ペンの始点の移動
                context.moveTo(startX[i], startY[i])
                // 画面サイズをオーバーするときの処理

                // ログ出力
                //    console.log( "   :"+startX+ ", startY:"+startY)
                // ペンの終点の移動
                context.lineTo(startX[i] + dx[i], startY[i] + dy[i])
                // 次の支店の移動
                startX[i] += dx[i]
                startY[i] += dy
                // ペン処理の終了
                context.closePath()
                // 描画
                context.stroke()
            }
>>>>>>> 23f3b0288214b0d08327a5562cb823db7c2d589e
        }
        //    console.log  ("test")
    }
    timer = setInterval(log, 10)
}
function stopAction() {
    // タイマーが実行されている場合には、nullではない
    if (null != timer) {
        clearInterval(timer)
        timer = null
    }
}