import { renderingNav } from "../index.js";
import { settingContents } from "../controllers/setting-contents.js";

const blockingRerendering = (selectedNav, selectedValue) => {
  let originalSelected;
  document.querySelectorAll(`.${selectedNav} li`).forEach((e) => {
    if (e.id === "selected") originalSelected = e.dataset.value;
  });
  return originalSelected === selectedValue;
};

export const handleCategory = (e) => {
  if (e.target.nodeName !== "LI") return;
  const selectedElement = e.target;
  const selectedValue = selectedElement.dataset.value;
  const selectedNav = e.target.parentNode.parentNode
    .getAttribute("class")
    .split(" ")[0];
  if (blockingRerendering(selectedNav, selectedValue)) return;
  renderingNav(selectedNav, selectedElement);
  settingContents(selectedNav, selectedValue);
};
