const main = document.querySelector(".main");
const contentsBox = main.querySelector(".main__contentsBox");

import Home from "../screens/Home.js";
import Days from "../screens/Days.js";
import Webtoon from "../screens/Webtoon.js";
import Boy from "../screens/Boy.js";
import Drama from "../screens/Drama.js";
import Romance from "../screens/Romance.js";
import Rofan from "../screens/Rofan.js";
import Action from "../screens/Action.js";
import BL from "../screens/BL.js";

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

const renderContents = (genre) => {
  const screen = screens[genre]();
  contentsBox.innerHTML = screen;
};

export { renderContents };
