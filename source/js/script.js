// Файл скрипта
//  Variables

const mainMenu = document.querySelector(".main-menu");
const navButton = document.querySelector(".nav__button");

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
