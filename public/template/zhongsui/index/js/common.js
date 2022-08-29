// JavaScript Document


function checkform() {
	if(document.diyfrm.name.value == '') {
		alert('姓名不能为空!');
		document.diyfrm.name.focus();
		return false;
	}
	var phone = document.diyfrm.phone.value;
	if(phone == '') {
		alert('电话不能为空!');
		document.diyfrm.phone.focus();
		return false;
	}
	var Letters = "0123456789";
	for (i=0;i< phone.length;i++) {
		var CheckChar = phone.charAt(i);
		if(Letters.indexOf(CheckChar) == -1) {
			alert("电话号码必须为数字！");
			document.diyfrm.phone.focus();
			return false;
		}
	}
	if(document.diyfrm.xuqiu.value == '') {
		alert('您没有什么需求要说么？!');
		document.diyfrm.xuqiu.focus();
		return false;
	}
	
	return true;
}

(function($) {
	$.fn.tabs =    function() {
		var    opts = {
			switchingMode: "mouseover"  // or "click"---通过点击鼠标事件切换tabs
		};
		var obj = $(this);
		var tabIndex = 0;
		
		//初始化选中项
		if($(' > ul li.active', obj).length > 0) {
			tabIndex = $(' > ul li.active', obj).index();
		}
		$(' > ul li', obj).eq(tabIndex).addClass('active');
		$(' > .tabs-panel > div', obj).eq(tabIndex).show();
		
		$(' > ul li a', obj).bind(opts.switchingMode, function() {
			if (tabIndex != $(' > ul li', obj).index($(this).parent('li'))) {
				tabIndex = $(' > ul li', obj).index($(this).parent('li'));
				$(' > ul li', obj).eq(tabIndex).addClass('active').siblings().removeClass('active');
				$(' > .tabs-panel > div', obj).hide().eq(tabIndex).show();
			}
		})
	};
	
	$.fn.extend({
		'OptionSlider':function(opt){
			
			var init = {
				thisbox: ' > ul',              //滚动层
				thisli: ' > ul > li',            //计算圆点个数
				thisdotbox: ' > .dot'          //圆点主层
			}

			var self = this;
			var setting = $.extend(init,opt);
			
			var sliderW = self.width();
			var box = $(setting.thisbox, self);
			var li = $(setting.thisli, self);
			var dotbox = $(setting.thisdotbox, self);
			var sliderlen = $(li).length;
			
			
			var dothtml = '';
			for(var i=0;i<sliderlen;i++){
				dothtml+= "<a href='javascript:;'>"+i+"</a>";
			}
			dotbox.append(dothtml);
			
			dotbox.find('a').eq(0).addClass("cur");
			
			dotbox.find('a').on("click",function(){
				var i = $(this).index();
				$(this).addClass("cur").siblings().removeClass("cur");
				box.stop(true).animate({left:-i*sliderW},500)
			})
		}
	});
	
	$.fn.extend({
		'myscroll':function(opt){
			
			var init = {
				prev: '.prev',
				next: '.next',
				number: '1'
			}

			var self = this;
			var setting = $.extend(init,opt);
			
			var box = self.find("ul");
			var boxli = self.find("li");
			var boxliwidth = self.find("li").outerWidth(true);
			var next = $(setting.next, self);
			var prev = $(setting.prev, self);
			var shul = setting.number;

			if(boxli.length > shul){
				$(next).click(function(){
					if(box.is(":animated")) {return};
					var boxliwidth = self.find("li").outerWidth(true);
					var boxli = self.find("li");
					box.animate({left:-boxliwidth},600,function(){
						box.css({left:0})
						boxli.eq(0).appendTo(box)
					})
				})
				
				$(prev).click(function(){
					if(box.is(":animated")) {return};
					var boxliwidth=self.find("li").outerWidth(true);
					var boxli=self.find("li");
					box.css({left:-boxliwidth});
					box.animate({left:0},600)
					boxli.last().prependTo(box);
				})
			
				/*var auto = setInterval(function(){
					$(next).trigger("click");	
				},5000)
				
				
				$(self).hover(function(){
					clearInterval(auto)
				},function(){
					auto = setInterval(function(){
					$(next).trigger("click");	
					},5000)	
				})*/
			}
		}		
	});
	
})(jQuery);



$(function() {
	
	//图标滑上旋转动画
	$('.choose ul.list li').hover(function() {
		$(this).find('img').addClass('animated rotateIn');
	},function() {
		$(this).find('img').removeClass('animated rotateIn');
	});
	
	//Logo图片滑上高亮另一张图片
	$('.logolist a').hover(function() {
		$(this).stop().animate({'top':'-102px'}, 200);
	},function() {
		$(this).stop().animate({'top':'0'}, 200);
	})

	//计数器特效
	function numAdd(el) {
		var lastNum = el.data('num');
		el.text(0);
		var i = 0;
		var timer = setInterval(function () {
			el.text(i += 6);
			if (i >= lastNum) {
				clearInterval(timer);
				el.text(lastNum);
			};
		}, 110)
	}
	$('#counter').waypoint(function (direction) {
		if (direction == 'down') {
			numAdd($('.num').eq(0));
			numAdd($('.num').eq(1));
			numAdd($('.num').eq(2));
			numAdd($('.num').eq(3));
			numAdd($('.num').eq(4));
		}
	}, {
		offset: '64%'
	});
	
	//Tab选项卡
	$('#newstabs').tabs();
	$('#casetabs').tabs();
	$('#solutiontabs').tabs();
	
	
		
	$("#proscrollbox1").myscroll();
	$("#proscrollbox2").myscroll();
	$("#proscrollbox3").myscroll();
	$("#proscrollbox4").myscroll();
	$("#proscrollbox5").myscroll();
	$("#proscrollbox6").myscroll();
	
	
	$("#tablogolist").OptionSlider();
	
	
	$("#tabnews1").OptionSlider();
	$("#tabnews2").OptionSlider();
	$("#tabnews3").OptionSlider();
	$("#tabnews4").OptionSlider();
	$("#tabnews5").OptionSlider();
	$("#tabnews6").OptionSlider();
	
	
  //幻灯片
	var $slides = $('#slides');
	$slides.superslides({
		animation: 'fade',
		play: 5000,
		pagination: true,
		inherit_width_from: '.banner',
		inherit_height_from: '.banner'
	});
	})


	//案例

$("#pclist button").click(function(e){
	$("#pclist button").removeClass("active");
	var url=$(this).attr("data-url");
	$("#pcview").fadeOut(function(){
		$("#pcview").attr("src",url);
		$(this).fadeIn();
	});
});

//app

$("#applist button").click(function(e){
	$("#applist button").removeClass("active");
	var url=$(this).attr("data-url");
	$("#appview").fadeOut(function(){
		$("#appview").attr("src",url);
		$(this).fadeIn();
	});
});

//表单提交

	


var regist= new  Register();
	var header=new Header();
	var conference = new Conference();
	header.show();
	var phone_list = new Array();
	//页首头部鼠标划过下拉列表
	$(function(){
		$(".index_demobox_inputbox_city_input .ui-datepicker-trigger").html("");
	
	
	})
var zhuyun_ad_show = true;
		header.ShowThis("index");
	

		$("#j_select_ctity").click(function () {
			var $This = $(this);
			var $City_list_box = $(".j_pop_up_city_list_box");
			if ($City_list_box.is(":hidden")) {
				$City_list_box.show();
			} else {
				$City_list_box.hide();
			}
		});
		$(".j_pop_up_city_list_box").find("li").click(function () {
			var cityType = $(this).attr("act");
			var str = "";
			switch ((cityType * 1)) {
				case 1:
					str = '<li class="index_demobox_inputbox_city_input check">北京市</li>';
					break
				case 2:
					str = '<li class="index_demobox_inputbox_city_input check">广州市</li>';
					break
				case 3:
					str = '<li class="index_demobox_inputbox_city_input check">西安市</li>';
					break
				default:
					str = '<li class="index_demobox_inputbox_city_input check">北京市</li>';
			}
			$("#j_select_ctity").find(".j_index_city_name").next().remove();
			$("#j_select_ctity").find(".j_index_city_name").after(str);
			$(this).parent().parent().hide();
		});
		$("#j_message_add").click(function () {
			var message = {};
			message.Contacts = $.trim($("#con").val());
			message.Phone = $.trim($("#phone").val());
			message.Content = "预约城市：" + $("#j_select_ctity").find(".check").val() + "预约时间：" + $("#j_demobox_End").val() + "简单说明：" + $.trim($("#con").val());
			message.Qq = "";
			if (header.sent_phone_message(message.Phone, 1)) {
				header.add_message(message, false, null);
				alert("您已经留言成功,感谢您的支持!");
				$("#j_contacts").val("");
				$("#j_phone").val("");
				$("#j_content").val("");
			} else {
				alert("手机号码格式错误,请重新输入你的手机号码,谢谢!");
			}
		});
		// 回车
		$("#j_phone").keyup(function (e) {
			header.sent_phone_message($(this).val(), 1);
		});
		
		//时间控件
		init_alldatepicker($("#j_demobox"), "#j_demobox", "after", 0, 1);

		$(".j_d_createtime span").each(function () {
			var days = DateDiff($(this).text());
			if (days <= 3) {
				$(this).parent().addClass("index_newsbox_list_newsbox_time_red");
			}
		})
		//判断当前日期与指定日期的相差的天数
		function DateDiff(oldDate) {
			var old_Date = new Date(oldDate);
			var newDate = new Date();
			var d_data2 = newDate.getTime() - old_Date.getTime();
			var days = Math.floor(d_data2 / (24 * 3600 * 1000));
			return days;
		}
		//首页版本配置信息效果
		$('.j_index_probox_listbg>div').hover(function () {			
			$('.j_index_probox_listbg').find('.j_index_probox_listposition02').removeClass("index_probox_listposition02");
		}, function () {
			//鼠标离开还原						
			$('.j_index_probox_listbg').find('.j_index_probox_listposition02').addClass("index_probox_listposition02");
		})

header.ShowThis("index");
		$("#IndexBannerBox .Banner").width($(window).width());
 
		//$("#IndexBannerBox .Banner").css("min-width":'1200px',"width":'100%'); 

		//$("#IndexBannerBox .Banner").width("100%");
		$('#IndexBannerBox').carouFredSel({
			items: 1,
			direction: "up",
			auto: true,
			width: null,
			scroll: {
				items: 1,
				pauseOnHover: true
			},
			direction: "left",
			pagination: "#banner_pager"
		});
		$(".caroufredsel_wrapper").width("100%")
			//$(".caroufredsel_wrapper").css("min-width":'1200px',"width":'100%'); 