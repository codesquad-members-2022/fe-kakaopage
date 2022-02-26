import { selector, addClass, addEvent } from "./utility.js";

const webtoonNavItems = [
  "홈",
  "요일연재",
  "웹툰",
  "소년",
  "드라마",
  "로맨스",
  "로판",
  "액션무협",
  "BL",
];
const daysNavItems = ["월", "화", "수", "목", "금", "토", "일", "완결"];
const daysMenuNavItems = ["전체", "웹툰", `<i class="fas fa-clock"></i>웹툰`];

const getToday = () => {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return week[date.getDay()];
};

const markSelectedNav = (nav) => {
  if (!selector(nav)) return;
  const navigator = Array.from(selector(nav).children);
  const target = navigator.find((part) => part.innerHTML === selectedNav[nav]);
  addClass(target, "selected");
};

const markAllSelectedNav = () => {
  for (let key in selectedNav) markSelectedNav(key);
};

const selectedNav = {
  ".header__nav": "웹툰",
  ".webtoon__nav": "요일연재",
  ".days__nav": getToday(),
  ".days__menu--nav": "전체",
};

export {
  daysNavItems,
  webtoonNavItems,
  daysMenuNavItems,
  markAllSelectedNav,
  selectedNav,
};
