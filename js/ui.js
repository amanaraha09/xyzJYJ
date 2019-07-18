$(function(){

	kakao.header();

});


var kakao = {
	header : function(){
		$(window).on("scroll", function(){
			var nScrl = $(this).scrollTop();
			var $header = $("#header_container");
			if( nScrl > 0 ){
				$header.addClass("scrollOn");
			} else {
				$header.removeClass("scrollOn");
			}
		});
	}
}


$(function(){

	

tabFn(0);
			$('.tabWrap .tabMenu li a').on('click', function(){
				var idx = $('.tabWrap .tabMenu li').index($(this).parent());
				tabFn(idx);
				return false;
			});
			function tabFn(idx){
				$('.tabWrap .tabMenu li a').removeClass('active');
				$('.tabWrap .tabMenu li').eq(idx).find('a').addClass('active');
				$('.tabWrap .tabContent').hide();;
				$('.tabWrap .tabContent').eq(idx).show();
			}



});

$(function(){

			$('.gnb_wrap .N1').on('click', function(){
				var pos=$('#Gen_wrap').offset().top-160;
				$('html,body').animate({
					'scrollTop':pos
				},900);
			});
			$('.gnb_wrap .N2').on('click', function(){
				var pos=$('#xyzInfo').offset().top-90;
				$('html,body').animate({
					'scrollTop':pos
				},900);
			});
			$('.gnb_wrap .N3').on('click', function(){
				var pos=$('#fight_wrap').offset().top-220;
				$('html,body').animate({
					'scrollTop':pos
				},900);
			});
			$('.solve_wrap .btn_secNav').on('click', function(){
				var pos=$('#xyzInfo').offset().top-90;
				$('html,body').animate({
					'scrollTop':pos
				},900);
			});
});




