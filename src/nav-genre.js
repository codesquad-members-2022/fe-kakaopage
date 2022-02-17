import { renderGenreContents } from "./core.js";
import genres from "../genres.js";

const headerNav = document.querySelector(".header__nav");
const genreNav = document.querySelector(".main__navGenre");

const handleNavGenre = (event) => {
  const category = [...headerNav.children].find((categoryNode) => {
    return [...categoryNode.classList].some((cl) => cl === "selected");
  }).dataset.category;

  [...genreNav.children].forEach((genre) => {
    genre.classList.remove("selected");
  });
  event.target.classList.add("selected");

  const genreName = event.target.dataset.genre;
  const genreContents = genres[category][genreName].screen();
  renderGenreContents(genreContents);
};

export { handleNavGenre };
