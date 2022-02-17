import { renderCategoryContents } from "./core.js";
import { updateSelectedNode } from "./utils.js";
import categories from "../categories.js";

const headerNav = document.querySelector(".header__nav");
const nav = document.querySelector(".main__navGenre");

const handleNavCategory = (event) => {
  const target = event.target.closest(".header__nav-item");
  updateSelectedNode(headerNav, target);

  const category = target.dataset.category;

  if (category === "home") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  renderCategoryContents(categories[category]("home"));
};

export { handleNavCategory };
