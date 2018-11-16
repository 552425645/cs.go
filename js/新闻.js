$(function(){
	
	/*头部定位*/
	$(window).scroll(function(){
		if ($(window).scrollTop() >84) {
			$(".header").css({
				"position": "fixed",
				"top": "0px",
				"z-index": "100"
			})
			$(".banner").css("margin-top", "114px")

		} else {
			$(".header").css("position", "static")
			$(".banner").css("margin-top", "0px")
		}
	})
	
	/*小轮播*/
	var now=0;
	$(".btnx a").click(function(){
		$(this).css({"width":"40px","transition":".5s"}).siblings().css({"width":"20px"})
		$(".lunbo-s-long").css({"left":($(this).index()*-534),"transition":"1s"})
		now=$(this).index()
	})
	var timer=setInterval(function(){
	now++;
	if(now>2){
		now=0

	}
	$(".btnx a").eq(now).css({"width":"40px","transition":".5s"}).siblings().css({"width":"20px"})
		$(".lunbo-s-long").css({"left":now*-534,"transition":"1s"})
	
	},2000)
	
	
	
})
