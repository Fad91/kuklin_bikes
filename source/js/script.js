// Файл скрипта
//  Variables

const mainMenu = document.querySelector(".main-menu");
const menuLink = document.querySelector("main-menu__item a");
const navButton = document.querySelector(".nav__button");
const phoneInput = document.querySelector("#tel");
const form = document.querySelector(".feedback-form");
let sections = Array.from(document.querySelectorAll("section"));

// Navigation

mainMenu.classList.add("main-menu--closed");

navButton.addEventListener("click", function () {
  mainMenu.classList.toggle("main-menu--closed");
  mainMenu.classList.toggle("main-menu--opened");
  if (mainMenu.classList.contains("main-menu--opened")) {
    console.log(1);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
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

menuLink.addEventListener("click", function () {
  sections.forEach(function (section) {
    section.scrollIntoView({ behavior: "smooth" });
  });
});
