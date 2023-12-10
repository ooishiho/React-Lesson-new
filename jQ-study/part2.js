/*global $*/
//マウスオーバー時の記述
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000FF'});
  });
});

/*イベントの記述
$('.セレクタ名').イベント名(function(){
  イベント発生時に行われる処理
});
*/

//マウスオーバー&再び赤色に戻る記述
$(function(){
  $('.box2').mouseover(function(){
    $('.box2').css({'background-color':'#0000FF'});
  });
  $('.box2').mouseout(function(){
    $('.box2').css({'background-color':'#FF0000'});
  });
});

//cssの中身をより簡潔にしたイベント(マウスカーソルの動きによってclass変化する)
$(function(){
  $('.box3').mouseover(function(){
    //addClassは対象のHTMLにclass属性を追加する
    //（つまり、HTML classのbox3にcssで定義したbox3-ext classの属性をつける）
    $('.box3').addClass('box3-ext');
  });
  $('.box3').mouseout(function(){
    //removeClassは対象のHTMLのclass属性を解除する
    //つまり、HTML classのbox3にcssで定義したbox3-ext class属性を解除する（取り消す）
    $('.box3').removeClass('box3-ext');
  });
});

//クリックした時のイベント
$(function(){
  $('.box4').on('click',function(){
    //クリックされた時classを付与する
    $('.box4').addClass('box4-ext');
  });
  $('.box4').mouseout('click',function(){
    //マウスアウト時classを解除する
    $('.box4').removeClass('box4-ext');
  });
});