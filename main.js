import { $mondayToon } from "./mondayToon.js";
import $weekWebtoons from "./weekWebtoons.js";

const $main__container = document.querySelector(".main__container");
const $headerNav = document.querySelector(".header__navigation__menu");
const element = document.querySelector(".main__week__menu");
const toonsBox = document.querySelector(".toons__box");
const $main__container__copy = $main__container?.cloneNode(true);

$headerNav.addEventListener("click", (event) => {
  const selectedImg = event.target.closest("img");
  const alt = selectedImg ? selectedImg.alt : null;
  const $main = document.querySelector(".main");
  const $current__main__container = document.querySelector(".main__container");

  if (alt === "menu home") {
    $main.replaceChild($main__container__copy, $current__main__container);
  } else if (alt === "menu toon") {
    $current__main__container.innerHTML = $weekWebtoons;
  }
});

element.addEventListener("click", (event) => {
  const className = event.target.className;
  if (className === "day-월") {
    toonsBox.innerHTML = $mondayToon;
  }
});
