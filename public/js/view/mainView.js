import { domUtil } from "../Util/util.js";
import {
  getImgCardHtml,
  getWeekNavHTML,
  getToggleNavHTML,
} from "/js/component/mainComponent.js";
import { WHOLE_DATA } from "../../index.js";

const renderToonbyDay = (fetchedData) => {
  domUtil.$(".main__cartoonZone").innerHTML = fetchedData.reduce(
    (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
    ""
  );
};

const renderMainSecHome = (genre) => {
  domUtil.$(".main").innerHTML = genre.reduce((mainHtml, currGenre) => {
    const filterdByGenre = getToonGenre(currGenre);
    mainHtml +=
      getToggleNavHTML({ left: [currGenre], right: "더보기" }) +
      `<ul class="main__cartoonZone">
      ${filterdByGenre.reduce((imgHtml, toonData) => {
        imgHtml += getImgCardHtml(toonData);
        return imgHtml;
      }, "")}
      </ul>
      `;

    return mainHtml;
  }, "");
};

const renderMainSecWoD = ({ week, toggleLeft, toonItemData }) => {
  domUtil.$(".main").innerHTML =
    getWeekNavHTML(week) +
    getToggleNavHTML(toggleLeft) +
    getImgCardHtml(toonItemData);

  domUtil.eventsAdder(".main__nav__dow", "click", onclickDowNav); // 얼리 리턴으로 없애 버리기
};

const getToonGenre = (toonGenre) =>
  WHOLE_DATA.toonItemData.filter((toonInfo) => toonInfo.genre === toonGenre);

export { renderToonbyDay, renderMainSecHome, renderMainSecWoD };
