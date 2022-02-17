import { renderDaysContents } from "./core.js";
import DaysList from "../screens/Components/DaysList.js";

const handleNavDays = (event) => {
  const daysNav = document.querySelector(".contents__daysNav");
  const daysContents = DaysList(event.target.textContent, 10);

  [...daysNav.children].forEach((days) => {
    days.classList.remove("selected");
  });
  event.target.classList.add("selected");

  renderDaysContents(daysContents);
};

export { handleNavDays };
