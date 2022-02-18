import genres from "../../genres.js";
import { renderGenreContents } from "../../src/core.js";

const BookCategory = (initGenre) => {
  const bookGenre = genres.book;
  const initScreenGenre = bookGenre[initGenre].screen();
  renderGenreContents(initScreenGenre);
  const genreObjs = Object.keys(bookGenre).map((genre) => ({
    genre,
    name: bookGenre[genre].name,
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

export default BookCategory;
