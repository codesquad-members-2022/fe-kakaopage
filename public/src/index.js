import CategoryList from "./screens/Components/CategoryList.js";
import Category from "./screens/Components/Category.js";
import { getJsons } from "./utils.js";
import GenreList from "./screens/Components/GenreList.js";
import HomeGenre from "./screens/Webtoon/genre/HomeGenre.js";

const init = async () => {
  const paths = ["categories", "genres", "webtoons"];

  const [{ results: categories }, { results: genres }, { results: webtoons }] =
    await getJsons(paths);

  localStorage.setItem("genres", JSON.stringify(genres));
  localStorage.setItem("webtoons", JSON.stringify(webtoons));

  const main = document.querySelector(".main");
  const headerNav = document.querySelector(".header__nav");

  const categoryList = new CategoryList(headerNav);
  const genreList = new GenreList(main, { genre: "home" });

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

  genreList.setState({ genres: genres[category], category });
  categoryList.setState({ genreList });

  const contentsBox = main.querySelector(".main__contentsBox");
  new HomeGenre(contentsBox);
};

init();
