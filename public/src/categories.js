import webtoonGenres from "./screens/Webtoon/webtoonGenres.js";
import webnovelGenres from "./screens/Webnovel/webnovelGenres.js";
import homeGernes from "./screens/Home/homeGenres.js";
import movieGernes from "./screens/Movie/movieGenres.js";
import broadcastGernes from "./screens/Broadcast/broadcastGenres.js";
import bookGernes from "./screens/Book/bookGenres.js";

const categories = {
  home: homeGernes,
  webtoon: webtoonGenres,
  webnovel: webnovelGenres,
  movie: movieGernes,
  broadcast: broadcastGernes,
  book: bookGernes,
};

export default categories;
