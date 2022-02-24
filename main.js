import { $mondayToon } from "./mondayToon.js";
import $weekWebtoons from "./weekWebtoons.js";

const $main__container = document.querySelector(".main__container");
const $headerNav = document.querySelector(".header__navigation__menu");
const element = document.querySelector(".main__week__menu");
const toonsBox = document.querySelector(".toons__box");
const $main__container__copy = $main__container?.cloneNode(true);

$headerNav.addEventListener("click", (event) => {
  const selectedImg = event.target.closest("img");
  const className = selectedImg?.className;
  const $main = document.querySelector(".main");
  const $current__main__container = document.querySelector(".main__container");

  if (className === "nav__home") {
    $main.replaceChild($main__container__copy, $current__main__container);
  } else if (className === "nav__toon") {
    $current__main__container.innerHTML = $weekWebtoons;
  }
});

element.addEventListener("click", (event) => {
  const className = event.target.className;
  if (className === "day-월") {
    toonsBox.innerHTML = $mondayToon;
  }
});
