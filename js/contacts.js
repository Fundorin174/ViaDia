'use strict';
window.addEventListener('DOMContentLoaded', function () {
  // Перевести окно наверх при загрузке
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











});