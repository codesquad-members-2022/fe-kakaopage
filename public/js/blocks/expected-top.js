import { frameHeader } from "../components/frame-header.js";
import { webtoonBigCard } from "../components/webtoon-big-card.js";
import { webtoons } from "../data/webtoons.js";

const expectedWebtoon = webtoons.expectedTop;

const expectedTopContents = () => {
  const contents = expectedWebtoon
    .map((e) => webtoonBigCard(e))
    .reduce((acc, cur) => acc + cur);
  return `<div class="expected-top__contents">${contents}</div>`;
};

export const expectedTop = (selectedValue, frame) => {
  return frameHeader(selectedValue, frame) + expectedTopContents();
};
