// Файл скрипта
'use strict';
//  Variables - переменные

var mainMenu = document.querySelector('.main-menu');
var menuLinks = Array.prototype.slice.call(document.querySelectorAll('.main-menu__link'));
var navButton = document.querySelector('.nav__button');
var phoneInput = document.querySelector('#tel');
var header = document.querySelector('.header');
var navLogo = document.querySelector('.nav__logo');
var pageMain = document.querySelector('.main');
var form = document.querySelector('.feedback-form');

// Enable JS - добавление/удаление классов при включенном JS

header.classList.remove('header--nojs');
mainMenu.classList.remove('main-menu--nojs');
mainMenu.classList.add('main-menu--closed');
navButton.classList.remove('nav__button--nojs');
navLogo.classList.remove('nav__logo--nojs');

// Navigation - обработка событии с кнопкой навигации

var showMenu = function () {
  mainMenu.classList.toggle('main-menu--closed');
  mainMenu.classList.toggle('main-menu--opened');
  navButton.classList.toggle('nav__button--open');
  pageMain.classList.toggle('visually-hidden');
  form.classList.toggle('visually-hidden');
};

navButton.addEventListener('click', function () {
  showMenu();
});

// Blocking-scroll - блокировка скролла при открытии меню

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', function () {
    if (pageMain.classList.contains('visually-hidden')) {
      pageMain.classList.remove('visually-hidden');
    }
    mainMenu.classList.remove('main-menu--opened');
    mainMenu.classList.add('main-menu--closed');
    navButton.classList.remove('nav__button--open');
    form.classList.remove('visually-hidden');
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

var triggers = Array.prototype.slice.call(document.querySelectorAll('.js-trigger'));

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});
