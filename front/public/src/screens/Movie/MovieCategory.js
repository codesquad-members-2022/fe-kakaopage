import genres from "../../genres.js";
import { renderGenreContents } from "../../core.js";

const MovieCategory = (initGenre) => {
  const movieGenre = genres.movie;
  const initScreenGenre = movieGenre[initGenre].screen();
  renderGenreContents(initScreenGenre);
  const genreObjs = Object.keys(movieGenre).map((genre) => ({
    genre,
    name: movieGenre[genre].name,
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

export default MovieCategory;
