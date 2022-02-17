import { renderGenreContents } from "./core.js";

const handleNavGenre = (event) => {
  const genre = event.target.dataset.genre;
  renderGenreContents(genre);
};

const handleNavDays = (event) => {};

export { handleNavGenre, handleNavDays };
