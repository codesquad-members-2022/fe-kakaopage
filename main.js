import { $mondayToon } from "./mondayToon.js";
import createWeekWebtoons from "./weekWebtoons.js";

const $main__container = document.querySelector(".main__container");
const $headerNav = document.querySelector(".header__navigation__menu");
const element = document.querySelector(".main__week__menu");
const toonsBox = document.querySelector(".toons__box");
const $main__container__copy = $main__container?.cloneNode(true);

const getData = () => {
  fetch("/category/home")
    .then((response) => response.json())
    .then((data) => handleClickToonTap({ data }));
};

getData();

const renderHome = () => {
  const $banner__container = document.querySelector(".banner__container");
  const $week__webtoons = document.querySelector(".week__webtoons");

  $week__webtoons?.parentNode.removeChild($week__webtoons);
  $banner__container.insertAdjacentElement("afterend", $main__container__copy);
};

const renderToon = ({ data }) => {
  const $current__main__container = document.querySelector(".main__container");
  const $banner__container = document.querySelector(".banner__container");
  const $week__webtoons = document.querySelector(".week__webtoons");

  $week__webtoons?.parentNode.removeChild($week__webtoons);
  $current__main__container?.parentNode.removeChild($current__main__container);
  $banner__container.insertAdjacentElement(
    "afterend",
    createWeekWebtoons({ data: data.weekWebtoons.tue })
  );
};

const renderTapContents = ({ className, data }) => {
  const taps = {
    nav__home: renderHome,
    nav__toon: renderToon,
  };

  taps[className]({ data });
};

const handleClickToonTap = ({ data }) => {
  $headerNav.addEventListener("click", (event) => {
    const selectedImg = event.target.closest("img");
    const className = selectedImg?.className;

    renderTapContents({ className, data });
  });
};

element.addEventListener("click", (event) => {
  const className = event.target.className;
  if (className === "day-월") {
    toonsBox.innerHTML = $mondayToon;
  }
});
