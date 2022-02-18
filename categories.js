import BookCategory from "./screens/Book/BookCategory.js";
import BroadcastCategory from "./screens/Broadcast/BroadcastCategory.js";
import HomeCategory from "./screens/Home/HomeCategory.js";
import MovieCategory from "./screens/Movie/MovieCategory.js";
import WebnovelCategory from "./screens/Webnovel/WebnovelCategory.js";
import WebtoonCategory from "./screens/Webtoon/WebtoonCategory.js";

const categories = {
  home: HomeCategory,
  webtoon: WebtoonCategory,
  webnovel: WebnovelCategory,
  movie: MovieCategory,
  broadcast: BroadcastCategory,
  book: BookCategory,
};

export default categories;
