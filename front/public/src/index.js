import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";
import { getJson } from "./utils.js";
import GenreList from "./screens/Components/GenreList.js";
import HomeGenre from "./screens/Webtoon/genre/HomeGenre.js";

const init = async () => {
  const { results: categories } = await getJson("categories");
  const { results: genres } = await getJson("genres");
  const { results: webtoons } = await getJson("webtoon");

  localStorage.setItem("genres", JSON.stringify(genres));
  localStorage.setItem("webtoons", JSON.stringify(webtoons));

  const main = document.querySelector(".main");
  const headerNav = document.querySelector(".header__nav");

  const categoryList = new CategoryList(headerNav);
  const genreList = new GenreList(main);

  categoryList.setState({
    categories: categories.map((cInfo) => {
      const category = new Category(headerNav);
      category.setState({ ...cInfo });
      return category;
    }),
  });

  const category = categoryList.state.categories.find(
    ({ state: { selected } }) => selected
  ).state.category;

  genreList.setState({ genres: genres[category] });
  categoryList.setState({ genreList });

  const contentsBox = main.querySelector(".main__contentsBox");
  const initGenreScreen = new HomeGenre(contentsBox);
};

init();