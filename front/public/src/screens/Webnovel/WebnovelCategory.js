import genres from "../../genres.js";
import { renderGenreContents } from "../../core.js";

const WebnovelCategory = (initGenre) => {
  const webnovelGenre = genres.webnovel;
  const initScreenGenre = webnovelGenre[initGenre].screen();
  renderGenreContents(initScreenGenre);
  const genreObjs = Object.keys(webnovelGenre).map((genre) => ({
    genre,
    name: webnovelGenre[genre].name,
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

export default WebnovelCategory;
