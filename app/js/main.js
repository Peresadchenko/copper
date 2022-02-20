$(function() {
  
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.top-slider__btnPrev').click(function (event) {
        $('.top-slider__inner').slick("slickPrev");
    });
    $('.top-slider__btnNext').click(function (event) {
        $('.top-slider__inner').slick("slickNext");
    });


    $('.sales-slider__inner').slick({
        arrows: false,
        dots: true,
        easing: 'ease',
        slidesToShow: 3,
        adaptiveHeight: true,
        speed: 800,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.sales-slider__btnPrev').click(function (event) {
        $('.sales-slider__inner').slick("slickPrev");
    });
    $('.sales-slider__btnNext').click(function (event) {
        $('.sales-slider__inner').slick("slickNext");
    });
});