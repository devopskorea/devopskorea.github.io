$.noConflict();
var $ = jQuery;

$( document ).ready(function($){
"use strict";
  /* Banner Slider */
  $('.banner-slider-style-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    swipeToSlide: true,
  });

/* Banner Slider 3*/
    $('.banner-slider-style-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: false,
    });
  /* Banner Slider 5*/
    $('.banner-slider-style-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '<div class="slick-prev"><i class="icon ion-ios-arrow-thin-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icon ion-ios-arrow-thin-right"></i></div>',
        swipeToSlide: true,
    });

  /* Upcoming event Slider */
  $('.upcoming-event-slider-style-3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    dots: false,
    infinite: true,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Portfolio slider */
  $('.portfolio-slider-style-1').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    swipe: true,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Blog Slider */
  $('.blog-slider-style-4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    centerMode: false,
    centerPadding: 0,
    swipeToSlide: true,
  });

/* Blog slider style 9*/
    $('.blog-slider-style-9').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: false,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }, ]
    });

  /*Blog style 5 slider*/
  $('.blog-style-5-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    swipe: true,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Testimonial Slider */
  $('.testimonial-slider-style-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    swipeToSlide: true,
  });

  /* Testimonial slider style 9 */
    $('.testimonial-slider-style-9').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: false,
        swipe: true,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

  /* Team Slider */
  $('.team-slider-style-1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Testimonial Slider */
  $('.testimonial-slider-style-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    swipeToSlide: true,
  });

  /* blog Slider */
  $('.blog-slider-style-2').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    centerMode: false,
    centerPadding: 0,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* logo Slider */
  $('.logo-slider-style-1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: false,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Blog Slider */
  $('.blog-slider-style-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    swipeToSlide: true,
  });

  /* Testimonial Slider */
  $('.testimonial-for-slider-style-4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: false,
    asNavFor: '.testimonial-nav-slider-style-4',
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    swipeToSlide: true,
  });

  $('.testimonial-nav-slider-style-4').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    asNavFor: '.testimonial-for-slider-style-4',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: '0px',
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Team Slider 3 */
  $('.team-slider-style-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: false,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
  });

  $('.team-slider-style-6').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: 0,
        swipeToSlide: true,
        infinite: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

  /* Upcoming Events Slider */
  $('.upcoming-event-nav-slider-style-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.upcoming-event-for-slider-style-1',
    autoplay: false,
    dots: false,
    centerMode: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    centerPadding: '0px',
    swipeToSlide: true,
  });
  $('.upcoming-event-for-slider-style-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.upcoming-event-nav-slider-style-1',
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    swipeToSlide: true,
  });

  /* Upcoming Event Slider */
  $('.upcoming-event-slider-style-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    swipeToSlide: true,
  });

  /* Testimonial Slider */
  $('.testimonial-slider-style-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    swipeToSlide: true,
  });

  /* Recent Post Slider */
  $('.blog-slider-style-3').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    centerMode: false,
    centerPadding: 0,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* logo Slider */
  $('.logo-slider-style-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* Pricing table slider */
  $('.pricing-table-style-9-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
    ]
  });

  /*Gallery style 7*/
  $('.gallery-style-7-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        swipeToSlide: true,
        prevArrow: '<div class="slick-prev"><i class="icon ion-ios-arrow-thin-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icon ion-ios-arrow-thin-right"></i></div>',
    });

  /* blog style 6 slider */
  $('.blog-style-6-with-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
    ]
  });

   $('.footer-logo-slider-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        swipeToSlide: true,
        prevArrow: '<div class="slick-prev"><i class="icon ion-ios-arrow-thin-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icon ion-ios-arrow-thin-right"></i></div>',
        centerPadding: 10,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

  /* Search Form */
  var SearchForm = '.md-header-form',
  BtnSearch = '.fa.fa-search',
  ToggleSearchForm = 'active';

  $(BtnSearch).on("click", function() {
    $(SearchForm).toggleClass(ToggleSearchForm);
  });

  /* Header fixed */
  $(window).on("scroll", function() {

    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
      $("header").addClass("header-position-fixed");
    } else {
      $("header").removeClass("header-position-fixed");
    }
  });

  /* Responsive menu */
  $(".navbar-toggle").on("click", function(){

    $("body").toggleClass("responsive-layout");

    $(".menuBar .navbar-nav li a").on("click", function(){
      $(".navbar-collapse.collapse").removeClass("in");
      $("body").removeClass("responsive-layout");
    });

  });

 var headerHeight = $("#md-header").height();
    $('.navbar a[href*="#"]:not([href="#"])').on("click", function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - headerHeight
          }, 1000);
          return false;
        }
      }
    });

  /* Number Counter*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /*Form Input focus*/
  $( ".md-contct-form input, .md-contct-form textarea" ).on("focus", function() {
    $(this).addClass('md-form-active');
  });

  $( ".md-contct-form input, .md-contct-form textarea" ).on("focusout", function() {
    if ($(this).val() === ""){
      $(this).removeClass('md-form-active');
    }
  });

  /* countdown timer for next event */
  $("#timer-clock-style-2").TimeCircles({
    fg_width: 0.02,
    time: {
      Days: { color: "#eb145b" },
      Hours: { color: "#14bde8" },
      Minutes: { color: "#ea9515" },
      Seconds: { color: "#14e02c" }
    },
  });

  /* Countdown Timer */
  $('#timer-clock-style-1').simplyCountdown({
    year: "2018",
    month: "07",
    day: "15",
    inlineClass: 'simply-countdown-inline',
    sectionClass: 'simple-time-counter',
    amountClass: 'counter-day-number',
    wordClass: 'counter-words',
    enableUtc: true,
  });

  /* Countdown Timer */
  $('#timer-clock-style-3').simplyCountdown({
    year: "2018",
    month: "07",
    day: "15",
    inlineClass: 'simply-countdown-inline',
    sectionClass: 'hexagonal-rounded-edge',
    amountClass: 'counter-day-number',
    wordClass: 'counter-words',
    enableUtc: true,
  });

  /* Isoptop multiple filters */
// Define containers for filter data
var $container = [$('#gallerybox_style_1'), $('#gallerybox_style_2'), $('#floorplanbox'), $('#propertiesbox'), $('#schedulebox'), $('#gallerybox_style_9')],
$optionSets = [$('#gallery_style_1_filter_group .isogrp'), $('#gallery-filter-group .isogrp'), $('#floorplan-filter-group .isogrp'), $('#properties-filter-group .isogrp'), $('#schedule-filter-group .isogrp'), $('#gallery_style_9_filter_group .isogrp')];

//Initialize isotope on each container
jQuery.each($container, function (j) {
  this.isotope({
    itemSelector : '.element',
    filter: '.init',
    layoutMode: 'fitRows',
  });
});

//Initialize filter links for each option set
jQuery.each($optionSets, function (index, object) {

  var $optionLinks = object.find('button');

  $optionLinks.on("click", function () {
    var $this = $(this), $optionSet = $this.parents('.isogrp'), options = {},
    key = $optionSet.attr('data-option-key'),
    value = $this.attr('data-filter');
// don't proceed if already selected
if ($this.hasClass('is-checked')) {
  return false;
}

$optionSet.find('.is-checked').removeClass('is-checked');
$this.addClass('is-checked');

// parse 'false' as false boolean
value = value === 'false' ? false : value;
options[key] = value;
if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
// changes in layout modes need extra logic
changeLayoutMode($this, options);
} else {
// otherwise, apply new options

$container[index].isotope(options);
}

return false;
});
});


// Magnific Popup for gallery
$('.gallery-image-popup').magnificPopup({
  gallery: {
    enabled: true,
    index: 0,
    tPrev: 'prev',
    tNext: 'Next',
  },
  type:'image',
});

// Magnific Popup for video
$('.video-popup').magnificPopup({
  type: 'iframe',
});



/* Viewport width and height with custom scrollbar */
var viewportWidth = $(window).width();

if (viewportWidth >= 768) {
  $("#coming-event").mCustomScrollbar({
    theme:"inset-2-dark",
    setLeft: "-19px",
    scrollbarPosition:"inside",
    contentTouchScroll: "false",

});
}

/* Wow Initializer*/
new WOW().init();

// Back To top 
var offset = 300,
offset_opacity = 1200,
scroll_top_duration = 700,
$back_to_top = $('.back-to-top');

$(window).on("scroll", function() {
  ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if ($(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('cd-fade-out');
  }
});

$back_to_top.on("click", function(event) {
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0,
  }, scroll_top_duration);
});

/* Google map pointer event */
$('.md-map').on("click", function(){
  $(this).find('iframe').addClass('clicked')}).on("mouseleave",function(){
  $(this).find('iframe').removeClass('clicked')
});

$(window).on("load", function() {
    if ($('#pmd-slider-value-range').length) {
        var pmdSliderValueRange = document.getElementById('pmd-slider-value-range');

        noUiSlider.create(pmdSliderValueRange, {
            start: [7000, 700000],
            // Handle start position
            connect: true,
            // Display a colored bar between the handles
            tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
            format: wNumb({
                decimals: 0,
                thousand: '',
                postfix: '',
            }),
            range: {
                // Slider can select '7000' to '700000'
                'min': 7000,
                'max': 700000
            }
        });
    }
});

/* Equal height js */
/*var main_height = $('.text-title-style-9').height();*/
$('.text-title-style-9 .side-image-block').css('height', $('.text-title-style-9').height() + 'px');

$('.accordion-style-3 .height-class').tile();

/*==============================================================
     accordion
     ==============================================================*/
    $('.accordion-block .collapse').on('show.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('ion-minus').removeClass('ion-ios-plus-empty');
    });
    $('.accordion-block .collapse').on('hide.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('ion-minus').addClass('ion-ios-plus-empty');
    });

    /*Progressbar with tooltip*/
    $(function () { 
      $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
  });  

      $(".progress-bar").each(function(){
        var each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
    });
});