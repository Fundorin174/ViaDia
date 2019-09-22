'use strict';
window.addEventListener('DOMContentLoaded', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 100);


  
  
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


// Регулировка высоты блока с фото по содержимому
function squreBlocksPortfolio () {
  let foto = document.querySelector('[data-lightbox="porfolio-photo"]'),
      blocks = document.querySelectorAll('.photoalbum');
      

  blocks.forEach( function (item) {
    let fotoHeight = foto.clientHeight;
    item.style.cssText = `height: ${fotoHeight}px;`; 
  });
}

squreBlocksPortfolio();

// Изменеие высоты картинок при изменении ширины окна браузерв
window.addEventListener('resize', squreBlocksPortfolio);
















// Проигрывание видео на весь экран при нажатии на видео

let portfoliVideoBlock = document.querySelector('.portfolio-video-block');
   

    




    //Отслеживает клик по видео
portfoliVideoBlock.addEventListener('click', (e) => {
  let target = e.target;

  if (target && target.tagName == 'IMG') {
    let videoItem  = target;

    createPlayer(videoItem); 


  }
});



// Создание окна видеоплеера и добавление в него видео

function createPlayer(videoItem) {
  // Создание элементов
let videoClip = document.createElement('video'),
player = document.createElement('div'),
closeVideo = document.createElement('button');
//Подключение стилей к элементам  
player.classList.add('videoPlayer-block');
videoClip.classList.add('play-video');
closeVideo.classList.add('pop-up-btn');


// Наполнение элементов содержимым
closeVideo.textContent = 'Закрыть видео';
videoClip.src = `${videoItem.dataset.src}`;
videoClip.setAttribute('autoplay', 'autoplay');
videoClip.setAttribute('controls', 'controls');

// Добавление созданных документов в конец html документа
document.body.appendChild(player);
player.appendChild(videoClip);
player.appendChild(closeVideo);
player.style.display = 'block';

closeVideo.addEventListener('click', () => {
  player.style.display = 'none';
  videoClip.pause();
  videoClip.currentTime = 0;
});
}



// кнопка закрыть видеоплеер
// function closePlayer() {
  
// }









});