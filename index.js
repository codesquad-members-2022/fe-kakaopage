import { renderHeaderInner } from "./render/header/inner.mjs";
import { renderHeaderGnb } from "./render/header/gnb.mjs";
import { renderMainCarousel } from "./render/main/carousel.mjs";
import { renderMainCategory } from "./render/main/category.mjs";
import { renderMainEvent } from "./render/main/event.mjs";
import { renderTopItems } from "./render/main/top.mjs";
import { renderByApplication } from "./render/main/app.mjs";
import { renderFooter } from "./render/footer/inner.mjs";
import { carouselData, homeData } from "./newData.js";
import { addCarouselEvent } from "./event/carousel/carouselEvent.js";
import { addDailyTabEvent } from "./event/tab/tabEvent.mjs";

document.addEventListener("click", (e) => {
  e.preventDefault();
});

/* header rendering */
renderHeaderInner();
renderHeaderGnb();

/* main rendering */
renderMainCarousel(carouselData[0]);
renderMainCategory();
renderMainEvent();
homeData.forEach((info) => {
  renderTopItems(info);
});

/* footer rendering */
renderByApplication();
renderFooter();

/* add event */
addCarouselEvent(".carousel__left", ".carousel__right");
addDailyTabEvent();
