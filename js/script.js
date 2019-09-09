'use strict';
window.addEventListener('DOMContentLoaded', function () {



  window.addEventListener('scroll', backgroundMenu, false);
  
  function backgroundMenu(){
    let heigth = window.pageYOffset,
    bodyWrapper = document.querySelector('#header');
    (heigth > 0) ? bodyWrapper.classList.add('scrolling') : bodyWrapper.classList.remove('scrolling');
    }
     

backgroundMenu();





});