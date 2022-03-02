import { $, getToday } from "../utils.js";
import { frameHeader } from "../components/frame-header.js";
import { dowNav } from "../components/dow-nav.js";
import { dowTopWebtoons } from "../fixing-webtoons.js";
import { webtoonCard } from "../components/webtoon-card.js";

const dowTopContents = (selectedValue) => {
  const contents = dowTopWebtoons
    .filter((e) => e.day === selectedValue)
    .reduce((acc, cur) => acc + webtoonCard(cur), "");
  return `<div class=dow-top__contents>${contents}</div>`;
};

const dowTop = (selectedValue, frame) => {
  return (
    frameHeader(selectedValue, frame) +
    dowNav() +
    dowTopContents(selectedValue === "홈" ? getToday() : selectedValue)
  );
};

const dowTopDefault = () => {
  $(".dow-top__contents").innerHTML = dowTopContents(getToday());
};

export { dowTopContents, dowTop, dowTopDefault };
