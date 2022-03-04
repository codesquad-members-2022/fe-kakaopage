import { getToday } from "../../util/utils.js";

const renderingNav = (selectedNav, selectedElement) => {
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

export { renderingNav, renderingDowNavDefault };
