$(function(){
	$(".left").click(function(){
		
		$(".denglu1").eq($(this).index()).css("z-index","100").siblings().css("z-index","0")
		
	})
})