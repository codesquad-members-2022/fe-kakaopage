import { tabMoving } from "./tabSetting.mjs";
import { init } from "./init.mjs";

document.addEventListener("click", (e) => {
  e.preventDefault();
});
init(".dailyTop__tab");
tabMoving(".dailyTop__tab");
