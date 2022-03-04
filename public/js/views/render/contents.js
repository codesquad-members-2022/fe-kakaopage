import { $ } from "../../util/utils.js";
import { handleCategory } from "../../controllers/handle-cateogry.js";
import { dowTopContents } from "../blocks/dow-top.js";
import { renderingMainAd } from "./main-ad-banner.js";

export const renderingContents = (selectedValue, navContents, navRendering) => {
  renderingMainAd(selectedValue);

  const renderingData =
    //렌더링할 곳이 메인이면
    navRendering === "rendering"
      ? navContents[selectedValue].reduce(
          (acc, cur) =>
            acc +
            `<div class="${cur.block} ${cur.frame === "use" ? "frame" : ""}">
    ${cur.func(selectedValue, cur)}
    </div>`,
          ""
        )
      : //렌더링할 곳이 요일탭이면
        dowTopContents(selectedValue);

  $(`.${navRendering}`).innerHTML = renderingData;

  //렌더링 후 dow__nav에도 이벤트 등록
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });
};
