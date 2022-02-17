import { renderDaysContents } from "./core.js";
import { updateSelectedNode, getJson } from "./utils.js";
import DaysList from "../screens/Components/DaysList.js";

const headerNav = document.querySelector(".header__nav");

const handleNavDays = async (event) => {
  const category = [...headerNav.children].find((categoryNode) =>
    [...categoryNode.classList].some((cl) => cl === "selected")
  ).dataset.category;
  const daysNav = document.querySelector(".contents__daysNav");
  const { results: webtoons } = await getJson(category);
  const daysContents = DaysList(event.target.textContent, webtoons, 10);

  updateSelectedNode(daysNav, event.target);
  renderDaysContents(daysContents);
};

export { handleNavDays };
