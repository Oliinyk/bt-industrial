$(document).ready(function () {

    $(document).on('click', '.toggle-btn', function() {
        $('body').find('.side-menu-wrapper').addClass('open');
    });
    $(document).on('click', '.close-side-menu', function() {
        $('body').find('.side-menu-wrapper').removeClass('open');
    });
    


    $('.trusted-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.custom-quote-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });
    
    // scroll-to-top
    $(".scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 2000);
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(300);
        }
        else {
            $(".scroll-to-top").fadeOut(300);
        }
    });

});