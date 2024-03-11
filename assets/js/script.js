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

    // open popup
    $(document).on('click', '.openModalJs', function(e) {
        e.preventDefault();
        $('body').find('.popup').addClass('active');
        $('body').find('.overlay').addClass('active');
    });
    // close popup
    $(document).on('click', '.popup .close-btn, .overlay', function() {
        $('body').find('.popup').removeClass('active');
        $('body').find('.overlay').removeClass('active');
    });
    
 
    //
    // $('.sample-container').FlipBook({pdf: 'books/pdf/CondoLiving.pdf'});

});