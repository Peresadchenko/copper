$(function () {

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


    $('.novelties-slider__inner').slick({
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

    $('.novelties-slider__btnPrev').click(function (event) {
        $('.novelties-slider__inner').slick("slickPrev");
    });
    $('.novelties-slider__btnNext').click(function (event) {
        $('.novelties-slider__inner').slick("slickNext");
    });


    $('.recommend-slider__inner').slick({
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

    $('.recommend-slider__btnPrev').click(function (event) {
        $('.recommend-slider__inner').slick("slickPrev");
    });
    $('.recommend-slider__btnNext').click(function (event) {
        $('.recommend-slider__inner').slick("slickNext");
    });



    $('.discounts-slider__inner').slick({
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

    $('.discounts-slider__btnPrev').click(function (event) {
        $('.discounts-slider__inner').slick("slickPrev");
    });
    $('.discounts-slider__btnNext').click(function (event) {
        $('.discounts-slider__inner').slick("slickNext");
    });


    $('.about-slider__inner').slick({
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

    $('.about-slider__btnPrev').click(function (event) {
        $('.about-slider__inner').slick("slickPrev");
    });
    $('.about-slider__btnNext').click(function (event) {
        $('.about-slider__inner').slick("slickNext");
    });


    $(".footer a").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});