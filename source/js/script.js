// Файл скрипта
//  Variables

const mainMenu = document.querySelector(".main-menu");
const navButton = document.querySelector(".nav__button");

// Navigation

navButton.addEventListener("click", function () {
  mainMenu.classList.toggle("main-menu--closed");
});
