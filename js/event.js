import { dayHandler, GNBHandler, SNBHandler } from "./handler.js";
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
