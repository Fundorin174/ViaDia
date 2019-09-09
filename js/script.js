'use strict';
window.addEventListener('DOMContentLoaded', function () {
  let scrollBottom = document.querySelector('.scrollup');
  console.log(scrollBottom);
  // appearing Menu on Scroll
  window.addEventListener('scroll', backgroundMenu, false);

  function backgroundMenu() {
    let heigth = window.pageYOffset,
      bodyWrapper = document.querySelector('#header');

    if (heigth > 0) {
      bodyWrapper.classList.add('scrolling');
      scrollBottom.style.cssText = `visibility: visible`;
    } else {
      bodyWrapper.classList.remove('scrolling');
      scrollBottom.style.cssText = `visibility: hidden`;
    }


  }
  backgroundMenu();


  // toTOP scroll Button
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
    $('#toTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    });
  });






});