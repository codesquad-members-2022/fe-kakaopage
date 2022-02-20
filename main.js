import { todayTapSet, tabMoving } from "./tabSetting.mjs";

document.addEventListener("click", (e) => {
  e.preventDefault();
});

todayTapSet(".dailyTop__tab");
tabMoving(".dailyTop__tab");
