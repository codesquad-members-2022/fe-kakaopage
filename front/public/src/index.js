const headerNav = document.querySelector(".header__nav");
import { renderCategoryContents } from "./core.js";
import WebtoonCategory from "./screens/Webtoon/WebtoonCategory.js";
import { handleNavCategory } from "./nav-category.js";

import FullButton from "./screens/Components/FullButton.js";
import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";
import { getJson } from "./utils.js";
import GenreList from "./screens/Components/GenreList.js";

const init = async () => {
  const { results: categories } = await getJson("categories");
  const { results: genres } = await getJson("genres");
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");

  const categoryList = new CategoryList(header);
  categoryList.setState({ categories });

  const category = categoryList.state.categories.find(
    ({ selected }) => selected
  ).category;

  const genreList = new GenreList(main);
  genreList.setState({ genres: genres[category] });
  // Category 에 맞는 Contents 들 main 에 넣기
  // 1. 장르 Navigation
  // 2. 장르에 맞는 Contents들

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

init();
