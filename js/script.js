'use strict';
window.addEventListener('DOMContentLoaded', function () {

  // move main text

  let viaDia = document.querySelector('#viaName'),
  viaProffession = document.querySelector('#viaProffession'),
  viaLove = document.querySelector('#viaLove'),
  viaButton = document.querySelector('#viaButton');
  
  // move first row
  function viaDiaMove(from, to) {
    let current = from;
  
    setTimeout(function go() {
      viaDia.style.cssText = `padding-top: ${current}px;`;
      if (current < to) {
        setTimeout(go, 15);
      }
      current++;
    }, 15);
  }

    // move second row
  function viaProffessionMove(from, to) {
    let current = from;
  
    setTimeout(function go() {
      viaProffession.style.cssText = `padding-left: ${current}px;`;
      if (current > to) {
        setTimeout(go, 15);
      }
      current--;
    }, 15);
  }

    // move 3rd row
  function viaLoveMove(from, to) {
    let current = from;
  
    setTimeout(function go() {
      viaLove.style.cssText = `padding-top: ${current}px;`;
      if (current > to) {
        setTimeout(go, 15);
      }
      current--;
    }, 15);
  }

    // move button
  function viaButtonMove(from, to) {
    let current = from;
  
    setTimeout(function go() {
      viaButton.style.cssText = `padding-top: ${current}px;`;
      if (current > to) {
        setTimeout(go, 15);
      }
      current--;
    }, 15);
  }

  // использование:
 viaDiaMove(1, 50);
 viaProffessionMove(50, 0);
 viaLoveMove(50, 0);
 viaButtonMove (50, 0);

  







  
  
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




// Modal

let overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');
// more = document.querySelector('#btutton1'),


// По клику на узнать больше появляется модальное окно с анимацией
// more.addEventListener('click', function() {
// overlay.style.display = 'block';
// document.body.style.overflow = 'hidden'; //запрет проктутки при открытом модальном окне
// });




// Открыть Модальное при нажатии на любую кнопку
let info = document.querySelector('.body-wrapper');

info.addEventListener('click', (e) => {
  let target = e.target;
  if (target && target.classList.contains('description-btn')) {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; //запрет проктутки при открытом модальном окне
  }
});


// Закрыть модальное окно, разблокировать прокрутку
close.addEventListener('click', () => {
overlay.style.display = 'none';
document.body.style.overflow = '';
});



// Выезд бокового мобильног меню
$('#menu_btn').click(function () {
  $('#offcanvas-menu').slideToggle("600");
});

// ЗАкрытие бокового мобильног меню при нажатии на крестик
$('#offcanvasClose').click(function () {
  $('#offcanvas-menu').slideToggle("600");
});




// ЗАкрытие бокового мобильног меню при нажатии на ссылку
let offcanvasMenuList = document.querySelector('.nav-menu'),
offcanvasMenu = document.querySelector('#offcanvas-menu');
offcanvasMenuList.addEventListener('click', (e) => {
  let target = e.target;
  if (target && target.classList.contains('menu-itema')) {
    offcanvasMenu.style.display = 'none';
     
  }
});



// Изменение главного окна
let resizeSlider = document.querySelector('#resizeSlider'),
    mainSliderText = document.querySelector('.main_sliderText');
  function resizeSliderHeigth(){
    let resizeSliderWidth = resizeSlider.clientWidth;
    if (resizeSliderWidth < 1200) {
      resizeSlider.style.cssText = `max-height: ${resizeSliderWidth/1.52}px;`;
      mainSliderText.style.cssText = `max-height: ${resizeSliderWidth/1.52}px;`;
    }
  }
  resizeSliderHeigth();


  window.addEventListener('resize', resizeSliderHeigth);








});