import { $ } from "./utils.js";
import { initEventListener } from "./index.js";
import { dowTopContents } from "./blocks/dow-top.js";

export const renderingContents = (selectedValue, navContents, navRendering) => {
  const renderingData =
    //렌더링할 곳이 메인이면
    navRendering === "rendering"
      ? navContents[selectedValue].reduce(
          (acc, cur) =>
            acc +
            `<div class="${cur.class} frame">
    ${cur.func(selectedValue, cur)}
    </div>`,
          ""
        )
      : dowTopContents(selectedValue);

  $(`.${navRendering}`).innerHTML = renderingData;

  //렌더링 후 dow__nav에도 이벤트 등록
  initEventListener();
};
