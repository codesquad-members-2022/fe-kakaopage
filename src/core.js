const main = document.querySelector(".main");
const contentsBox = main.querySelector(".main__contentsBox");
import Home from "../screens/Home.js";
import Days from "../screens/Days.js";

const screens = {
  home: Home,
  days: Days,
};

const renderContents = (genre) => {
  const screen = screens[genre]();
  contentsBox.innerHTML = screen;
};

export { renderContents };
