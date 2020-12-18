// JavaScript Document

var now=0;
var imgs=1;

$(document).ready(function(){
	$(".main_navi>li").mouseover(function(){
		$(".sub_navi").stop().slideDown();
		});
		$(".main_navi>li").mouseleave(function(){
		$(".sub_navi").stop().slideUp();
		});
        


		$(".partner").click(function(){
			$("#partner_pop").css({"display":"block"});
			});
			$("#pop>button").click(function(){
			$("#partner_pop").css({"display":"none"});
			});
			
start();

			});


            





var mainFix = new Swiper('#mainFix .swiper-container', {
    direction: "horizontal",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 600,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        /*renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },*/
    },
});
