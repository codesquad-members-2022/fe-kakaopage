import BookCategory from "../screens/Book/BookCategory.js";
import BroadcastCategory from "../screens/Broadcast/BroadcastCategory.js";
import HomeCategory from "../screens/Home/HomeCategory.js";
import MovieCategory from "../screens/Movie/MovieCategory.js";
import WebnovelCategory from "../screens/Webnovel/WebnovelCategory.js";
import WebtoonCategory from "../screens/Webtoon/WebtoonCategory.js";
import { renderCategoryContents } from "./core.js";
const headerNav = document.querySelector(".header__nav");
const nav = document.querySelector(".main__navGenre");

const categories = {
  home: HomeCategory,
  webtoon: WebtoonCategory,
  webnovel: WebnovelCategory,
  movie: MovieCategory,
  broadcast: BroadcastCategory,
  book: BookCategory,
};

const handleNavCategory = (event) => {
  const target = event.target.closest(".header__nav-item");

  [...headerNav.children].forEach((category) => {
    category.classList.remove("selected");
  });
  target.classList.add("selected");

  const category = target.dataset.category;

  if (category === "home") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  renderCategoryContents(categories[category]("home"));
};

export { handleNavCategory };
