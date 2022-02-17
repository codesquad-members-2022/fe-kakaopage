import genres from "../../genres.js";
import { renderGenreContents } from "../../src/core.js";

const WebtoonCategory = (initGenre) => {
  const webtoonGenre = genres.webtoon;
  const initScreenGenre = webtoonGenre[initGenre].screen();
  renderGenreContents(initScreenGenre);
  const genreObjs = Object.keys(webtoonGenre).map((genre) => ({
    genre,
    name: webtoonGenre[genre].name,
  }));
  return `
    ${genreObjs
      .map(
        ({ genre, name }) =>
          `<li class="navGenre-item ${
            genre === initGenre ? "selected" : ""
          }" data-genre="${genre}">${name}</li>`
      )
      .join("")}
  `;
};

export default WebtoonCategory;
