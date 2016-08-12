(function($){
	//鼠标是否在 对话框和目标节点上over
	var desc_over = false;
	//定时器
	var timeout = null;
	function removedata(){
		if(!desc_over){$(".desc_54556").remove();}
	}
	$.fn.descshow=function(data){
		if($(this)!=null){
			//leave事件隐藏对话框
			var leave_time = 500;
			$(this).mouseover(function(){
				desc_over = true;
				window.clearInterval(timeout);
				var jiantou_width = data.arrowLenght;
				var jiantou_space = 10;
				var border_radius=5;
				var top = $(this).offset().top;
				var left =$(this).offset().left;
				if($(".desc_54556")[0]==null){
					//左侧
					if(false){
						top= top-data.height/2;
						top+=$(this).height()/2;
						left= left+ $(this).width();
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div style="left:'+(jiantou_space+jiantou_width)+'px;width:'+data.width+'px;height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;top:0;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px"></div>';
						var jiantou_1='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid '+data.borderColor+';position:relative;left:'+jiantou_space+'px;top:'+jiantou_top+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:absolute;left:'+(jiantou_space+data.borderWidth)+'px;top:'+jiantou_top+'px;"></div>'
						$('body').append('<div class="desc_54556" style=";position:absolute;top:'+top+'px;left:'+left+'px">'+jiantou_1+jiantou_2+innner_div+'</div>')

						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						})
					}else if(false){
						left= left-data.width/2;
						left-=$(this).width()/2;
						left= left+ $(this).width();
						top= top-data.height;
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div style="top:'+(-(jiantou_space+jiantou_width))+'px;width:'+data.width+'px;height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px"></div>';
						var jiantou_1='<div style="width:0; height:0;border-left:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid transparent;border-top:'+jiantou_width+'px solid '+data.borderColor+';position:relative;left:'+(data.width/2-data.arrowLenght)+'px;top:'+(data.height-data.arrowLenght-jiantou_space)+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-left:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid transparent;border-top:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:relative;left:'+(data.width/2-data.arrowLenght)+'px;top:'+(data.height-data.arrowLenght*2-jiantou_space-data.borderWidth)+'px;"></div>'
						$('body').append('<div class="desc_54556" style=";position:absolute;top:'+top+'px;left:'+left+'px;">'+jiantou_1+jiantou_2+innner_div+'</div>')
						
						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						}) 
					}else if(true){
						top= top-data.height/2;
						top+=$(this).height()/2;
						
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div style="right:'+(jiantou_space+data.arrowLenght)+'px;width:'+data.width+'px;height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px"></div>';
						var jiantou_1='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-left:'+jiantou_width+'px solid '+data.borderColor+';position:absolute;right:'+jiantou_space+'px;top:'+(data.height/2-data.arrowLenght)+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-left:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:absolute;right:'+(jiantou_space+data.borderWidth)+'px;top:'+(data.height/2-data.arrowLenght)+'px;"></div>'
						$('body').append('<div class="desc_54556" style=";position:absolute;top:'+top+'px;left:'+left+'px;">'+jiantou_1+jiantou_2+innner_div+'</div>')
						
						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						}) 
					}
				}
				// "width:0; height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:30px solid yellow;"
			})
			$(this).mouseleave(function(){
				desc_over = false;
				window.clearInterval(timeout);
				timeout =  setTimeout(function(){removedata()},leave_time);
			})
		}
	}
})(jQuery)