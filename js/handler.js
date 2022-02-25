import { tabBook } from "../components/tab/global/book.js";
import { tabBroadcast } from "../components/tab/global/broadcast.js";
import { tabHome } from "../components/tab/global/home.js";
import { tabMovie } from "../components/tab/global/movie.js";
import { tabWebnovel } from "../components/tab/global/webNovel.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { createTabWebtoonHome } from "../components/tab/sub/webtoonHome.js";
import { CATEGORIES } from "./constants.js";
import { addEventGNB, addEventSNB } from "./event.js";
import { setSelectedSNB } from "./render.js";
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

  if (e.target.dataset.name === CATEGORIES.HOME) {
    tabHome.render();
    return;
  }
  if (e.target.dataset.name === CATEGORIES.WEBTOON) {
    tabWebtoonHome.render();
    setSelectedSNB();
    addEventSNB();
    return;
  }
  if (e.target.dataset.name === CATEGORIES.WEBNOVEL) {
    tabWebnovel.render();
    return;
  }
  if (e.target.dataset.name === CATEGORIES.MOVIE) {
    tabMovie.render();
    return;
  }
  if (e.target.dataset.name === CATEGORIES.BROADCAST) {
    tabBroadcast.render();
    return;
  }
  if (e.target.dataset.name === CATEGORIES.BOOK) {
    tabBook.render();
    return;
  }
}

export function SNBHandler(e) {
  const selected = "snb__selected";
  const isList = e.target.tagName === "LI";
  const isSelected = e.target.classList.contains(selected);

  if (!isList) return;
  if (isSelected) return;

  $(`.${selected}`).classList.remove(selected);
  e.target.classList.add(selected);

  // TODO: innerText => dataset으로 변경
  if (e.target.innerText === "홈") {
    $(".contents").innerHTML = createTabWebtoonHome();
    return;
  }
  if (e.target.innerText === "요일연재") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "웹툰") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "소년") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "드라마") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "로맨스") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "로판") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "액션무협") {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === "BL") {
    $(".contents").innerHTML = "";
    return;
  }
}
