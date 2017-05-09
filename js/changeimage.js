$(document).ready(function(){
				var i=0;
				$("img").eq(0).show();
				$(".num li").eq(0).addClass("on");
				function changeImg() {
					i++;
					i = (i==5?0:i);
					$("img").eq(i).fadeIn(1000).siblings().fadeOut();
					$(".num li").eq(i).addClass("on").siblings().removeClass("on");
				}
				var timer = setInterval(changeImg,2000);
				$(".num li").hover(function(){
					clearInterval(timer);
					i = $(this).index();
					$(this).addClass("on").siblings().removeClass("on");
					$("img").eq(i).fadeIn(1500).stop(true,true).siblings().fadeOut();
				},function(){
					timer = setInterval(changeImg,2000);
				});
			});