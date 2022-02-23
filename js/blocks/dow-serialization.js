import { dowNav } from "../components/dow-nav.js";
import { dowSerializationNav } from "../components/dow-serialization-nav.js";
import { dowTopWebtoons } from "../fixing-webtoons.js";
import { webtoonCard } from "../components/webtoon-card.js";

const position = "beforeend";
const paddingTop = 20;
const cardHeight = 205;
const navHeight = 65 * 2;
const defaultHeight =
  document.querySelector(".rendering").offsetTop + navHeight + paddingTop;

let containerTop = defaultHeight;

const renderingWebtoonLine = () => {
  containerTop += cardHeight;
  return dowTopWebtoons
    .splice(0, 5)
    .reduce((acc, cur) => acc + webtoonCard(cur), "");
};

const checkingCurrentTab = () => {
  let currentTab;
  document.querySelectorAll(".main__nav li").forEach((e) => {
    if (e.id === "selected") currentTab = e.dataset.value;
  });
  return currentTab;
};

const checkingRemainingSpace = () => {
  const browserHeight = window.innerHeight;
  const scrollTop = window.pageYOffset;
  //홈->요일연재->홈 탭으로 이동시 containerTop 초기화
  if (scrollTop === 0) containerTop = defaultHeight;
  if (browserHeight - (containerTop - scrollTop) <= cardHeight) return 0;
  return 1;
};

const scrollDowSerialization = () => {
  if (checkingCurrentTab() !== "요일연재" || !dowTopWebtoons.length) return;
  if (!checkingRemainingSpace()) return;

  document
    .querySelector(".dow-serialization__contents")
    .insertAdjacentHTML(position, renderingWebtoonLine());
};

const dowSerializationContents = () => {
  return `<div class="dow-serialization__contents frame">${renderingWebtoonLine()}</div>`;
};

const dowSerialization = () => {
  return dowNav() + dowSerializationNav() + dowSerializationContents();
};

export { scrollDowSerialization, dowSerialization };
