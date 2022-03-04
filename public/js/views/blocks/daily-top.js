import { frameHeader } from "../components/frame-header.js";
import { webtoonLongCard } from "../components/webtoon-long-card.js";
import { webtoons } from "../../../../data/webtoons.js";

const dailyWebtoons = webtoons.dailyTop;

const dailyTopContents = () => {
  const contents = dailyWebtoons
    .map((e) => webtoonLongCard(e))
    .reduce((acc, cur) => acc + cur);

  return `<ul>${contents}</ul>`;
};

export const dailyTop = (selectedValue, frame) => {
  return frameHeader(selectedValue, frame) + dailyTopContents();
};
