import genres from "../../genres.js";
import { renderGenreContents } from "../../src/core.js";

const BroadcastCategory = (initGenre) => {
  const broadcastGenre = genres.broadcast;
  const initScreenGenre = broadcastGenre[initGenre].screen();
  renderGenreContents(initScreenGenre);
  const genreObjs = Object.keys(broadcastGenre).map((genre) => ({
    genre,
    name: broadcastGenre[genre].name,
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

export default BroadcastCategory;
