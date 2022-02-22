import { tabMoving } from "./tabSetting.mjs";
import { init } from "./init.mjs";
import { addCarouselEvent, initCarousel } from "./carousel.mjs";
import { carouselInfo } from "./info.js";

document.addEventListener("click", (e) => {
  e.preventDefault();
});
init(".dailyTop__tab");
tabMoving(".dailyTop__tab");
initCarousel(carouselInfo);
addCarouselEvent(".carousel__left", ".carousel__right");
