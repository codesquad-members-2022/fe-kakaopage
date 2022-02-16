const navGenre = document.querySelector(".main__navGenre");
import { renderContents } from "./core.js";
import { handleNavGenre } from "./navigation.js";
import { route } from "../constants.js";

const init = () => {
  renderContents(route.HOME);
  [...navGenre.children].forEach((node) => {
    node.addEventListener("click", handleNavGenre);
  });
};

init();
