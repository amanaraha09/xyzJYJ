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

	$('.yGen').on('click', function(){
		$('.yGen').addClass('clickshow');
	});
	$('.xGen').on('click', function(){
		$('.yGen').removeClass('clickshow');
	});
	$('.zGen').on('click', function(){
		$('.yGen').removeClass('clickshow');
	});


	$('.yGen').on('click', function(){
		$('#yGen').addClass('yshow');
	});

	$('.xGen').on('click', function(){
		$('#yGen').removeClass('yshow');
	});
	$('.zGen').on('click', function(){
		$('#yGen').removeClass('yshow');
	});



	$('.xGen').on('click', function(){
		$('.xGen').addClass('clickshow');
	});
	$('.yGen').on('click', function(){
		$('.xGen').removeClass('clickshow');
	});
	$('.zGen').on('click', function(){
		$('.xGen').removeClass('clickshow');
	});


	$('.xGen').on('click', function(){
		$('#xGen').addClass('xshow');
	});
	$('.yGen').on('click', function(){
		$('#xGen').removeClass('xshow');
	});
	$('.zGen').on('click', function(){
		$('#xGen').removeClass('xshow');
	});



	$('.zGen').on('click', function(){
		$('.zGen').addClass('clickshow');
	});
	$('.yGen').on('click', function(){
		$('.zGen').removeClass('clickshow');
	});
	$('.xGen').on('click', function(){
		$('.zGen').removeClass('clickshow');
	});


	$('.zGen').on('click', function(){
		$('#zGen').addClass('zshow');
	});
	$('.yGen').on('click', function(){
		$('#zGen').removeClass('zshow');
	});
	$('.xGen').on('click', function(){
		$('#zGen').removeClass('zshow');
	});	

});


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


		

