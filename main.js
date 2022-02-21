import { tabMoving } from "./tabSetting.mjs";
import { init } from "./init.mjs";
import { addCarouselEvent } from "./carousel.mjs";

document.addEventListener("click", (e) => {
  e.preventDefault();
});
init(".dailyTop__tab");
tabMoving(".dailyTop__tab");
addCarouselEvent(".carousel__left", ".carousel__right");
