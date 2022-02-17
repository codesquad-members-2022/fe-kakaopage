import { renderDaysContents } from "./core.js";
import { updateSelectedNode } from "./utils.js";
import DaysList from "../screens/Components/DaysList.js";

const handleNavDays = (event) => {
  const daysNav = document.querySelector(".contents__daysNav");
  const daysContents = DaysList(event.target.textContent, 10);

  updateSelectedNode(daysNav, event.target);
  renderDaysContents(daysContents);
};

export { handleNavDays };
