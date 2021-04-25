'use strict';
var popap = document.querySelector('.popap-form');
var btnOpen = document.querySelector('.header__btn');
var btnClose = document.querySelector('.popap-form__btn-close');

btnOpen.onclick = function () {
  popap.classList.remove('visually-hidden');
};

btnClose.onclick = function () {
  popap.classList.add('visually-hidden');
};
