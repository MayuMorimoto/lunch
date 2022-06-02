//初期表示→jsでの処理はなし　どこに行こうか　が表示されている。
//スタートボタン押下時処理
//ルーレット回転処理
//ストップボタン押下時処理

////行きたい場所を配列に入れる
//var list = [];
////フラグ
//var flg = false;
////表示させる箇所
//var plase = "";
//
//function start(){
//	//フラグがtrueの時回る
//	flg = true;
//	//二度押しを防ぐ
//	var startBtn = document.getElementById(start);
//	startBtn.disabled = true;
//	//ルーレットが回す為に乱数を作成
//	setInterval(Function()
//			if(flg === true){
//			//乱数で決めた数字が表示させたい要素番号
//			plase = list[Math.Floor(Math.random()* list.length)];
//
//
//	}
//}
(function(){


	// 変数宣言
	var startBtn = document.getElementById('start');
	var isStart = false;
	var roulette = document.getElementById('roulette');
	var place = '';
	var intervalID = -1;
	var spotList = [];





// 行きたい場所を配列にぶち込む
spotList = [
                    '<a>韓国料理</a>',
                    '<a>わいのすけ</a>',
                    '<a>大盛り中華料理</a>',
                    '<a>牛カツ</a>',
                    '<a>明太子食べ放題</a>',
                    '<a>韓国料理</a>',
                    '<a>つけ麺</a>',
                    '<a>焼肉</a>'
                ];
$('#test').on('click',clickedStart);
$('#stop').on('click',clickedStop);

// スタートボタンを押したときの処理
function clickedStart() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            place = spotList[Math.floor( Math.random() * spotList.length )];
            roulette.className = 'name';
            document.getElementById("isPlace").innerHTML = place;
        }
    }, 100);
}

// ストップボタンを押した時の処理
function clickedStop() {
    'use strict';
    clearTimeout(intervalID);
    startBtn.disabled = "";
    isStart = false;
    if(place === '') {
        alert("スタートボタンを押してからストップボタンを押してね！");
    } else {
// 結果を画面に表示
    roulette.className = 'name';
    document.getElementById("isPlace").innerHTML = place;
    }
}

}());