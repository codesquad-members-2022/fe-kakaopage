import { addCarouselEvent } from "../../event/carousel/carouselEvent.js";
import { addLnbEvent } from "../../event/tab/gnbEvent.mjs";
import { addDailyTabEvent } from "../../event/tab/tabEvent.mjs";
import { carouselData, dailySerData } from "../../newData.js";
import { renderByApplication } from "../main/app.mjs";
import { renderMainCarousel } from "../main/carousel.mjs";
import { renderTopItems } from "../main/top.mjs";

const renderDailySer = () => {
  /* main rendering */
  renderMainCarousel(carouselData, 1);
  dailySerData.forEach((info) => {
    renderTopItems(info);
  });
  renderByApplication();
  // /* add header event */
  addLnbEvent();
  // /* add event */
  addCarouselEvent(".carousel__left", ".carousel__right");
  addDailyTabEvent(dailySerData);
};

export { renderDailySer };
