import { domUtil } from "../Util/util.js";
import { getImgCardHtml } from "../component/mainComponent.js";
import { renderToonbyDay } from "./mainView.js";
import {
  getImgCardHtml,
  getWeekNavHTML,
  getToggleNavHTML,
} from "../component/mainComponent.js";
import { WHOLE_DATA } from "../../index.js";

const renderToonbyDay = (fetchedData) => {
  domUtil.$(".main__cartoonZone").innerHTML = fetchedData.reduce(
    (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
    ""
  );
};

const renderMainSecHome = (genre) => {
  const FilterdByGenre = getToonGenre(genre);
  domUtil.$(".main").innerHTML = FilterdByGenre.reduce(
    (mainHtml, currGenre, idx) => {
      mainHtml +=
        getToggleNavHTML({ left: genre[idx], right: "더보기" }) +
        getImgCardHtml(currGenre);

      return mainHtml;
    }
  );
};

const renderMainSecWoD = ({ week, toggleLeft, toonItemData }) => {
  domUtil.$(".main").innerHTML =
    getWeekNavHTML(week) +
    getToggleNavHTML(toggleLeft) +
    getImgCardHtml(toonItemData);

  domUtil.eventsAdder(".main__nav__dow", "click", onclickDowNav); // 이부분은 고칠려면 html을 고쳐야해서 시간상 패스
};

const getToonGenre = (toonGenre) =>
  WHOLE_DATA.toonItemData.filter((toonInfo) => toonInfo.genre === toonGenre);

export { renderToonbyDay, renderMainSecHome, renderMainSecWoD };
