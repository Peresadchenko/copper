$(function () {

    //form-styler-------------------------

    $('.filter-price__select').styler();

    //.card-product__content-num--------------------

    $('.select-style, .card-product__content-num').styler();

    //slider top-------------------------

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

    //slider sales-------------------------

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

    //slider novelties-------------------------

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

    //slider recommend-------------------------

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

    //slider discounts-------------------------

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

    //slider about-------------------------

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

    //product-slide__thumb  product-slide__big-------------------------

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4.6,
        slidesToScroll: 1,
        arrows: false,
        vertical: true

    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

    $('.product-slide__thumb-btnPrev').click(function (event) {
        $('.product-slide__thumb').slick("slickPrev");
    });
    $('.product-slide__thumb-btnNext').click(function (event) {
        $('.product-slide__thumb').slick("slickNext");
    });

    //SCROLL--------------------

    $(".footer__btn").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    

    //CHECKBOX--------------------

    // $.each($('.checkbox'), function (index, val) {
    //     if ($(this).find('input').prop('checked') == true) {
    //         $(this).addClass('active');
    //     }
    // });
    // $(document).on('click', 'checkbox', function (event) {
    //     if ($(this).hasClass('active')) {
    //         $(this).find('input').prop('checked', false);
    //     } else {
    //         $(this).find('input').prop('checked', true);
    //     }
    //     $(this).toggleClass('active');

    //     return false;
    // });

    //RADIO-------------------------

    $.each($('.order__form-item'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('order__form-item--active');
        }
    });
    $(document).on('click', '.order__form-item', function (event) {
        $(this).parents('.order__form-radio').find('.order__form-item').removeClass('order__form-item--active');
        $(this).parents('.order__form-radio').find('.order__form-item input').prop('checked', false);
        $(this).toggleClass('order__form-item--active');
        $(this).find('input').prop('checked', true);
        return false;
    });

    //mixitup-------------------------

    var mixer = mixitup('.profile', {
        load: {
            filter: '.category-a'
        }
    });



});