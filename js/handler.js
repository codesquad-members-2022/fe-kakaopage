import { addEvent } from "./event.js";
import { renderNothing, renderSNB, renderWebtoon } from "./render.js";
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

  if (e.target.innerText === "홈") {
    renderNothing();
    return;
  }
  if (e.target.innerText === "웹툰") {
    renderWebtoon();
    addEvent();
    return;
  }
  if (e.target.innerText === "웹소설") {
    renderNothing();
    return;
  }
  if (e.target.innerText === "영화") {
    renderNothing();
    return;
  }
  if (e.target.innerText === "방송") {
    renderNothing();
    return;
  }
  if (e.target.innerText === "책") {
    renderNothing();
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
  console.log(e.target);

  if (e.target.innerText === "홈") {
    renderWebtoon();
    addEvent();
    return;
  }
}
