import { $ } from "./utils.js";

export const renderingContents = (
  selectedValue,
  selectedNavContents,
  selectedNavRendering
) => {
  const position = "beforeend";
  $(".rendering").innerHTML = "";

  selectedNavContents[selectedValue].forEach((e) => {
    $(`.${selectedNavRendering}`).insertAdjacentHTML(
      position,
      `<div class="${e.class} frame">
      ${e.func(selectedValue, e)}
      </div>`
    );
  });
};
