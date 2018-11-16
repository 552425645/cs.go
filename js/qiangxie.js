$(function(){
	/*枪械选项卡*/
	/*头部*/
	
	
	/*背景图变换以及视频显示隐藏*/
	$(".gun-title a").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		console.log($(this).index())
		$(".gun-title-small").eq($(this).index()).css("display", "block").siblings().css("display", "none")
		var tid=$(this).index()
		
		
		if(tid==0){
			$(".section-gun").css("background","none").find("video").show()
			$(".all-gun-bottom").eq(0).css("display","block")
			$(".all-gun-bottom").eq(1).css("display","none")
			$(".all-gun-bottom").eq(2).css("display","none")
			
		}else if(tid==1){
			$(".section-gun").css("background","url(img/indeximg/bg_game_ditu_5df5b585c484e47849b8171972460dd1.jpg)").find("video").hide()
			$(".all-gun-bottom").eq(1).css("display","block")
			$(".all-gun-bottom").eq(0).css("display","none")
			$(".all-gun-bottom").eq(2).css("display","none")
		}else{
			$(".section-gun").css("background","url(img/indeximg/bg_game_moshi_7beb4443dd6882873f2cb49c4ebf1167.jpg)").find("video").hide()
			$(".all-gun-bottom").eq(2).css("display","block")
			$(".all-gun-bottom").eq(1).css("display","none")
			$(".all-gun-bottom").eq(0).css("display","none")
		}
	})
	
	getMove()
	
	$(".gun-title-jingji a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".jingji").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	$(".gun-title-ditu a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".ditu").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	
})
var pagestart=0;

function getMove(){
	// 枪  的添加删除标签
	var titleNM=0;
	var result=listData["listData0"+titleNM];
	var size=result.size;
	$(".qiang-title a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		titleNM=$(this).index()
		result=listData["listData0"+titleNM]
		console.log(titleNM)
		$("all-gun-right-img").remove("img").append(
			
		)
		
	})
	//手枪
			//手枪名字：
	$(".all-right-btn a").click(function() {
		var ox=$(this).index()
		var Shuzi=1+ox				//列表里的东西
		var geshu=result.data["list"+Shuzi];
		$(this).find(".hen-gun").css("opacity", "1")
		$(this).siblings().find(".hen-gun").css("opacity", "0")
		$(".all-gun-right-img").find("img").eq($(this).index()).css("display", "block").siblings().css("display", "none")
		//左侧边栏内容
		$(".name-shouqiang").text(geshu[0].name)
		$(".jiage").text(geshu[0].describe)
		$(".rongl").text(geshu[0].title)
		$(".wenben").text(geshu[0].content)
		$(".shanghai").text(geshu[0].coverSH)
		$(".houzuo").text(geshu[0].Houzuo)
		$(".shech").text(geshu[0].shecheng)
		$(".chuant").text(geshu[0].jiachuantou)
		$(".chuantou").text(geshu[0].chuantouli)
		$(".zuzhi").text(geshu[0].zuzhi)
		$(".shanghai-zhe").css({"width":$(".shanghai").html()/100*$(".row1").innerWidth(),"transition":".5s"})
		$(".houzuo-zhe").css({"width":$(".houzuo").html()/100*$(".row1").innerWidth(),"transition":".5s"})
		$(".shech-zhe").css({"width":$(".shech").html()/100*$(".row1").innerWidth(),"transition":".5s"})
		$(".chuant-zhe").css({"width":$(".chuant").html()/200*$(".row1").innerWidth(),"transition":".5s"})
	})
	
	
	
}
