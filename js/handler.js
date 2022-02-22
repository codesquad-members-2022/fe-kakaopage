import { renderNothing, renderWebtoon } from "./render.js";
import { $ } from "./utils.js";

export function navHandler(e) {
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
