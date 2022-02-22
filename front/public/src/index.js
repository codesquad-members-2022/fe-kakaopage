const headerNav = document.querySelector(".header__nav");
import { renderCategoryContents } from "./core.js";
import WebtoonCategory from "./screens/Webtoon/WebtoonCategory.js";
import { handleNavCategory } from "./nav-category.js";

import FullButton from "./screens/Components/FullButton.js";
import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";

const init = async (category, genre) => {
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");
  const categoryList = new CategoryList(header);

  // const initCategory = category;
  // const initGenre = genre;
  // [...headerNav.children].forEach((categoryNode) => {
  //   if (categoryNode.dataset.category === initCategory) {
  //     categoryNode.classList.add("selected");
  //   }
  //   categoryNode.addEventListener("click", handleNavCategory);
  // });
  // const webtoonCategory = new WebtoonCategory(initGenre);
  // renderCategoryContents(webtoonCategory.template());
};

init("webtoon", "home");
