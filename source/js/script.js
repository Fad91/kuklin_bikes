// Файл скрипта
//  Variables

const mainMenu = document.querySelector(".main-menu");
const menuLinks = Array.from(document.querySelectorAll(".main-menu__item a"));
const navButton = document.querySelector(".nav__button");
const phoneInput = document.querySelector("#tel");
const form = document.querySelector(".feedback-form");
let sections = Array.from(document.querySelectorAll("section"));

// Navigation
// При нажатии на меню надо заблокировать скролл для body, и при нажатии на ссылку надо закрывать меню(?)
// и разблокировать скролл(?)

mainMenu.classList.add("main-menu--closed");

navButton.addEventListener("click", function () {
  mainMenu.classList.toggle("main-menu--closed");
  mainMenu.classList.toggle("main-menu--opened");
  navButton.classList.toggle("nav__button--open")
  // if (mainMenu.classList.contains("main-menu--opened")) {
  //   console.log(1);
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "";
  // }
});

// Blocking scroll

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

