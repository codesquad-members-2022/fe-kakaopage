import { domUtil } from "./util.js";
import { getImgCardHtml } from "../component/mainComponent.js";

const renderToonbyDay = ({ target: { textContent } }) => {
  fetch(`/weekCategory/${textContent}`)
    .then((response) => response.json())
    .then((filterdByDayData) => {
      domUtil.$(".main__cartoonZone").innerHTML = "";
      const imgCardHTML = filterdByDayData.reduce(
        (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
        ""
      );
      domUtil.$(".main__cartoonZone").innerHTML = imgCardHTML;
    });
};

const onclickDowNav = ({ target: { textContent } }) => {
  renderToonbyDay(textContent);
};

export { renderToonbyDay };
