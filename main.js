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
  const $banner__container = document.querySelector(".banner__container");
  const $week__webtoons = document.querySelector(".week__webtoons");
  if (className === "nav__home") {
    $week__webtoons?.parentNode.removeChild($week__webtoons);
    $banner__container.insertAdjacentElement(
      "afterend",
      $main__container__copy
    );
  } else if (className === "nav__toon") {
    $banner__container.insertAdjacentHTML("afterend", $weekWebtoons);
  }
});

element.addEventListener("click", (event) => {
  const className = event.target.className;
  if (className === "day-월") {
    toonsBox.innerHTML = $mondayToon;
  }
});
