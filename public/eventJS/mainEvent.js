import { domUtil } from "./util.js";
import {
  createDomEl,
  getMainNavHtml,
  getMainHtml,
  getlistHtml,
  getToonGenre,
  getImgCardHtml,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";

const renderToonbyDay = (event) => {
  domUtil.remove(".main__cartoonZone__cell");
  const clickedDay = event.target.textContent;
  const getToonDataByDay = data.toonData.filter(
    (tooninfo) => tooninfo.day === clickedDay
  );
  const imgCardHTML = getToonDataByDay.reduce(
    (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
    ""
  );
  domUtil.$(".main__cartoonZone").innerHTML = imgCardHTML;
};

export { renderToonbyDay };
