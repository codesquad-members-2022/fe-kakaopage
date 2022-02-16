import { renderContents } from "./core.js";

const handleNavGenre = (e) => {
  const genre = e.target.dataset.genre;
  renderContents(genre);
};

export { handleNavGenre };
