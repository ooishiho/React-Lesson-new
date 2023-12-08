$(document).ready(function() {
  //jQプログラムの内容
  $('body').html('<h1>Hellow jQuery!!</h1>');
});

//$(function() {
  //jQプログラム内容（省略ver）
  //$(セレクタ).メソッド(パラメータ);
  //セレクタ=>操作対象
  //メソッド=>何を行うのか
  //パラメータ=>書き換わる内容(指定しない場合メソッドが取得される)
  //=>[どこに対して何を行うか]といった処理
//});

$(function() {
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});