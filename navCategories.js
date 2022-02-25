import { createTagTemplate, createLiListTemplate } from "./util/createTag.js";
import { categories } from "./data/contents.js";

const element = document.querySelector(".main__navigation__menu");

element.innerHTML = createLiListTemplate(
  categories.map((category) => createTagTemplate("a", category))
);
