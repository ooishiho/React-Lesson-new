//$(document).ready(function() {
  //jQプログラムの内容
/*  $('body').html('<h1>Hellow jQuery!!</h1>');
});*/

//$(function() {
  //jQプログラム内容（省略ver）
  //$(セレクタ).メソッド(パラメータ);
  //セレクタ=>操作対象
  //メソッド=>何を行うのか
  //パラメータ=>書き換わる内容(指定しない場合メソッドが取得される)
  //=>[どこに対して何を行うか]といった処理
//});

//boxを表示する記述
//cssの記述内容をjsで変更する記述
/*$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});
*/
//アニメーションの記述(up,downでアニメーションに上下変化ができる)
$(function(){
  $('.box1').slideDown(1000);
});

$(function(){
  $('.box2').slideUp(1000);
});

//表示されるような記述にしたり、表示されていたものを消す記述にできる
//(noneを記述、削除して変化をつける)
//表示するような記述
$(function(){
  $('.box3').show();
  $('.box3').css({'background-color': '#0000FF'});
});
//表示されていたものを消す記述
$(function(){
  $('.box4').hide();
});

$(function() {
  //まず上から下に動くような記述をする(slideDownの速さ変更は第一引数カンマで区切るようにする)
  $('.box5').slideDown(1000,function() {
    //その後下から上に動くように記述する(なお、スライド後背景色が変更するようにする)
    $('.box5').css({
      'background-color': '#dda0dd',
      'width': '200px',
      'heigth': '100px'
    //背景色が変更した後に下から上に動くように記述する
    }).slideUp(1000);
  });
});