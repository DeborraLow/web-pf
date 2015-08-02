// JavaScript Document
$(function(){
	//ボタン(id:move-page-top)のクリックイベント
	$('#move-page-top').click(function(){
		//ページトップへ移動する
		$('html,body').animate({scrollTop:0},'slow');
	});
	
});

/*
$(function(){
     $('#move-page-top img').hover(
	 function(){
        $(this).attr('src', $(this).attr('src').replace('2', '1'));
          }, 
     function(){
             if (!$(this).hasClass('currentPage')) {	 
             $(this).attr('src', $(this).attr('src').replace('1', '2'));}
   });
});
*/