import { webtoons } from "../../../data/webtoons.js";

const dowTopList = ["일", "월", "화", "수", "목", "금", "토", "완결"];
const dowLength = dowTopList.length - 1;
const webtoonLineLength = 10;
const titleLength = 7;
const midRanking = 6;
let dow = 0;
let ranking = 1;

const setRanking = (e) => {
  if (ranking < midRanking) e.info = `${ranking}위`;
  else if (ranking === webtoonLineLength) ranking = 0;
};

const setDay = (e) => {
  e.day = dowTopList[dow];
};

const limitTitleLength = (e) => {
  if (e.title.length > titleLength)
    e.title = e.title.substr(0, titleLength) + "…";
};

webtoons.dowTop.forEach((e, i) => {
  if (i % webtoonLineLength === 0) dow++;
  if (dow > dowLength) dow = 0;
  setRanking(e);
  setDay(e);
  limitTitleLength(e);
  ranking++;
});

const dowTopWebtoons = webtoons.dowTop;

export { dowTopWebtoons };
