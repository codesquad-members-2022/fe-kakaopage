import { frameHeader } from "../components/frame-header.js";
import { webtoonCard } from "../components/webtoon-card.js";
import { webtoons } from "../data/webtoons.js";

const romanceWebtoons = webtoons.romanceTop;

const romanceTopContents = () => {
  const contents = romanceWebtoons
    .map((e) => webtoonCard(e))
    .reduce((acc, cur) => acc + cur);

  return `<div class="romance-top__contents">${contents}</div>`;
};

export const romanceTop = (selectedValue, frame) => {
  return frameHeader(selectedValue, frame) + romanceTopContents();
};
