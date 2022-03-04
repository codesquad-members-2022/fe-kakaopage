import { getToday } from "./util/utils.js";
import { dowTopDefault } from "./views/blocks/dow-top.js";
import { renderingMainAd } from "./views/components/main-ad-banner.js";
import { handleCategory } from "./controllers/handle-cateogry.js";

export const renderingNav = (selectedNav, selectedElement) => {
  document.querySelectorAll(`.${selectedNav} li`).forEach((e) => {
    e.id = "";
  });
  selectedElement.id = "selected";
};

const renderingDowNavDefault = () => {
  document.querySelectorAll(".dow__nav .nav__list .nav__item").forEach((e) => {
    if (e.dataset.value === getToday()) return renderingNav("dow__nav", e);
  });
};

const renderingDefault = () => {
  renderingMainAd("홈");
  renderingDowNavDefault();
  dowTopDefault();
};

const setNavEvent = () => {
  document.querySelectorAll(".nav__list").forEach((e) => {
    e.addEventListener("click", handleCategory);
  });
};

renderingDefault();
setNavEvent();
