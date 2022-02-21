const main = document.querySelector(".main");
const navGenre = document.querySelector(".main__navGenre");
const contentsBox = main.querySelector(".main__contentsBox");
import { handleNavDays } from "./nav-days.js";
import { handleNavGenre } from "./nav-genre.js";

const renderCategoryContents = (categoryContents) => {
  navGenre.innerHTML = categoryContents;
  [...navGenre.children].forEach((genreNode) => {
    genreNode.addEventListener("click", handleNavGenre);
  });
};
const renderGenreContents = (genreContents) => {
  contentsBox.innerHTML = genreContents;
  const daysNav = document.querySelector(".contents__daysNav");
  if (daysNav) {
    [...daysNav.children].forEach((day) => {
      day.addEventListener("click", handleNavDays);
    });
  }
};

const renderDaysContents = (daysContents) => {
  const contentsCard = document.querySelector(".contentsCard");
  contentsCard.innerHTML = daysContents;
};
export { renderGenreContents, renderCategoryContents, renderDaysContents };
