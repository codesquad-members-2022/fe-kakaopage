import { webtoons } from "./webtoons.js";

const dow = ["일", "월", "화", "수", "목", "금", "토"];
const webtoons = webtoon_data;
let j = 0;

webtoons.forEach((e, i) => {
  if (i % 10 === 0) j++;
  if (j > 6) j = 0;
  e.day = dow[j];
  if (e.title.length > 7) e.title = e.title.substr(0, 7) + "…";
});

export { webtoons };
