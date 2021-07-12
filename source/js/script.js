// Файл скрипта
'use strict';
//  Variables - переменные

var mainMenu = document.querySelector('.main-menu');
var menuLinks = Array.from(document.querySelectorAll('.main-menu__item a'));
var navButton = document.querySelector('.nav__button');
var nameInput = document.querySelector('#name');
var phoneInput = document.querySelector('#tel');
var header = document.querySelector('.header');
var navLogo = document.querySelector('.nav__logo');
var pageMain = document.querySelector('.main');
var form = document.querySelector('.feedback-form');
var moveTo = new MoveTo();

// Enable JS - добавление/удаление классов при включенном JS

header.classList.remove('header--nojs');
mainMenu.classList.remove('main-menu--nojs');
mainMenu.classList.add('main-menu--closed');
navButton.classList.remove('nav__button--nojs');
navLogo.classList.remove('nav__logo--nojs');

// Navigation - обработка событии с кнопкой навигации

navButton.addEventListener('click', function () {
  mainMenu.classList.toggle('main-menu--closed');
  mainMenu.classList.toggle('main-menu--opened');
  navButton.classList.toggle('nav__button--open');
  pageMain.classList.toggle('visually-hidden');
  form.classList.toggle('visually-hidden');
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

nameInput.addEventListener('focus', function () {
  nameInput.placeholder = '';
});

nameInput.addEventListener('blur', function () {
  nameInput.placeholder = 'Введите Ваше Имя';
});

phoneInput.addEventListener('focus', function () {
  phoneInput.placeholder = '+7XXXXXXXXXX';
});

phoneInput.addEventListener('blur', function () {
  phoneInput.placeholder = 'Введите Ваш номер телефона';
});

// Smooth scroll - плавный скролл

var triggers = document.getElementsByClassName('js-trigger');

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});
