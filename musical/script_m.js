var now=0;
var pics=0;


var now_b=0;
var black=2;



$(document).ready(function(){
    
    $('.main_nav>li').mouseover(
        function(){
            $('.nav_bg').stop().slideDown();
            $('.sub_nav').stop().slideDown();
            $(this).children('.nav_bar').stop().animate({"left":"0"});
        });
    $('.main_nav>li').mouseleave(
            function(){
                $('.nav_bg').stop().slideUp();
            $('.sub_nav').stop().slideUp();
            $(this).children('.nav_bar').stop().animate({"left":"-100%"});
    });
    $('.sub_nav>li').mouseover(
        function(){
            $(this).children('.subnav_bar').stop().animate({"width":"100%"},300);
        });
    $('.sub_nav>li').mouseleave(
            function(){
            $(this).children('.subnav_bar').stop().animate({"width":"0%"},300);
    });

    $('.cast_slide_wrap').mouseover(
        function(){
            $(this).siblings('.LR_button').stop().animate({"opacity":"100%"},300);
        });
    $('.cast_slide_wrap').mouseleave(
            function(){
                $(this).siblings('.LR_button').stop().animate({"opacity":"0%"},300);
    });
    $('.LR_button').mouseover(
                function(){
                    $('.LR_button').stop().animate({"opacity":"100%"},300);
    });
    $('.LR_button').mouseleave(
                    function(){
                        $('.LR_button').stop().animate({"opacity":"0%"},300);
    });

    $('.schedule_button').click(
        function(){
            $('.schedule_pop').css({"display":"block"});
});
$('.schedule_button').mouseover(
    function(){
        $(this).children('.schedule_button_span.t').stop().animate({"left":"0"},300);
        $(this).children('.schedule_button_span.r').stop().animate({"top":"0"},300);
        $(this).children('.schedule_button_span.b').stop().animate({"left":"0"},300);
        $(this).children('.schedule_button_span.l').stop().animate({"top":"0"},300);
    });
$('.schedule_button').mouseleave(
        function(){

            $(this).children('.schedule_button_span.t').stop().animate({"left":"-100%"},300);
            $(this).children('.schedule_button_span.r').stop().animate({"top":"-100%"},300);
            $(this).children('.schedule_button_span.b').stop().animate({"left":"100%"},300);
            $(this).children('.schedule_button_span.l').stop().animate({"top":"100%"},300);
});
$('.pop_close_text').mouseover(
    function(){
        $(this).children('.pop_close_span.t').stop().animate({"left":"0"},300);
        $(this).children('.pop_close_span.r').stop().animate({"top":"0"},300);
        $(this).children('.pop_close_span.b').stop().animate({"left":"0"},300);
        $(this).children('.pop_close_span.l').stop().animate({"top":"0"},300);
    });
$('.pop_close_text').mouseleave(
        function(){

            $(this).children('.pop_close_span.t').stop().animate({"left":"-100%"},300);
            $(this).children('.pop_close_span.r').stop().animate({"top":"-100%"},300);
            $(this).children('.pop_close_span.b').stop().animate({"left":"100%"},300);
            $(this).children('.pop_close_span.l').stop().animate({"top":"100%"},300);
});

$('.moreview').mouseover(
    function(){
        
        $(this).children('.moreview_span.r').stop().animate({"top":"0"},300,
        function(){$(this).siblings('.moreview_span.t').stop().animate({"left":"0"},300);});
        
        $(this).children('.moreview_span.l').stop().animate({"top":"0"},300,
        function(){$(this).siblings('.moreview_span.b').stop().animate({"left":"0"},300);});
    });
$('.moreview').mouseleave(


    function(){

        $(this).children('.moreview_span.t').stop().animate({"left":"-100%"},300);
        $(this).children('.moreview_span.r').stop().animate({"top":"-100%"},300);
        $(this).children('.moreview_span.b').stop().animate({"left":"100%"},300);
        $(this).children('.moreview_span.l').stop().animate({"top":"100%"},300);
});
       
$('.cast_icon').mouseover(
    function(){
        $(this).children('.cast_icon_span.t').stop().animate({"left":"0"},200,
        function(){$(this).siblings('.cast_icon_span.r').stop().animate({"top":"0"},200,
        function(){$(this).siblings('.cast_icon_span.b').stop().animate({"left":"0"},200,
        function(){$(this).siblings('.cast_icon_span.l').stop().animate({"top":"0"},200);}
        );});});
        
        
        
    });
$('.cast_icon').mouseleave(
        function(){

            $(this).children('.cast_icon_span.t').stop().animate({"left":"-100%"},300);
            $(this).children('.cast_icon_span.r').stop().animate({"top":"-100%"},300);
            $(this).children('.cast_icon_span.b').stop().animate({"left":"100%"},300);
            $(this).children('.cast_icon_span.l').stop().animate({"top":"100%"},300);
});

$('.pop_close').click(
            function(){
                $('.schedule_pop').css({"display":"none"});
});


$('.cube_a.bottom').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_a>img').animate({"width":"100%","height":"165%","top":"-35%","left":"-3%"},300);
    });
$('.cube_a.bottom').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_a>img').animate({"width":"95%","height":"160%","top":"-30%","left":"0%"},300);
    });
$('.cube_a_t.a').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_a_t>img').animate({"width":"146%","height":"108%","left":"-25%","bottom":"0"},300);
    });
$('.cube_a_t.a').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_a_t>img').animate({"width":"137%","height":"100%","left":"-19%"},300);
    });

$('.cube_a_t.c').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_a_t>img').animate({"width":"150%","height":"110%","left":"-30%","bottom":"-5%"},300);
    });
$('.cube_a_t.c').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_a_t>img').animate({"width":"137%","height":"100%","left":"-25%","bottom":"0"},300);
    });
$('.cube_b.bottom').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_b.bottom>img').animate({"width":"107%","height":"165%","left":"-3%"},300);
    });
$('.cube_b.bottom').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_b.bottom>img').animate({"width":"100%","height":"158%","bottom":"0","left":"0%"},300);
    });


$('.cube_b_t.a').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_b_t>img').animate({"width":"140%","height":"108%","left":"-25%","bottom":"0%"},300);
    });
$('.cube_b_t.a').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_b_t>img').animate({"width":"132%","height":"100%","left":"-20%","bottom":"0"},300);
    });
$('.cube_b_t.c_big').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_b_t.c_big>img').animate({"width":"120%","height":"107%","left":"-12%","bottom":"0%"},300);
    });
$('.cube_b_t.c_big').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_b_t.c_big>img').animate({"width":"113%","height":"100%","left":"-8%","bottom":"0"},300);
    });
$('.cube_c_t.a').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_c_t.a>img').animate({"width":"115%","height":"107%","left":"-10%","bottom":"-5%"},300);
    });
$('.cube_c_t.a').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_c_t.a>img').animate({"width":"108.5%","height":"100%","left":"-5%","bottom":"0"},300);
    });
$('.cube_c.mid').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_c.mid>img').animate({"width":"105%","height":"110%","left":"15%","bottom":"-5%"},300);
    });
$('.cube_c.mid').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_c.mid>img').animate({"width":"95%","height":"100%","left":"20%","bottom":"0"},300);
});

$('.cube_c.bottom.b').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_c.bottom.b>img').animate({"width":"135%","height":"115%","left":"-18%","bottom":"-5%"},300);
    });
$('.cube_c.bottom.b').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_c.bottom.b>img').animate({"width":"118.5%","height":"100%","left":"-10%","bottom":"0"},300);
});

$('.cube_d_t.a').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_d_t.a>img').animate({"width":"135%","height":"108%","left":"-20%","bottom":"-5%"},300);
    });
$('.cube_d_t.a').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_d_t.a>img').animate({"width":"127.7%","height":"100%","left":"-15%","bottom":"0"},300);
});
$('.cube_d_t.c').mouseover(
    function(){
        $(this).children('.pic_text').css({"display":"block"});
        $(this).children('.cube_d_t.c>img').animate({"width":"106%","height":"137%","left":"-6%","bottom":"-5%"},300);
    });
$('.cube_d_t.c').mouseleave(
    function(){
        $(this).children('.pic_text').css({"display":"none"});
        $(this).children('.cube_d_t.c>img').animate({"width":"100%","height":"130.7%","left":"0","bottom":"0"},300);
});




    $('.L_button').click(
       
        function() {
            var moveleft = -(pics * 100);
            
            
            now=now==pics?10:now-=1;
            if(pics ==0){
                pics = 10;
                $('.cast_icons').animate({left:moveleft},300); 
            }
            else{
                pics-= 1;
                $('.cast_icons').animate({left:moveleft},300); 
            
            
        }
    });

 
    
    $('.R_button').click(
       
        function() {
            var moveright = -(pics * 100);
            
            
            now=now==pics?10:now+=1;
            if(pics ==10){
                pics = 0;
                $('.cast_icons').animate({left:moveright},300); 
            }
            else{
                pics+= 1;
                $('.cast_icons').animate({left:moveright},300); 
            
            
        }
    });
    start();
});


/*
function start(){
   
	setInterval(function(){black();},1000);
    
}
function black(){
    now_b=now_b==black?2:now_b+=1;
    $(".bg_top").eq(now_b).css({"background-color":"rgba(0,0,0,0.3)"});
    $(".bg_top").eq(now_b-1).css({"background-color":"rgba(0,0,0,0.3)"});
    $(".bg_top").eq(now_b-2).css({"background-color":"rgba(0,0,0,0.3)"});
        
    }

if(now_b==0){
            $(".bg_top").eq(0).css({"background-color":"rgba(0,0,0,0.3)"});
        }
        else if(now_b==1){
           
            $(".bg_top").eq(1).css({"background-color":"rgba(0,0,0,0.2)"});
        }
        else if(now_b==2){
           
            $(".bg_top").eq(2).css({"background-color":"rgba(0,0,0,0.1)"});
        }
        else if(now_b>=2){
           
            now_b=0;
        }
*/