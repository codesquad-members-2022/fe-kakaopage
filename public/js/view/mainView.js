import { domUtil } from "../Util/util.js";
import { getImgCardHtml } from "../component/mainComponent.js";
import { renderToonbyDay } from "./mainView.js";
import {
  getImgCardHtml,
  getWeekNavHTML,
  getToggleNavHTML,
} from "../component/mainComponent.js";

const renderToonbyDay = (fetchedData) => {
  domUtil.$(".main__cartoonZone").innerHTML = fetchedData.reduce(
    (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
    ""
  );
};

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

const getToonGenre = (toonGenre) =>
  data.toonData.filter((toonInfo) => toonInfo.genre === toonGenre);

export { renderToonbyDay, renderMainSecHome, renderMainSecWoD };
