import webtoonGenres from "./Genres/Webtoon/webtoonGenres.js";
import webnovelGenres from "./Genres/Webnovel/webnovelGenres.js";
import homeGenres from "./Genres/Home/homeGenres.js";
import movieGenres from "./Genres/Movie/movieGenres.js";
import broadcastGenres from "./Genres/Broadcast/broadcastGenres.js";
import bookGenres from "./Genres/Book/bookGenres.js";

const categories = {
  home: homeGenres,
  webtoon: webtoonGenres,
  webnovel: webnovelGenres,
  movie: movieGenres,
  broadcast: broadcastGenres,
  book: bookGenres,
};

export default categories;
