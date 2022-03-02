import {
  carouselHandler,
  dayHandler,
  GNBHandler,
  SNBHandler,
} from "./handler.js";
import { $ } from "./utils.js";

export function addEventGNB() {
  $("ul").addEventListener("click", GNBHandler);
}

export function addEventSNB() {
  $(".snb").addEventListener("click", SNBHandler);
}

export function addEventDay() {
  $(".days").addEventListener("click", dayHandler);
}

export function addEventCarousel() {
  $(".carousel__btn-container").addEventListener("click", carouselHandler);
}
