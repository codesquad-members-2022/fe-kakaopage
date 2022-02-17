const main = document.querySelector(".main");
const contentsBox = main.querySelector(".main__contentsBox");

import Home from "../screens/Webtoon/genre/Home.js";
import Days from "../screens/Webtoon/genre/Days.js";
import Webtoon from "../screens/Webtoon/genre/Webtoon.js";
import Boy from "../screens/Webtoon/genre/Boy.js";
import Drama from "../screens/Webtoon/genre/Drama.js";
import Romance from "../screens/Webtoon/genre/Romance.js";
import Rofan from "../screens/Webtoon/genre/Rofan.js";
import Action from "../screens/Webtoon/genre/Action.js";
import BL from "../screens/Webtoon/genre/BL.js";

const screens = {
  home: Home,
  days: Days,
  webtoon: Webtoon,
  boy: Boy,
  drama: Drama,
  romance: Romance,
  rofan: Rofan,
  action: Action,
  bl: BL,
};

const renderGenreContents = (genre) => {
  const screen = screens[genre]();
  contentsBox.innerHTML = screen;
};

export { renderGenreContents };
