'use strict';
window.addEventListener('DOMContentLoaded', function () {
  let scrollBottom = document.querySelector('.scrollup');
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


// squre blocks

function squreBlocks () {
  let fotos = document.querySelectorAll('[data-lightbox="mygallery"]');
      

  fotos.forEach( function (item) {
    let fotoWidth = item.clientWidth;
    item.style.cssText = `height: ${fotoWidth}px;`; 
  });
}

squreBlocks();

// Изменеие высоты картинок при изменении ширины окна браузерв
window.addEventListener('resize', squreBlocks);





//Слайдер отзывов
//slider

let slideIndex = 1,
sliders = document.querySelectorAll('.slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dots = document.querySelectorAll('.dot'),
dotWrap = document.querySelector('.slider-dots');





function showSlide(n) { //показ слайда, прячет остальные, меняет цвет активной точки, закольцовывает показ по кругу

if (n > sliders.length) {
  slideIndex = 1;
}
if (n < 1) {
  slideIndex = sliders.length;
}
sliders.forEach((item) => item.style.display = 'none');

dots.forEach((item) => item.classList.remove('dot-active'));
sliders[slideIndex - 1].style.display = 'block';

dots[slideIndex - 1].classList.add('dot-active');
}

function changeSlide(n) {
showSlide(slideIndex += n); // Переход к следующему
}

function currentSlide(n) {
showSlide(slideIndex = n); //Показ нужного слайда
}

prev.addEventListener('click', () => changeSlide(-1));
next.addEventListener('click', () => changeSlide(1));

showSlide(slideIndex);

dotWrap.addEventListener('click', (e) => {
for (let i = 0; i < sliders.length + 1; i++) {
  if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
    currentSlide(i); //Переход при нажатии на точки
  }
}
});





});