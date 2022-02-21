const headerNav = document.querySelector(".header__nav");
import { renderCategoryContents } from "./core.js";
import WebtoonCategory from "./screens/Webtoon/WebtoonCategory.js";
import { handleNavCategory } from "./nav-category.js";

const init = async (category, genre) => {
  const initCategory = category;
  const initGenre = genre;
  [...headerNav.children].forEach((categoryNode) => {
    if (categoryNode.dataset.category === initCategory) {
      categoryNode.classList.add("selected");
    }
    categoryNode.addEventListener("click", handleNavCategory);
  });
  renderCategoryContents(await WebtoonCategory(initGenre));
};

init("webtoon", "home");
