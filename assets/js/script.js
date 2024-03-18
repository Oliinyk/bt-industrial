$(document).ready(function () {

    // menu
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

    // hero counter
    $('.hero .item-digit').each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate({ Counter: parseInt($this.text().trim()) }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter) + ' ');
            }
        });
    });

    // trusted-slider
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

    // custom-quote-slider
    $('.custom-quote-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            }
        ]
    });

    $('.custom-quote-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        $('.digit').removeClass('active');
        $('.digit[data-slide=' + nextSlide + ']').addClass('active');
        $('.custom-quote-section .text-item').removeClass('active');
        $('.custom-quote-section .text-item[data-slide=' + nextSlide + ']').addClass('active');
    });

    $('.custom-quote-section .digit').click(function() {
        let slideIndex = $(this).data('slide');
        $('.custom-quote-slider').slick('slickGoTo', slideIndex);
    });

    //industrial-slider1
    $('.industrial-slider1').each(function() {
        $( this ).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        autoplay: true,
                        autoplaySpeed: 3000,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                    }
                },
            ]
        });
    });

    $('.industrial-slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
        ]
    });

    // scroll-to-top
    $(".scrollToTopJs").click(function() {
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

    // open popup
    $(document).on('click', '.openModalJs', function(e) {
        e.preventDefault();
        $('body').find('.popup-quote').addClass('active');
        $('body').find('.overlay').addClass('active');
        
        //refresh trusted-slider when open popup
        $('.popup-quote .trusted-slider').slick('refresh');
    });
    // close popup
    $(document).on('click', '.popup .close-btn', function() {
        $('body').find('.popup').removeClass('active');
        $('body').find('.overlay').removeClass('active');
        $('body').find('.popup-read-more-wrap').removeClass('active');
    });

    //openReadMoreModalJs
    $(document).on('click', '.openReadMoreModalJs', function(e) {
        e.preventDefault();
        let popupIndex = $(this).data('btn');
        $('body').find('.popup-read-more-wrap[data-modal=' + popupIndex + ']').addClass('active');
        $('body').find('[data-modal=' + popupIndex + '] .popup-read-more').addClass('active');
        $('body').find('.overlay').addClass('active');
    });

    // click outside popup
    $(document).mouseup(function(e) {
        let popup = $('.popup');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('body').find('.popup').removeClass('active');
            $('body').find('.overlay').removeClass('active');
            $('body').find('.popup-read-more-wrap').removeClass('active');
        }
    });

    // chaty-widget
    $(document).on('mouseenter', '.chatyCtaMainJs', function() {
        if($('body').find('.chaty-widget').hasClass('was-opened')) {
            return false;
        } else {
            $('body').find('.chaty-widget').addClass('chaty-open');
        }
    });
    $(document).on('mouseleave', '.chatyCtaMainJs', function() {
        $('body').find('.chaty-widget').removeClass('was-opened')
    });
    $(document).on('click', '.chatyCtaCloseJs', function() {
        $('body').find('.chaty-widget').removeClass('chaty-open').addClass('was-opened');
    });
    
});