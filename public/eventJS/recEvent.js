import { domUtil } from "./util.js";
import {
  createDomEl,
  getMainNavHtml,
  getMainHtml,
  getToonGenre,
  getIsHot,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";
import { renderToonbyDay } from "./mainEvent.js";

const renderMainSecHome = () => {
  domUtil.$(".main").innerHTML = "";
  const newMainHTML = data.genre.reduce((inner, toonGen) => {
    const filterToonByGen = getToonGenre(toonGen);
    return (inner += getMainHtml(
      filterToonByGen,
      true,
      { left: [toonGen], right: "더보기" },
      false
    ));
  }, "");
  domUtil.$(".main").innerHTML = newMainHTML;
};

const renderMainSecWoD = () => {
  domUtil.$(".main").innerHTML = "";
  domUtil.$(".main").innerHTML = getMainHtml(
    data.toonData,
    true,
    { left: data.toggleLeft, right: "전체 (149)" },
    true,
    data.week
  );
  domUtil.$(".main__nav__dow--ul").addEventListener("click", renderToonbyDay);
};

const renderMainSecToon = () => {
  // domUtil.remove(".main");
  // const containers = [true, false].map((isTrue) => {
  //   const isTrueData = getIsHot(isTrue);
  //   return domUtil.createDomEl(
  //     "section",
  //     "main",
  //     createDomEl(
  //       {
  //         left: "HOT 최근 프로모션 진행작",
  //         rigth: "더보기",
  //       },
  //       isTrueData
  //     )
  //   );
  // });
  // domUtil.$All(".");
  // domUtil.createEl();
};

export { renderMainSecHome, renderMainSecWoD };

//render main sec Home
// domUtil.remove(".main");
// const parentNav = ".main__nav--toggle";
// const container = createDomEl(
//   "section",
//   "main",
//   getMainHtml({ left: "", right: "전체(test)" }, data.toonData, " test") //!!!!!!!! 이부분 여차 저차 해결!
// );

// domUtil.$(".containEvery").appendChild(container); // 위로 올린이유: 자식요소 삭제를 실패해서

// const newList = createDomEl(
//   "ul",
//   "main--toggle--left",
//   getlistHtml(data.toggleLeft)
// );
// domUtil.remove(".main--toggle--left");

// container
//   .querySelector(parentNav)
//   .insertBefore(newList, domUtil.$(".main--toggle--right"));

// const weekendNav = createDomEl("nav", "main__nav__dow", getMainNavHtml(data));
// weekendNav
//   .querySelector(".main__nav__dow--ul")
//   .addEventListener("click", renderToonbyDay);

// container.insertBefore(weekendNav, container.querySelector(parentNav));
