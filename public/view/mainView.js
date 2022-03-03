import { domUtil } from "../Util/util.js";
import { getImgCardHtml } from "../component/mainComponent.js";

const renderToonbyDay = (fetchedData) => {
  domUtil.$(".main__cartoonZone").innerHTML = "";
  const imgCardHTML = fetchedData.reduce(
    (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
    ""
  );
  domUtil.$(".main__cartoonZone").innerHTML = imgCardHTML;
};

export { renderToonbyDay };
