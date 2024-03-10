$(document).ready(function () {

    $(document).on('click', '.toggle-btn', function() {
        $('body').find('.side-menu-wrapper').addClass('open');
    });
    $(document).on('click', '.close-side-menu , .side_menu_overlay', function() {
        $('body').find('.side-menu-wrapper').removeClass('open');
    });

    $(document).on('click', '.menu-item-has-children .menu-item-btn', function() {
        if( $(this).hasClass('collapsed')) {
            $(this).removeClass('collapsed').addClass('expanded');
            $(this).closest('.menu-item-has-children').find('.sub-menu').addClass('open')
        } else {
            $(this).removeClass('expanded').addClass('collapsed');
            $(this).closest('.menu-item-has-children').find('.sub-menu').removeClass('open')
        }
    });

    $('.trusted-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
        ]
    });

    $('.custom-quote-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });

    $('.custom-quote-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        $('.digit').removeClass('active');
        $('.digit[data-slide=' + nextSlide + ']').addClass('active');

        $('.custom-quote-section .text-item').removeClass('active');
        $('.custom-quote-section .text-item[data-slide=' + nextSlide + ']').addClass('active');
        
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

    // popup
    $(document).on('click', '.popup .close-btn', function() {
        $(this).closest('.popup-wrap').removeClass('active');
    });
    $(document).on('click', '.openModalJs', function() {
        $('body').find('.popup-wrap').addClass('active');
    });
    

    //
    // $('.sample-container').FlipBook({pdf: 'books/pdf/CondoLiving.pdf'});

});