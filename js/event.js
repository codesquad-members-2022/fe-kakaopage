import { GNBHandler, SNBHander } from "./handler.js";
import { $ } from "./utils.js";

export function addEvent() {
  $("ul").addEventListener("click", GNBHandler);
  $(".snb").addEventListener("click", SNBHander);
}
