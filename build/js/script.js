// Файл скрипта
'use strict';
//  Variables - переменные

var mainMenu = document.querySelector('.main-menu');
var navButton = document.querySelector('.nav__button');
var menuLinks = document.querySelectorAll('.main-menu__link');
var form = document.querySelector('.feedback-form form');
var nameInput = document.querySelector('#name');
var phoneInput = document.querySelector('#tel');
var header = document.querySelector('.header');
var COUNTRY_CODE = '+7';
var NAME_LENGTH = 2;
var PHONE_LENGTH = 17;
var length = COUNTRY_CODE.length;
var menuOpened = false;

// Enable JS - добавление/удаление классов при включенном JS

var addActiveStatement = function () {
  if (header) {
    header.classList.add('active');
  }
  if (mainMenu) {
    mainMenu.classList.add('main-menu--closed');
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
  }
};

var changeMenuStatement = function () {
  if (navButton) {
    navButton.addEventListener('click', function () {
      if (menuOpened) {
        hideMenu();
      } else {
        showMenu();
      }
    });
  }
};

changeMenuStatement();

var clickOnLink = function () {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
      hideMenu();
    });
  });
};

clickOnLink();

// Валидация формы

var replacePhoneValue = function (el) {
  var matrix = COUNTRY_CODE + ' ' + '(___) ___ __ __';
  var def = matrix.replace(/\D/g, '');
  var i = 0;
  var val = el.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  el.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};
var onInputPhoneInput = function (e) {
  replacePhoneValue(e.target);
};

var onFocusPhoneInput = function (e) {
  if (!e.target.value) {
    e.target.value = COUNTRY_CODE;
    e.target.addEventListener('input', onInputPhoneInput);
    e.target.addEventListener('blur', onBlurPhoneInput);
    e.target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

var onKeydownPhoneInput = function (e) {
  if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
    e.target.setSelectionRange(length, length);
  }
  if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
    e.preventDefault();
  }
  if (e.target.selectionStart === 1 && e.keyCode === 46) {
    e.preventDefault();
  }
};

var onBlurPhoneInput = function (e) {
  if (e.target.value === COUNTRY_CODE) {
    e.target.value = '';
    e.target.removeEventListener('input', onInputPhoneInput);
    e.target.removeEventListener('blur', onBlurPhoneInput);
  }
};

var initPhoneMask = function () {
  phoneInput.addEventListener('focus', onFocusPhoneInput);
  if (phoneInput.value) {
    replacePhoneValue(phoneInput);
    phoneInput.addEventListener('input', onInputPhoneInput);
    phoneInput.addEventListener('blur', onBlurPhoneInput);
    phoneInput.addEventListener('keydown', onKeydownPhoneInput);
  }
};

var validateInput = function (input, inputLength) {
  var flag = true;
  if (input.value.length < inputLength) {
    flag = false;
    input.classList.add('has-error');
  }
  return flag;
};

var cleanInputs = function () {
  nameInput.addEventListener('input', function () {
    nameInput.classList.remove('has-error');
  });
  phoneInput.addEventListener('input', function () {
    phoneInput.classList.remove('has-error');
  });
};

var initFormValidate = function () {
  if (!form) {
    return;
  }

  form.noValidate = true;
  cleanInputs();
  initPhoneMask();
  form.addEventListener('submit', function (e) {
    validateInput(nameInput, NAME_LENGTH);
    validateInput(phoneInput, PHONE_LENGTH);
    e.preventDefault();
    if (validateInput(nameInput, NAME_LENGTH) || validateInput(phoneInput, PHONE_LENGTH)) {
      setTimeout(function () {
        form.reset();
      }, 500);
    }
  });
};

initFormValidate();

// Smooth scroll - плавный скролл

var addSmoothScroll = function () {
// eslint-disable-next-line no-undef
  var moveTo = new MoveTo({
    duration: 1200,
  });

  var triggers = document.querySelectorAll('.js-trigger');

  triggers.forEach(function (trigger) {
    moveTo.registerTrigger(trigger);
  });
};

addSmoothScroll();
