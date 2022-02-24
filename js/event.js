<<<<<<< HEAD
import { GNBHandler, SNBHander } from "./handler.js";
import { $ } from "./utils.js";

export function addEvent() {
  $("ul").addEventListener("click", GNBHandler);
  $(".snb").addEventListener("click", SNBHander);
=======
import { GNBHandler, SNBHandler } from "./handler.js";
import { $ } from "./utils.js";

export function addEventGNB() {
  $("ul").addEventListener("click", GNBHandler);
}

export function addEventSNB() {
  $(".snb").addEventListener("click", SNBHandler);
}

export function removeEventSNB() {
  $(".snb").removeEventListener("click", SNBHandler);
>>>>>>> step3
}
