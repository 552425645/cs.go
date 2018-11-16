$(function() {


	/*	头部下拉*/
	$(".nav-buttom a").click(function() {
		if ($(".header").css("height") == '329px') {
			$(".header").css({
				"height": "114px",
				"transition": "1s"
			})
		} else {
			$(".header").css({
				"height": "329px",
				"transition": "1s"
			})
		}

	})
	/**头部定位以及解除定位 */
	$(window).scroll(function() {

		if ($(window).scrollTop() > 114) {
			$(".header").css({
				"position": "fixed",
				"top": "0px",
				"z-index": "100000"
			})
			$(".section-banner").css("margin-top", "114px")

		} else {
			$(".header").css("position", "static")
			$(".section-banner").css("margin-top", "0px")
		}
		
	})


	// 插件轮播图
	// $(".banner-btn li").mouseover(function(){
	// 	$(this).addClass("active").siblings().removeClass("active")
	// 	$(".lunbo-ul li").eq($(this).index()).addClass("bctive").removeClass("cctive","dctive").siblings().addClass("cctive").removeClass("bctive","dctive").prev().addClass("dctive").removeClass("bctive","cctive");
	// })



	//用注释的情况解决不了层级以及如何选区上一个的问题--只能用循环的办法了
	var now = 0;
	var timer = null;
	var bam = true;
	var con=now-1

	for (var i = 0; i < $(".banner-btn li").length; i++) {

		$(".banner-btn li").click(function() {
			now = $(this).index()
			move()
		})
	}
	var move = function() {
		for (var i = 0; i < $(".banner-btn li").length; i++) {
			$(".banner-btn li").css("background", "black");
			$(".lunbo-ul li").css("left", "-100%");

		}
		$(".banner-btn li").eq(now).css("background", "red")
		
		$(".lunbo-ul li").eq(now).css({
			"transition": "1s",
			"left": "0",
			"z-index": "100"
		});
		$(".lunbo-ul li").eq(now-1).css({
			"left": "0",
			"z-index": "10",
			"transition":"0s"
		})
	}
	if(now-1==0){
		now=4
		move()
	}
	var tmi = function() {
		now++;
		if (now > 4) {
			now = 0;
		}
		move()
	}
	clearInterval(timer)
	timer = setInterval(tmi, 4000)

	$(".banner-left").hover(
		function() {
			clearInterval(timer);
		},
		function() {
			setInterval(tmi, 4000);
		}
	)


	/*middle*/
	
	// 尾部
	


	var tt = 0
	var arr = ["Intel Extreme Masters - Chicago 2018", "BLAST Pro Series: Copenhagen 2018", "EPICENTER CS:GO 2018",
		"CS:GO Asia Championships 亚洲邀请赛 2018"
	]
	var arr1=["IEM 2018 芝加哥站将有16支战队参加，其中10支为直邀、6支从各赛区预选赛晋级，冠军将获得10万美金。","BLAST 哥本哈根站保持着该系列赛一贯的紧凑感、刺激感，6支世界最知名的战队，将在2天内为25万美金展开争夺。","震中杯的参赛队伍实力强劲、比赛精彩纷呈，其现场表演、舞台效果也是独树一帜，最终FaZe击败NaVi，时隔4个月又夺冠军。","CAC 2018是亚洲最具观赏性、对抗性的CS:GO赛事之一。于6月14-18日在上海成功举办。最终来自乌克兰的Na`Vi战队夺得冠军，豪享15万美元奖金。"]
	$(".dianjing-lunbo-btn i").click(function() {
		$(this).css("background", "red").siblings().css("background", "white")
		$(".dianjing-lunbo-long").css({
			"left": ($(this).index()) * -605,
			"transition": "1s"
		})
		tt = $(this).index()
	})
		timer1 = setInterval(function() {
			tt++
			if (tt > 3) {
				tt = 0
			}
			$(".dianjing-lunbo-btn i").eq(tt).css("background", "red").siblings().css("background", "white")

			$(".dianjing-lunbo-long").css({
				"left": tt * -605,
				"transition": "1s"
			})
			$(".dianjing-x h3").html(arr[tt])
			$(".dianjing-x").find(".p1").html(arr1[tt])

		}, 3000)
		
		
		
		
		/*选项卡1*/
		$(".gonglue-ul li").click(function(){
			$(this).find(".xiahen").css("opacity","1")
			$(this).siblings().find(".xiahen").css("opacity","0")
			$(".left-bottom-m").eq($(this).index()).css("display","block").siblings().css("display","none")
		})
		/*选项卡2*/
		
		$(".shipin li").click(function(){
			$(this).find(".hen").css("opacity","1")
			$(this).siblings().find(".hen").css("opacity","0")
			$(".shipin-bottom1").eq($(this).index()).css("display","block").siblings().css("display","none")
		})
		
		
		$(".figure").hover(function(){
			$(this).find("img").css({"transform":"scale(1.1)","transition":"0.5s"})
			$(this).find(".zhezhao").css("display","block")
		},function(){
			$(this).find("img").css({"transform":"scale(1)","transition":"0.5s"})
			$(this).find(".zhezhao").css("display","none")
		})
		
})



