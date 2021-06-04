'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

// if (footerTextCopyright && footerCopyrightContainer && footerLogo && footerSocial) {
//   var paragraph = footerTextCopyright.cloneNode(true);
//   var fragment = document.createDocumentFragment();
//   if (window.matchMedia(TABLET_MEDIA_QUERY).matches) {
//     fragment.appendChild(footerLogo);
//     fragment.appendChild(paragraph);
//     fragment.appendChild(footerSocial);
//     footerCopyrightContainer.appendChild(fragment);
//   }
// }
window.addEventListener('resize', function () {
  var TABLET_MEDIA_QUERY = '(max-width: 1023px)';
  var clone = document.querySelector('.footer__clone');
  var parentOne = document.querySelector('.footer__wrapper');
  var parentTwo = document.querySelector('.footer__copyright-wrapper');
  var reference = document.querySelector('.footer__social');
  var referenceTwo = document.querySelector('.footer__reference--two');

  if (window.matchMedia(TABLET_MEDIA_QUERY).matches) {
    parentOne.insertBefore(clone, reference);
  } else {
    parentTwo.insertBefore(clone, referenceTwo);
  }
});
