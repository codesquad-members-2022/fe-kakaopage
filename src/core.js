const main = document.querySelector(".main");
const navGenre = document.querySelector(".main__navGenre");
const contentsBox = main.querySelector(".main__contentsBox");
import { handleNavGenre } from "./nav-genre.js";

const renderCategoryContents = (categoryContents) => {
  navGenre.innerHTML = categoryContents;
  [...navGenre.children].forEach((genreNode) => {
    genreNode.addEventListener("click", handleNavGenre);
  });
};
const renderGenreContents = (genreContents) => {
  contentsBox.innerHTML = genreContents;
};

export { renderGenreContents, renderCategoryContents };
