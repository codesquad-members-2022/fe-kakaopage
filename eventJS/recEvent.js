import { $, remove, removeAllChild } from "./util.js";
import {
  createMainNav,
  createMaincontainer,
  createImgCard,
  createlist,
  toonGenreChecker,
  multiAppend,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";
import { renderToonbyDay } from "./mainEvent.js";

const renderMainSecHome = (clickedNav) => {
  remove(".main");

  const containers = data.genre.map((toonGen) => {
    const imgData = toonGenreChecker(toonGen);
    return createMaincontainer({ left: toonGen, right: "더보기" }, imgData);
  });

  containers.forEach((container) => {
    $(".containEvery").appendChild(container);
  });

  data.contentsChecker = clickedNav;
};

const renderMainSecWoD = (clickedNav) => {
  remove(".main");

  const parentNav = ".main__nav--toggle";
  const container = createMaincontainer(
    { left: "", right: "전체(test)" },
    data.toonData
  );

  $(".containEvery").appendChild(container);
  const newList = createlist(data.toggleLeft, "main--toggle--left");
  remove(".main--toggle--left");

  container
    .querySelector(parentNav)
    .insertBefore(newList, $(".main--toggle--right"));

  const weekendNav = createMainNav(data);
  weekendNav
    .querySelector(".main__nav__dow--ul")
    .addEventListener("click", renderToonbyDay);

  container.insertBefore(weekendNav, container.querySelector(parentNav));

  data.contentsChecker = clickedNav;
};

export { renderMainSecHome, renderMainSecWoD };
