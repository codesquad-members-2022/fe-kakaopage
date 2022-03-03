import { domUtil } from "./util.js";
import {
  getImgCardHtml,
  getWeekNavHTML,
  getToggleNavHTML,
} from "../component/mainComponent.js";
import { data } from "../data/data.js";
import { renderToonbyDay } from "./mainView.js";
import { getBannerHtml } from "../component/BannerComponent.js";
import { onClickBannerController } from "./slider.js";
import { WHOLE_DATA } from "../index.js";

const getToonGenre = (toonGenre) =>
  data.toonData.filter((toonInfo) => toonInfo.genre === toonGenre);

const renderMainSecHome = (fetchedData) => {
  const FilterdByGenre = getToonGenre(fetchedData);
  domUtil.$(".main").innerHTML =
    getToggleNavHTML(toggleinfo) +
    `<ul class="main__cartoonZone">
    ${FilterdByGenre.reduce((data) => getImgCardHtml(data))}</ul>
    `;
};

const renderMainSecWoD = (fetchedData) => {
  domUtil.$(".main").innerHTML =
    getWeekNavHTML(week) +
    getToggleNavHTML(toggleinfo) +
    `<ul class="main__cartoonZone">
    ${getImgCardHtml(fetchedData)}
    </ul>
    `;

  domUtil.eventsAdder(".main__nav__dow", "click", onclickDowNav); // 이부분은 고칠려면 html을 고쳐야해서 시간상 패스
};

// 패치 빼기 패치는 onclick에서 담당하게하자 네트워크통신도 따로 netWork 폴더를 만들어야할까?
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
