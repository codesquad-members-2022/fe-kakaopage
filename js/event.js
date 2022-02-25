import { GNBHandler, SNBHandler } from "./handler.js";
import { $ } from "./utils.js";

export function addEventGNB() {
  $("ul").addEventListener("click", GNBHandler);
}

export function removeEventSNB() {
  $(".snb").removeEventListener("click", SNBHandler);
}
