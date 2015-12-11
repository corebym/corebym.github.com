
$(document).ready(function(){
	$('.yingshitab li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#yingshishow>div').eq($(this).index()).fadeIn().siblings().hide();
	});

	$('.ruanjiantab li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#ruanjianshow>div').eq($(this).index()).fadeIn().siblings().hide();
	});

	$('.mianfeitab li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#mianfeishow>div').eq($(this).index()).fadeIn().siblings().hide();
	});

	$('.ppttab li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#pptshow>div').eq($(this).index()).fadeIn().siblings().hide();
	});

	$('.dushutab li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#dushushow>div').eq($(this).index()).fadeIn().siblings().hide();
	});

	$('.wangpantab li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#wangpanshow>div').eq($(this).index()).fadeIn().siblings().hide();
	});

  $('.gugetab li').click(function(){
  $(this).addClass('current').siblings().removeClass('current');
  $('#gugeshow>div').eq($(this).index()).fadeIn().siblings().hide();
  });

  $('.musictab li').click(function(){
  $(this).addClass('current').siblings().removeClass('current');
  $('#musicshow>div').eq($(this).index()).fadeIn().siblings().hide();
  });
	
	$("#flip").click(function(){
    $("#rizhi").slideToggle();
  	});

  	 $("a.pinghua").click(function() {  
        $("html, body").animate({  
            scrollTop: $($(this).attr("href")).offset().top + "px"  
        }, {  
            duration: 250,  
            easing: "swing"  
        });  
        return false;  
    }); 

  	 //弹出一个页面层
	 $('.music').on('click', function(){
    layer.open({
        type: 1,
        title:'TVB古装剧背景音乐大全',
        area: ['600px', '160px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;line-height:30px;">在线：<a href="http://music.163.com/#/playlist?id=107914210" target="blank" style="text-decoration:underline;">TVB古装剧背景音乐大全</a><br />度盘下载：<a href="http://pan.baidu.com/s/1nt08kpN" target="blank" style="text-decoration:underline;">http://pan.baidu.com/s/11A8Xo</a> 提取码：rfns\<\/div>'
    });
    });
   
    // $('.zhongqiu').on('click', function(){
    // layer.open({
    //     type: 1,
    //     title:'祝大家中秋快乐！',
    //     area: ['600px', '390px'],
    //     shadeClose: true, //点击遮罩关闭
    //     content: '\<\div style="padding:20px;line-height:30px;">首先祝大家中秋快乐，站长准备国庆回家happy：）<br />这是第一次说起导航建立的缘由。互联网发达的今天，终于鼓起勇气在去年11.19建立了自己的第一个网站。白天上班，利用晚上和周末的时间，从一个不懂建站的局外人，走进了站长这个行业。想想挺快的，马上就要1年了，网站也不再是从前的一天几个人访问。<br />我一直想做一个有用的导航，曾经面对庞大如山的收藏夹不知所措，为什么不让自己简单出发？自己常常要访问的往往只有那么几个，剩下的交给搜索引擎吧~<br />由于时间和精力的原因，只能一点点完善导航。如果能让你更方便地找到你想要的，那么这次任务她就完成了。<br />她不喜欢脏衣服，网站不会加入广告。最后，欢迎大家到右上角“留言”和“百度口碑”发表评论。祝中秋快乐。\<\/div>'
    // });
    // });

  	 //弹出一个iframe层
  	// $('#test1').on('click', function(){
   //  layer.open({
   //      type: 2,
   //      title: '网易云音乐',
   //      maxmin: true,
   //      shadeClose: true, //点击遮罩关闭层
   //      area : ['1000px' , '500px'],
   //      content: 'http://iloveyoulong.com/'
   //  });

});
