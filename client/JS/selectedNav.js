import { selector, addClass, addEvent } from "./utility.js";

const getToday = () => {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return week[date.getDay()];
};

const markSelectedNav = (nav) => {
  const navigator = Array.from(selector(nav).children);
  const target = navigator.find((part) => part.innerHTML === selectedNav[nav]);
  addClass(target, "selected");
};

export const markAllSelectedNav = () => {
  for (let key in selectedNav) markSelectedNav(key);
};

export const selectedNav = {
  ".header__nav": "웹툰",
  ".webtoon__nav": "요일연재",
  ".days__nav": getToday(),
  ".days__menu--nav": "전체",
};
