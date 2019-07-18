
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