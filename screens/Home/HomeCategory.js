import genres from "../../genres.js";
import { renderGenreContents } from "../../src/core.js";

const HomeCategory = (initGenre) => {
  const homeGenre = genres.home;
  const initScreenGenre = homeGenre[initGenre].screen();
  renderGenreContents(initScreenGenre);

  return ``;
};

export default HomeCategory;
