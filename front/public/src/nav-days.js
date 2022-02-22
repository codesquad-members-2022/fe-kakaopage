import { renderDaysContents } from "./core.js";
import { updateNodeClasses } from "./utils.js";
import DaysList from "./screens/Components/DaysList.js";
import { getJson } from "./utils.js";

const headerNav = document.querySelector(".header__nav");

const handleNavDays = async (event) => {
  const daysNav = document.querySelector(".contents__daysNav");
  const category = [...headerNav.children].find((categoryNode) =>
    [...categoryNode.classList].some((cl) => cl === "selected")
  ).dataset.category;
  const { results: webtoons } = await getJson(category);

  const daysContents = DaysList(event.target.textContent, webtoons, 10);

  updateNodeClasses(daysNav, event.target, "selected");
  renderDaysContents(daysContents);
};

export { handleNavDays };
