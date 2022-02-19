import { webtoons } from "./webtoons.js";

const dow = ["일", "월", "화", "수", "목", "금", "토"];

const setRanking = (e) => {
  if (k < 6) e.info = `${k}위`;
  else if (k === 10) k = 0;
};

const setDay = (e) => {
  e.day = dow[j];
};

const limitTitleLength = (e) => {
  if (e.title.length > 7) e.title = e.title.substr(0, 7) + "…";
};

let j = 0;
let k = 1;

webtoons.forEach((e, i) => {
  if (i % 10 === 0) j++;
  if (j > 6) j = 0;
  setRanking(e);
  setDay(e);
  limitTitleLength(e);
  k++;
});

export { webtoons };
