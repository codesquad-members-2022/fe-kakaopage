import { renderingNav } from "./rendering/nav.js";
import { settingContents } from "./setting-contents.js";

export const handleCategory = (e) => {
  if (e.target.nodeName !== "LI") return;
  const selectedElement = e.target;
  const selectedValue = selectedElement.dataset.value;
  const selectedNav = e.target.parentNode.parentNode
    .getAttribute("class")
    .split(" ")[0];
  renderingNav(selectedNav, selectedElement);
  settingContents(selectedNav, selectedValue);
};
