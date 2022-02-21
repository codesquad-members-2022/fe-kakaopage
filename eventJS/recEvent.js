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

  const containers = data.genre.reduce((containersArr, genre) => {
    containersArr.push(createMaincontainer({ left: genre, right: "더보기" }));
    return containersArr;
  }, []);

  containers.forEach((container) => {
    const toggleInfo = container.querySelector(".main--toggle--left")
      .firstElementChild.textContent;
    const getDataByGenre = toonGenreChecker(toggleInfo);
    multiAppend(getDataByGenre, container, ".main__cartoonZone", createImgCard);
    $(".containEvery").appendChild(container);
  });

  data.contentsChecker = clickedNav;
};

const renderMainSecWoD = (clickedNav) => {
  remove(".main");

  const changedToggle = ".main--toggle--left";
  const container = createMaincontainer({ left: "", right: "전체(test)" });
  removeAllChild(container, changedToggle);

  const lists = createlist(data);
  lists.forEach((list) =>
    container.querySelector(changedToggle).appendChild(list)
  );

  const weekendNav = createMainNav(data);

  weekendNav
    .querySelector(".main__nav__dow--ul")
    .addEventListener("click", renderToonbyDay);

  container.insertBefore(
    weekendNav,
    container.querySelector(".main__nav--toggle")
  );

  multiAppend(data.toonData, container, ".main__cartoonZone", createImgCard);

  $(".containEvery").appendChild(container);
  data.contentsChecker = clickedNav;
};

export { renderMainSecHome, renderMainSecWoD };
