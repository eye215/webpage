var mainFix = new Swiper('#slide .img_slide', {
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
