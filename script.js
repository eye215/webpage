var topEle = $('#up');
var delay = 1000;

topEle.on('click', function() {

  $('html').stop().animate({scrollTop: 0}, delay);

});

$(document).ready(function () {
  $(".a2").mouseover(
    function(){
      $(this).children(".text_slide").stop().animate({"left":"0%"},300);
    });
    $(".a2").mouseleave(
      function(){
        $(this).children(".text_slide").stop().animate({"left":"-100%"},300);
      });
    $(window).scroll(function () {
      var s_top = $(window).scrollTop();

      if (s_top > 100) {
        $(".s1").stop().animate({"top":"-300"},1000);
      } else {
        $(".s1").stop().animate({"top":"0"},500);
      }
      if (s_top > 300) {
        $(".skills_progress").stop().animate({"left":"0%"},2000);
      } else {
        $(".skills_progress").stop().animate({"left":"-100%"},2000);
      }
      if ( s_top < 800 && s_top > 100) {
        $(".s2").stop().animate({"top":"-200"},500);
      } else {
        $(".s2").stop().animate({"top":"-400"},500);
      }
      if ( s_top < 1000 && s_top > 500) {
        $(".s3").stop().animate({"top":"-200"},500);
      } else {
        $(".s3").stop().animate({"top":"0"},500);
      }
      if (s_top > 1200) {
        $("#footer").stop().animate({"top":"0"},500);
      } else {$("#footer").stop().animate({"top":"400px"},500);
      }

    });


  });


