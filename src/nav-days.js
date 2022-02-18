import { renderDaysContents } from "./core.js";
import { updateSelectedNode, getJson } from "./utils.js";
import DaysList from "../screens/Components/DaysList.js";
import webtoonData from "../data/webtoonData.js";

const headerNav = document.querySelector(".header__nav");

const handleNavDays = async (event) => {
  const daysNav = document.querySelector(".contents__daysNav");
  // const category = [...headerNav.children].find((categoryNode) =>
  //   [...categoryNode.classList].some((cl) => cl === "selected")
  // ).dataset.category;
  // const { results: webtoons } = await getJson(category);
  const { results: webtoons } = webtoonData;

  const daysContents = DaysList(event.target.textContent, webtoons, 10);

  updateSelectedNode(daysNav, event.target);
  renderDaysContents(daysContents);
};

export { handleNavDays };
