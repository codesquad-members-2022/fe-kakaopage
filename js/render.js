import { $ } from "./utils.js";

export function setSelectedSNB() {
  $(".snb ul").firstElementChild.classList = "snb__selected";
  $(".days ul").firstElementChild.classList = "snb__selected";
}

export function render(el) {
  $(".contents").innerHTML = el;
}
