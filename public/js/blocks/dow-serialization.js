import { dowNav } from "../components/dow-nav.js";
import { dowSerializationNav } from "../components/dow-serialization-nav.js";
import { dowTopWebtoons } from "../fixing-webtoons.js";
import { webtoonCard } from "../components/webtoon-card.js";

const position = "beforeend";
const marginTop = 20;
const paddingTop = 20;
const cardHeight = 210;
const navHeight = 65 * 2;
const webtoonLineLength = 5;
const mainAdBannerHeight = 480;
const defaultHeight =
  document.querySelector(".main__nav").offsetTop +
  document.querySelector(".main__nav").clientHeight +
  mainAdBannerHeight +
  navHeight +
  marginTop +
  paddingTop;

const index = {
  value: 0,
  initValue() {
    this.value = 0;
  },
  addOneLine() {
    this.value += webtoonLineLength;
  },
};
const containerTop = {
  value: defaultHeight,
  init() {
    this.value = defaultHeight;
  },
  changeValue(newVal) {
    this.value += newVal;
  },
};

const renderingWebtoonLine = () => {
  containerTop.changeValue(cardHeight);
  return dowTopWebtoons
    .slice(index.value, index.value + webtoonLineLength)
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
  if (browserHeight - (containerTop.value - scrollTop) <= cardHeight) return 0;
  return 1;
};

const scrollDowSerialization = () => {
  if (checkingCurrentTab() !== "요일연재" || !dowTopWebtoons.length) return;
  if (!checkingRemainingSpace()) return;
  index.addOneLine();
  document
    .querySelector(".dow-serialization__contents")
    .insertAdjacentHTML(position, renderingWebtoonLine());
};

const dowSerializationContents = () => {
  return `<div class="dow-serialization__contents frame">${renderingWebtoonLine()}</div>`;
};

const dowSerialization = () => {
  index.initValue();
  containerTop.init();
  return dowNav() + dowSerializationNav() + dowSerializationContents();
};

export { scrollDowSerialization, dowSerialization };
