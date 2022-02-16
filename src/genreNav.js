import { renderContents } from "./core.js";

const handleNavGenre = (e) => {
  const genre = e.target.textContent;
  renderContents(genre);
};

export { handleNavGenre };
