// Файл скрипта
'use strict';
//  Variables - переменные

var mainMenu = document.querySelector('.main-menu');
var navButton = document.querySelector('.nav__button');
var menuLinks = document.querySelectorAll('.main-menu__link');
var phoneInput = document.querySelector('#tel');
var header = document.querySelector('.header');
var menuOpened = false;

// Enable JS - добавление/удаление классов при включенном JS

var addActiveStatement = function () {
  if (header) {
    header.classList.add('active');
  }
  if (mainMenu) {
    mainMenu.classList.add('main-menu--closed');
  } else {
    return;
  }
};

window.addEventListener('load', function () {
  addActiveStatement();
});

// Navigation - обработка событии с кнопкой навигации и блокировка скролла

var showMenu = function () {
  if (mainMenu && navButton) {
    mainMenu.classList.remove('main-menu--closed');
    mainMenu.classList.add('main-menu--opened');
    navButton.classList.add('nav__button--open');
    // eslint-disable-next-line no-undef
    bodyScrollLock.disableBodyScroll(mainMenu);
    menuOpened = true;
  } else {
    return;
  }
};

var hideMenu = function () {
  if (mainMenu && navButton) {
    mainMenu.classList.add('main-menu--closed');
    mainMenu.classList.remove('main-menu--opened');
    navButton.classList.remove('nav__button--open');
    // eslint-disable-next-line no-undef
    bodyScrollLock.enableBodyScroll(mainMenu);
    menuOpened = false;
  } else {
    return;
  }
};

if (navButton) {
  navButton.addEventListener('click', function () {
    if (menuOpened) {
      hideMenu();
    } else {
      showMenu();
    }
  });
}

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', function () {
    hideMenu();
  });
});

// Изменение placeholder при фокусе и отмене фокуса

if (phoneInput) {
  phoneInput.addEventListener('focus', function () {
    phoneInput.placeholder = '+7XXXXXXXXXX';
  });

  phoneInput.addEventListener('blur', function () {
    phoneInput.placeholder = 'Введите Ваш номер телефона';
  });
}

// Smooth scroll - плавный скролл

// eslint-disable-next-line no-undef
var moveTo = new MoveTo({
  duration: 1200,
});

var triggers = document.querySelectorAll('.js-trigger');

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});
