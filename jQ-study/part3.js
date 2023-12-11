/*global $*/
//thisを使用し、以下の内容を簡潔にする
/*$(function(){
  $('.bg1').on('click',function(){
    $('.bg1').slideUp();
  });

  $('.bg2').on('click',function(){
    $('.bg2').slideUp();
  });

  $('.bg3').on('click',function(){
    $('.bg3').slideUp();
  });

  $('.bg4').on('click',function(){
    $('.bg4').slideUp();
  });
});*/

//簡潔に記述したイベント(thisはクリックした対象を意味する)
//コード上ではどこをクリックした動きか判断しずらい
$(function(){
  $('.box1').on('click',function(){
    $(this).slideUp();
  });
});


//childrenを使用したイベント（対象すべてに同じイベントを付与）
$(function(){
  $('button').on('click', function(){
    //ulの子要素liが対象となる
    $('ul').children().css('color','red');
  });
});