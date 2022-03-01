import { domUtil } from "./util.js";
import { getMainHtml, getToonGenre } from "../component/mainComponent.js";
import { data } from "../component/data.js";
import { renderToonbyDay } from "./mainEvent.js";
import { getBannerHtml } from "../component/BannerComponent.js";
import { onClickBannerController } from "./slider.js";

const renderMainSecHome = (clickedNav) => {
  fetch("/subCategory/home")
    .then((response) => response.json())
    .then((homeData) => {
      const newMainHTML = homeData.reduce((mainHtml, toonGen) => {
        const filterToonByGen = getToonGenre(toonGen);
        return (mainHtml += getMainHtml(
          filterToonByGen,
          true,
          { left: [toonGen], right: "더보기" },
          false
        ));
      }, "");
      domUtil.$(".main").innerHTML = newMainHTML;
      renderBanner(clickedNav);
    });
};

const renderMainSecWoD = (clickedNav) => {
  fetch("/subCategory/week")
    .then((response) => response.json())
    .then(({ week, toonItemData, toggleLeft }) => {
      domUtil.$(".main").innerHTML = getMainHtml(
        toonItemData,
        true,
        { left: data.toggleLeft, right: "전체 (149)" },
        true,
        week
      );
      domUtil
        .$(".main__nav__dow--ul")
        .addEventListener("click", renderToonbyDay);
      renderBanner(clickedNav);
    });
};

const renderBanner = (clickedNav) => {
  fetch(`/banner/${clickedNav}`)
    .then((response) => response.json())
    .then((bannerUrl) => {
      domUtil.$(".recommand__image").innerHTML = getBannerHtml(bannerUrl);
      domUtil
        .$(".recommand__image--controller")
        .addEventListener("click", onClickBannerController);
    });
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
