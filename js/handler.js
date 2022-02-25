import { tabBook } from "../components/tab/global/book.js";
import { tabBroadcast } from "../components/tab/global/broadcast.js";
import { tabHome } from "../components/tab/global/home.js";
import { tabMovie } from "../components/tab/global/movie.js";
import { tabWebnovel } from "../components/tab/global/webNovel.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { createTabWebtoonHome } from "../components/tab/sub/webtoonHome.js";
import { CATEGORIES, SNB } from "./constants.js";
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
    tabWebtoonHome.addEvent();
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
  if (e.target.innerText === SNB.WEBTOONS.HOME) {
    $(".contents").innerHTML = createTabWebtoonHome();
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.DAY) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.WEBTOON) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.BOY) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.DRAMA) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.ROMANCE) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.ROFAN) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.ACTION) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.innerText === SNB.WEBTOONS.BL) {
    $(".contents").innerHTML = "";
    return;
  }
}
