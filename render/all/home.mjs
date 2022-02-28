import { renderMainCarousel } from "../main/carousel.mjs";
import { renderMainCategory } from "../main/category.mjs";
import { renderMainEvent } from "../main/event.mjs";
import { renderTopItems } from "../main/top.mjs";
import { renderByApplication } from "../main/app.mjs";
import { carouselData, homeData } from "../../newData.js";
import { addCarouselEvent } from "../../event/carousel/carouselEvent.js";
import { addDailyTabEvent } from "../../event/tab/tabEvent.mjs";
import { addLnbEvent } from "../../event/tab/gnbEvent.mjs";

const renderHome = () => {
  /* main rendering */
  renderMainCarousel(carouselData, 0);
  renderMainCategory();
  renderMainEvent();
  homeData.forEach((info) => {
    renderTopItems(info);
  });
  renderByApplication();
  /* add header event */
  addLnbEvent();
  /* add event */
  addCarouselEvent(".carousel__left", ".carousel__right");
  addDailyTabEvent(homeData);
};

export { renderHome };
