import { domUtil } from "../Util/util.js";
import { getImgCardHtml } from "../component/mainComponent.js";

const renderToonbyDay = (fetchedData) => {
  domUtil.$(".main__cartoonZone").innerHTML = fetchedData.reduce(
    (toonHtml, tooninfo) => (toonHtml += getImgCardHtml(tooninfo)),
    ""
  );
};

export { renderToonbyDay };
