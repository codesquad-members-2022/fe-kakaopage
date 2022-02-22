import { createEl, $, remove, replaceInner, removeAllChild } from "./util.js";
import {
  createImgCard,
  createMaincontainer,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";

const renderToonbyDay = (event) => {
  remove(".main__cartoonZone__cell");
  const clickedDay = event.target.textContent;
  const getToonDataByDay = data.toonData.filter(
    (tooninfo) => tooninfo.day === clickedDay
  );
  const imgCardHTML = getToonDataByDay
    .map((tooninfo) => createImgCard(tooninfo))
    .join("");

  $(".main__cartoonZone").innerHTML = imgCardHTML;
};

export { renderToonbyDay };
