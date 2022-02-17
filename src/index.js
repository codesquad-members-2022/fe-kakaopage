const navGenre = document.querySelector(".main__navGenre");
import { renderGenreContents } from "./core.js";
import { handleNavGenre } from "./navigation.js";
import { route } from "../constants.js";

const init = () => {
  renderGenreContents(route.HOME);
  [...navGenre.children].forEach((node) => {
    node.addEventListener("click", handleNavGenre);
  });
};

init();
