import webtoonGenres from "./screens/Webtoon/webtoonGenres.js";
import webnovelGenres from "./screens/Webnovel/webnovelGenres.js";
import homeGenres from "./screens/Home/homeGenres.js";
import movieGenres from "./screens/Movie/movieGenres.js";
import broadcastGenres from "./screens/Broadcast/broadcastGenres.js";
import bookGenres from "./screens/Book/bookGenres.js";

const categories = {
  home: homeGenres,
  webtoon: webtoonGenres,
  webnovel: webnovelGenres,
  movie: movieGenres,
  broadcast: broadcastGenres,
  book: bookGenres,
};

export default categories;
