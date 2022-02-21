import { frameHeader } from "../components/frame-header.js";
import { dowNav } from "../components/dow-nav.js";
import { dowTopWebtoons } from "../fixing-webtoons.js";
import { webtoonCard } from "../components/webtoon-card.js";

const dow = ["일", "월", "화", "수", "목", "금", "토"];
//dow[new Date().getDay()]
const dowTopContents = (selectedValue) => {
  console.log(selectedValue);
  const contents = dowTopWebtoons
    .filter((e) => e.day === selectedValue)
    .reduce((acc, cur) => acc + webtoonCard(cur), "");

  return `<div class=dow-top__contents>${contents}</div>`;
};

const dowTop = (selectedValue, frame) => {
  return (
    frameHeader(selectedValue, frame) + dowNav() + dowTopContents(selectedValue)
  );
};

export { dowTopContents, dowTop };
