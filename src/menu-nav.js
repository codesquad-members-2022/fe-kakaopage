import { renderDummyMain } from "./mainHTML/dummy.js";
import { renderWebtoonMain } from "./mainHTML/webtoon.js";

function createEventListenerMenu() {
  const mainHTMLs = {
    home: renderDummyMain,
    webtoon: renderWebtoonMain,
    webnovel: renderDummyMain,
    movie: renderDummyMain,
    broadcast: renderDummyMain,
    book: renderDummyMain,
  };

  const menu = document.querySelector(".menu-nav");
  menu.addEventListener("click", (e) => {
    const SelectedItem = e.target.closest("li");
    const previousSelectedItem = menu.querySelector(
      ".menu-nav__item--selected"
    );

    if (previousSelectedItem === SelectedItem) return;

    if (previousSelectedItem !== null) {
      previousSelectedItem.classList.remove("menu-nav__item--selected");
    }
    SelectedItem.classList.add("menu-nav__item--selected");
    mainHTMLs[SelectedItem.dataset.label]();
  });
}

export { createEventListenerMenu };
