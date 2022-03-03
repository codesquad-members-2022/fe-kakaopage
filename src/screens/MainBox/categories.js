import webtoonGenres from "./Webtoon/webtoonGenres.js";
import webnovelGenres from "./Webnovel/webnovelGenres.js";
import homeGenres from "./Home/homeGenres.js";
import movieGenres from "./Movie/movieGenres.js";
import broadcastGenres from "./Broadcast/broadcastGenres.js";
import bookGenres from "./Book/bookGenres.js";

const categories = {
  home: homeGenres,
  webtoon: webtoonGenres,
  webnovel: webnovelGenres,
  movie: movieGenres,
  broadcast: broadcastGenres,
  book: bookGenres,
};

export default categories;
