import { domUtil } from "./util.js";
import { getMainHtml, getToonGenre } from "../component/mainComponent.js";
import { data } from "../data/data.js";
import { renderToonbyDay } from "./mainView.js";
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

export { renderMainSecHome, renderMainSecWoD, renderBanner, onclickBannerNav };
