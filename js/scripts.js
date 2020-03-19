/* ----------------------------------

JS Active Code Index
    
    Preloader
    scrollIt
    Add Class Reveal for Scroll to Top
    ScrollUp Active Code
    Sidemenu toggle
    navbar scrolling background
    sections background image from data background
    magnificPopup
    countUp
    window When Loading
    FullScreenHeight Resize function
     
---------------------------------- */    

$(function() {

    "use strict";

    var wind = $(window);

    // Preloader
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });


    // Add Class Reveal for Scroll to Top
    wind.on('scroll', function() {
        if (wind.width() > 600) {
            if (wind.scrollTop() > 600) {
                $('#back-to-top').addClass('reveal');
            } else {
                $('#back-to-top').removeClass('reveal');
            }
        }
    });

    // ScrollUp Active Code
    $('#back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

   // Sidemenu toggle
    if ($("#sidebar_toggle").length) {
       $("body").addClass("sidebar-menu");
       $("#sidebar_toggle").on("click", function () {
          $(".sidebar-menu").toggleClass("active");
          $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
       }), $("#close_sidebar").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
       }), $("#btn_sidebar_colse").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
       });
    }

    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            darkbg = $(".bg-black .logo> img"),
            whitebg = $(".bg-white .logo> img"),
            lightbg = $(".bg-light-gray .logo> img"),
            scrollbg = $(".bg-black-scroll .logo> img"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
            darkbg.attr('src', 'img/logo-light.png');
            whitebg.attr('src', 'img/logo-dark.png');
            scrollbg.attr('src', 'img/logo-light.png');
            lightbg.attr('src', 'img/logo-dark.png');

        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            lightbg.attr('src', 'img/logo-dark.png');
            navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });
    
     var windowsize = wind.width();
        if (windowsize <= 991) {
        $('.navbar-nav .nav-link').on("click", function(){
            $('.navbar-collapse.show').removeClass('show');
        });
      }

    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // countUp
    if ($(".numbers").length !== 0) {
        $('.numbers').appear(function() {
            $('.count').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });
    }

    // === window When Loading === //

    $(window).on("load",function (){

        var wind = $(window);
        
        // stellar
        wind.stellar();

        // isotope
        $('.gallery').isotope({
          // options
          itemSelector: '.items'
        });

        var $gallery = $('.gallery').isotope({
          // options
        });

        // filter items on button click
        $('.filtering').on( 'click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({ filter: filterValue });
        });
        $('.filtering').on( 'click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

    });

    // FullScreenHeight Resize function
    $(window).resize(function(event) {
        setTimeout(function() {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });

    // FullScreenHeight function
    function fullScreenHeight() {
        var element = $(".full-screen");
        var $minheight = $(window).height();
        element.css('min-height', $minheight);
    }

    // FullScreenHeight with resize function
    function SetResizeContent() {
        fullScreenHeight();
    }

    SetResizeContent();

});
