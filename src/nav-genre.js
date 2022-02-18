import { renderGenreContents } from "./core.js";
import { updateSelectedNode, getJson } from "./utils.js";
import genres from "../genres.js";
import webtoonData from "../data/webtoonData.js";

const headerNav = document.querySelector(".header__nav");
const genreNav = document.querySelector(".main__navGenre");

const handleNavGenre = async (event) => {
  const category = [...headerNav.children].find((categoryNode) =>
    [...categoryNode.classList].some((cl) => cl === "selected")
  ).dataset.category;

  // const { results: categoryResults } = await getJson(category);
  const { results: categoryResults } = webtoonData;

  updateSelectedNode(genreNav, event.target);

  const genreName = event.target.dataset.genre;
  const genreContents = genres[category][genreName].screen(categoryResults);
  renderGenreContents(genreContents);
};

export { handleNavGenre };
