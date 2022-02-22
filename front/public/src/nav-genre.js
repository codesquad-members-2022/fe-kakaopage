import { renderGenreContents } from "./core.js";
import { updateNodeClasses } from "./utils.js";
import genres from "./genres.js";
import { getJson } from "./utils.js";

const headerNav = document.querySelector(".header__nav");
const genreNav = document.querySelector(".main__navGenre");

const handleNavGenre = async (event) => {
  const category = [...headerNav.children].find((categoryNode) =>
    [...categoryNode.classList].some((cl) => cl === "selected")
  ).dataset.category;

  const { results: categoryResults } = await getJson(category);

  updateNodeClasses(genreNav, event.target, "selected");

  const genreName = event.target.dataset.genre;
  const genreContents = genres[category][genreName].screen(categoryResults);
  renderGenreContents(genreContents);
};

export { handleNavGenre };
