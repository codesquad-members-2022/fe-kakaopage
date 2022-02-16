import { renderContents } from "./core.js";

const handleNavGenre = (event) => {
  const genre = event.target.dataset.genre;
  renderContents(genre);
};

const handleNavDays = (event) => {};

export { handleNavGenre, handleNavDays };
