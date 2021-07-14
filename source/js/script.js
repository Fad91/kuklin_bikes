// Файл скрипта
'use strict';
//  Variables - переменные

var mainMenu = document.querySelector('.main-menu');
var navButton = document.querySelector('.nav__button');
var menuLinks = document.querySelectorAll('.main-menu__link');
var phoneInput = document.querySelector('#tel');
var header = document.querySelector('.header');
var navLogo = document.querySelector('.nav__logo');
var menuOpened = false;

// Enable JS - добавление/удаление классов при включенном JS

header.classList.remove('header--nojs');
mainMenu.classList.remove('main-menu--nojs');
mainMenu.classList.add('main-menu--closed');
navButton.classList.remove('nav__button--nojs');
navLogo.classList.remove('nav__logo--nojs');

// Navigation - обработка событии с кнопкой навигации и блокировка скролла

var showMenu = function () {
  mainMenu.classList.remove('main-menu--closed');
  mainMenu.classList.add('main-menu--opened');
  navButton.classList.add('nav__button--open');
  // eslint-disable-next-line no-undef
  bodyScrollLock.disableBodyScroll(mainMenu);
  menuOpened = true;
};

var hideMenu = function () {
  mainMenu.classList.add('main-menu--closed');
  mainMenu.classList.remove('main-menu--opened');
  navButton.classList.remove('nav__button--open');
  // eslint-disable-next-line no-undef
  bodyScrollLock.enableBodyScroll(mainMenu);
  menuOpened = false;
};

navButton.addEventListener('click', function () {
  if (menuOpened) {
    hideMenu();
  } else {
    showMenu();
  }
});

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', function () {
    hideMenu();
  });
});

// Изменение placeholder при фокусе и отмене фокуса

phoneInput.addEventListener('focus', function () {
  phoneInput.placeholder = '+7XXXXXXXXXX';
});

phoneInput.addEventListener('blur', function () {
  phoneInput.placeholder = 'Введите Ваш номер телефона';
});

// Smooth scroll - плавный скролл

// eslint-disable-next-line no-undef
var moveTo = new MoveTo({
  duration: 1200,
});

var triggers = document.querySelectorAll('.js-trigger');

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});
