import { createWork } from "../components/common/work/index.js";
import { tabBook } from "../components/tab/global/book.js";
import { tabBroadcast } from "../components/tab/global/broadcast.js";
import { tabHome } from "../components/tab/global/home.js";
import { tabMovie } from "../components/tab/global/movie.js";
import { tabWebnovel } from "../components/tab/global/webNovel.js";
import { tabWebtoonHome } from "../components/tab/global/webtoon.js";
import { createTabWebtoonHome } from "../components/tab/sub/webtoonHome.js";
import { CATEGORIES, SNB } from "./constants.js";
import { addEventDay } from "./event.js";
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
    addEventDay();
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
  if (e.target.dataset.name === SNB.WEBTOONS.HOME) {
    $(".contents").innerHTML = createTabWebtoonHome();
    addEventDay();
    setSelectedSNB();
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.DAY) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.WEBTOON) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.BOY) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.DRAMA) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.ROMANCE) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.ROFAN) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.ACTION) {
    $(".contents").innerHTML = "";
    return;
  }
  if (e.target.dataset.name === SNB.WEBTOONS.BL) {
    $(".contents").innerHTML = "";
    return;
  }
}

export function dayHandler(e) {
  const selected = "day__selected";
  const isList = e.target.tagName === "LI";
  const isSelected = e.target.classList.contains(selected);

  if (!isList) return;
  if (isSelected) return;

  $(`.${selected}`).classList.remove(selected);
  e.target.classList.add(selected);

  if (e.target.dataset.name === "월") {
    $(".day-top").innerHTML = createWork("MON");
    return;
  }
  if (e.target.dataset.name === "화") {
    $(".day-top").innerHTML = createWork("TUE");
    return;
  }
  if (e.target.dataset.name === "수") {
    $(".day-top").innerHTML = createWork("WED");
    return;
  }
  if (e.target.dataset.name === "목") {
    $(".day-top").innerHTML = createWork("THU");
    return;
  }
  if (e.target.dataset.name === "금") {
    $(".day-top").innerHTML = createWork("FRI");
    return;
  }
  if (e.target.dataset.name === "토") {
    $(".day-top").innerHTML = createWork("SAT");
    return;
  }
  if (e.target.dataset.name === "일") {
    $(".day-top").innerHTML = createWork("SUN");
    return;
  }
  if (e.target.dataset.name === "완결") {
    $(".day-top").innerHTML = createWork("FINISH");
    return;
  }
}
