import { createTabWebtoonHome } from "../components/tabWebtoonHome/index.js";
import { addEvent } from "./event.js";
import { render } from "./render.js";
import { $ } from "./utils.js";

export function GNBHandler(e) {
  const parentClass = e.target.parentNode.classList;
  const selected = "nav__selected";
  const isButton = e.target.tagName === "BUTTON";
  const isSelected = parentClass.contains(selected);

  if (!isButton) return;
  if (isSelected) return;

  $(`.${selected}`).classList.remove(selected);
  parentClass.add(selected);

  if (e.target.dataset.name === "홈") {
    render({ to: ".contents", el: "홈" });
    return;
  }
  if (e.target.dataset.name === "웹툰") {
    render({ to: ".contents", el: createTabWebtoonHome() });
    addEvent();
    return;
  }
  if (e.target.dataset.name === "웹소설") {
    render({ to: ".contents", el: "웹소설" });
    return;
  }
  if (e.target.dataset.name === "영화") {
    render({ to: ".contents", el: "영화" });
    return;
  }
  if (e.target.dataset.name === "방송") {
    render({ to: ".contents", el: "방송" });
    return;
  }
  if (e.target.dataset.name === "책") {
    render({ to: ".contents", el: "책" });
    return;
  }
}

export function SNBHander(e) {
  const selected = "snb__selected";
  const isList = e.target.tagName === "LI";
  const isSelected = e.target.classList.contains(selected);

  if (!isList) return;
  if (isSelected) return;

  $(`.${selected}`).classList.remove(selected);
  e.target.classList.add(selected);
}
