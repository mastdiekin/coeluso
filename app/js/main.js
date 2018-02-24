import hello from './lib/hello.js';
import $ from 'jquery';
import preloader from './lib/preloader.js';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import '../libs/slick-carousel/slick/slick.js';
import Waypoint from '../libs/waypoints/lib/jquery.waypoints.js';

hello();
svg4everybody({
  polyfill: true 
});

$('section, .hero__logo, .download__images-left, .download__images-right').css('opacity', 0);

$(window).on('load', function() {

  $.when($('.loader').delay(500).fadeOut('slow').queue(function(hideloader) { 
    $(this).css({
      display: 'none'
    });
    hideloader(); 
  })).done(function() {

    $('section, .hero__logo').each(function() {
      var self = $(this);
      $(this).waypoint({
        handler: function() {
          self.addClass('animated fade').css('opacity', 1);
        }, offset: '80%'
      });
    });

    $('.download__images-left').waypoint(function() {
      $('.download__images-left').addClass('animated fadeInLeft').css('opacity', 1);
    }, { offset: '80%'});

    $('.download__images-right').waypoint(function() {
      $('.download__images-right').addClass('animated fadeInRight').css('opacity', 1);
    }, { offset: '80%'});

  });
});

$('.options__slider').slick({
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 10000,
  draggable: false,
  cssEase: 'linear',
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 500,
  speed: 900
});

$('.hero__mobile-btn, .hero__close').click(function() {
  $('.hero__mobile-btn').toggleClass('is-active');
  $('.hero__nav').toggleClass('is-active');
});
