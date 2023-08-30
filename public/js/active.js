(function ($) {
  "use strict";

  if ($.fn.owlCarousel) {
    $(".caviar-hero-slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      margin: 0,
      nav: true,
      navText: ["", '<i class="fas fa-arrow-right"></i>'],
    });
    var wel_slides = $(".caviar-hero-slides");
    wel_slides.owlCarousel();
    wel_slides.on("translate.owl.carousel", function (event) {
      $(".hero-content h2").removeClass("animated").hide();
      $(".hero-content p").removeClass("animated").hide();
      $(".hero-content .btn").removeClass("animated").hide();
      $(".hero-slides-nav, .caviar-hero-area .owl-next")
        .removeClass("animated")
        .hide();
    });
    wel_slides.on("translated.owl.carousel", function (event) {
      $(".hero-content h2").addClass("animated fadeIn").show();
      $(".hero-content p").addClass("animated fadeIn").show();
      $(".hero-content .btn").addClass("animated fadeIn").show();
      $(".hero-slides-nav, .caviar-hero-area .owl-next")
        .addClass("animated fadeInUp")
        .show();
    });
    $(".caviar-testimonials-slides").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      margin: 0,
      center: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 2 },
      },
    });
    $(".caviar-menu-slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      autoplayTimeout: 12000,
      margin: 0,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      ],
    });
  }

  $("#search-btn, #closeBtn").on("click", function () {
    $("body").toggleClass("search-form-on");
  });

  $(".portfolio-menu button").on("click", function () {
    $(".portfolio-menu button").removeClass("active");
    $(this).addClass("active");
  });

  if ($.fn.imagesLoaded) {
    $(".caviar-portfolio").imagesLoaded(function () {
      $(".portfolio-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
      var $grid = $(".caviar-portfolio").isotope({
        itemSelector: ".single_menu_item",
        percentPosition: true,
        masonry: { columnWidth: ".single_menu_item" },
      });
    });
  }

  $("#menubtn").on("click", function () {
    $("html, body").animate({ scrollTop: $("#menu").offset().top - 100 }, 1500);
  });

  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1000,
      scrollText: '<i class="fas fa-arrow-up"></i>',
    });
  }

  if ($.fn.onePageNav) {
    $("#caviarMenu").onePageNav({
      currentClass: "active",
      scrollSpeed: 2000,
      easing: "easeOutQuad",
    });
  }

  $("a[href='#']").on("click", function (event) {
    event.preventDefault();
  });

  if (window.WOW) {
    new window.WOW().init();
  }

  var $window = $(window);

  $window.on("scroll", function () {
    if ($window.scrollTop() > 0) {
      $("body").addClass("sticky");
    } else {
      $("body").removeClass("sticky");
    }
  });

  var $preloader = $("#preloader");
  $window.on("load", function () {
    if ($preloader.length) {
      $preloader.fadeOut("slow", function () {
        $(this).remove();
      });
    }
  });
})(jQuery);
