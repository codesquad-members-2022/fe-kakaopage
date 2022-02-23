import ActionGenre from "./genre/ActionGenre.js";
import BLGenre from "./genre/BLGenre.js";
import BoyGenre from "./genre/BoyGenre.js";
import DaysGenre from "./genre/DaysGenre.js";
import DramaGenre from "./genre/DramaGenre.js";
import HomeGenre from "./genre/HomeGenre.js";
import RofanGenre from "./genre/RofanGenre.js";
import RomanceGenre from "./genre/RomanceGenre.js";
import WebtoonGenre from "./genre/WebtoonGenre.js";

const webtoonGenres = {
  home: HomeGenre,
  days: DaysGenre,
  webtoon: WebtoonGenre,
  boy: BoyGenre,
  drama: DramaGenre,
  romance: RomanceGenre,
  rofan: RofanGenre,
  action: ActionGenre,
  bl: BLGenre,
};

export default webtoonGenres;
