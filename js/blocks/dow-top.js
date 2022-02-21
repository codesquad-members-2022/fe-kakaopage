import { frameHeader } from "../components/frame-header.js";
import { dowNav } from "../components/dow-nav.js";
import { dowTopWebtoons } from "../fixing-webtoons.js";
import { webtoonCard } from "../components/webtoon-card.js";

const dow = ["일", "월", "화", "수", "목", "금", "토"];

const dowTopContents = (selectedValue) => {
  const contents = dowTopWebtoons
    .filter((e) => e.day === dow[new Date().getDay()])
    .map((e) => webtoonCard(e))
    .reduce((acc, cur) => acc + cur);

  return `<div class=dow-top__contents>${contents}</div>`;
};

export const dowTop = (selectedValue, frame) => {
  return (
    frameHeader(selectedValue, frame) + dowNav() + dowTopContents(selectedValue)
  );
};
