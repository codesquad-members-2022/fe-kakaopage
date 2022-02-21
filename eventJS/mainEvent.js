import { createEl, $, remove, replaceInner, removeAllChild } from "./util.js";
import {
  createImgCard,
  createMaincontainer,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";

const renderToonbyDay = (event) => {
  const clickedDay = event.target.textContent;
  console.log($(".main__cartoonZone").firstElementChild);
  removeAllChild($(".main"), ".main__cartoonZone");

  const getToonDataByDay = data.toonData.filter(
    (tooninfo) => tooninfo.day === clickedDay
  );

  getToonDataByDay.forEach((tooninfo) =>
    $(".main__cartoon__Zone").appendChild(createImgCard(tooninfo))
  );
};

export { renderToonbyDay };
