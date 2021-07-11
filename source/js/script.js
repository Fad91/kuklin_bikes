// Файл скрипта

//  Variables

const mainMenu = document.querySelector(".main-menu");
const menuLinks = Array.from(document.querySelectorAll(".main-menu__item a"));
const navButton = document.querySelector(".nav__button");
const phoneInput = document.querySelector("#tel");
const form = document.querySelector(".feedback-form");
const header = document.querySelector(".header");
const navLogo = document.querySelector(".nav__logo");

// Enable JS - добавление/удаление классов при включенном JS

header.classList.remove("header--nojs");
mainMenu.classList.remove("main-menu--nojs");
mainMenu.classList.add("main-menu--closed");
navButton.classList.remove("nav__button--nojs");
navLogo.classList.remove("nav__logo--nojs");

// Navigation
// При нажатии на меню надо заблокировать скролл для body, и при нажатии на ссылку надо закрывать меню(?)
// и разблокировать скролл(?)

navButton.addEventListener("click", function () {
  mainMenu.classList.toggle("main-menu--closed");
  mainMenu.classList.toggle("main-menu--opened");
  navButton.classList.toggle("nav__button--open")
});

// Validation

form.addEventListener("invalid", function () {
  return false;
});

phoneInput.addEventListener("invalid", function () {
  let re = /^\d[\d\(\)\ -]{4,14}\d$/;
  let valid = re.test(phoneInput.textContent);
  if (valid) {
    phoneInput.setCustomValidity("");
  } else {
    phoneInput.setCustomValidity("Поле должно состоять из цифр");
  }
});

// Smooth scroll

