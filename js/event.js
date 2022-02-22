import { navHandler } from "./handler.js";
import { $ } from "./utils.js";

export function addEvent() {
  $("ul").addEventListener("click", navHandler);
}
