// Файл скрипта

//  Variables - переменные

const mainMenu = document.querySelector(".main-menu");
const menuLinks = Array.from(document.querySelectorAll(".main-menu__item a"));
const navButton = document.querySelector(".nav__button");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#tel");
const header = document.querySelector(".header");
const navLogo = document.querySelector(".nav__logo");
const pageMain = document.querySelector(".main");
const moveTo = new MoveTo();

// Enable JS - добавление/удаление классов при включенном JS

header.classList.remove("header--nojs");
mainMenu.classList.remove("main-menu--nojs");
mainMenu.classList.add("main-menu--closed");
navButton.classList.remove("nav__button--nojs");
navLogo.classList.remove("nav__logo--nojs");

// Navigation - обработка событии с кнопкой навигации

navButton.addEventListener("click", function () {
  mainMenu.classList.toggle("main-menu--closed");
  mainMenu.classList.toggle("main-menu--opened");
  navButton.classList.toggle("nav__button--open");
  pageMain.classList.add("visually-hidden");
});

// Blocking-scroll - блокировка скролла при открытии меню

for (let menuLink of menuLinks) {
  menuLink.addEventListener("click", function () {
    if (pageMain.classList.contains("visually-hidden")) {
      pageMain.classList.remove("visually-hidden");
    }
    mainMenu.classList.remove("main-menu--opened");
    mainMenu.classList.add("main-menu--closed");
    navButton.classList.remove("nav__button--open");
  });
}

// Изменение placeholder при фокусе и отмене фокуса

nameInput.addEventListener("focus", function () {
  nameInput.placeholder = "";
});

nameInput.addEventListener("blur", function () {
  nameInput.placeholder = "Введите Ваше Имя";
});

phoneInput.addEventListener("focus", function () {
  phoneInput.placeholder = "Поле должно состоять из цифр";
});

phoneInput.addEventListener("blur", function () {
  phoneInput.placeholder = "Введите Ваш номер телефона";
});

// Smooth scroll - плавный скролл

const triggers = document.getElementsByClassName("js-trigger");

for (let trigger of triggers) {
  moveTo.registerTrigger(trigger);
}
