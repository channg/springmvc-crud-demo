(function($){
	$.fn.suspend = function(options){
		$(this).mouseover(function(){
			var top = $(this).offset().top +$(this).height()/2;
			var left =$(this).offset().left+$(this).width()+40;
			$('body').append("<div class='suspend_warp'></div>");
			options.callBack($(this),$('.suspend_warp'));
			var suspend_warp_height = $('.suspend_warp').height();
			var s_new = suspend_warp_height>options.maxHeight?options.maxHeight:suspend_warp_height;
			top = top - s_new/3;
			$('.suspend_warp').remove();
			$('body').append("<div class='suspend_warp' style='top:"+top+"px;left:"+left+"px;'></div>");
			if(suspend_warp_height>options.maxHeight){
				$('.suspend_warp').css("height",options.maxHeight+"px");
			}
			options.callBack($(this),$('.suspend_warp'));
			$('.suspend_warp').fadeIn();
			$(this).mouseout(function(){
				$('.suspend_warp').remove();
			})
		})
	}
})(jQuery)