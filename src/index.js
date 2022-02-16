const navGenre = document.querySelector(".main__navGenre");
import { handleNavGenre } from "./genreNav.js";

[...navGenre.children].forEach((node) => {
  node.addEventListener("click", handleNavGenre);
});
