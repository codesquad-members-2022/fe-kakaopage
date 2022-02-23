import { domUtil } from "./util.js";
import {
  createDomEl,
  getMainNavHtml,
  getMainHtml,
  getlistHtml,
  getToonGenre,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";
import { renderToonbyDay } from "./mainEvent.js";

const renderMainSecHome = () => {
  domUtil.remove(".main");

  const main = data.genre.map((toonGen) => {
    const imgData = getToonGenre(toonGen);
    return createDomEl(
      "section",
      "main",
      getMainHtml({ left: toonGen, right: "더보기" }, imgData)
    );
  });

  main.forEach((container) => {
    domUtil.$(".containEvery").appendChild(container);
  });
};

const renderMainSecWoD = () => {
  domUtil.remove(".main");

  const parentNav = ".main__nav--toggle";
  const container = createDomEl(
    "section",
    "main",
    getMainHtml({ left: "", right: "전체(test)" }, data.toonData)
  );

  domUtil.$(".containEvery").appendChild(container); // 위로 올린이유 아이 삭제를 실패해서

  const newList = createDomEl(
    "ul",
    "main--toggle--left",
    getlistHtml(data.toggleLeft)
  );
  domUtil.remove(".main--toggle--left");

  container
    .querySelector(parentNav)
    .insertBefore(newList, domUtil.$(".main--toggle--right"));

  const weekendNav = createDomEl("nav", "main__nav__dow", getMainNavHtml(data));
  weekendNav
    .querySelector(".main__nav__dow--ul")
    .addEventListener("click", renderToonbyDay);

  container.insertBefore(weekendNav, container.querySelector(parentNav));
};

const renderMainSecToon = () => {
  domUtil.remove(".main");

  const containers = data.domUtil.createDomEl(
    "section",
    "main",
    createDomEl({ left: "HOT 최근 프로모션 진행작", rigth: "더보기" })
  );

  domUtil.$All(".");

  domUtil.createEl();
};

export { renderMainSecHome, renderMainSecWoD };
