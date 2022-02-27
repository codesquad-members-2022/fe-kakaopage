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
import { getBannerHtml } from "../component/BannerComponent.js";
import { onClickBannerController } from "./slider.js";

const renderMainSecHome = () => {
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
  domUtil.$(".main").innerHTML = getMainHtml(
    data.toonData,
    true,
    { left: data.toggleLeft, right: "전체 (149)" },
    true,
    data.week
  );
  domUtil.$(".main__nav__dow--ul").addEventListener("click", renderToonbyDay);
};

const renderBanner = () => {
  domUtil.$(".recommand__image").innerHTML = getBannerHtml(data.bannerUrl);
  domUtil
    .$(".recommand__image--controller")
    .addEventListener("click", onClickBannerController);
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

export { renderMainSecHome, renderMainSecWoD, renderBanner };
