import { webtoons } from "./webtoons.js";
import { renderingContents } from "./rendering-contents.js";
import { promotionBanner } from "./components/promotion-banner.js";
import { subAdBanner } from "./components/sub-ad-banner.js";
import { dowTop } from "./blocks/dow-top.js";
import { expectedTop } from "./blocks/expected-top.js";
import { romanceTop } from "./blocks/romance-top.js";
import { dailyTop } from "./blocks/daily-top.js";
import { eventBanner } from "./components/event-banner.js";

const mainNavContents = {
  홈: [
    { class: "promotion-banner", func: promotionBanner },
    { class: "sub-ad-banner", func: subAdBanner },
    { class: "dow-top", func: dowTop },
    { class: "expected-top", func: expectedTop },
    { class: "romance-top", func: romanceTop },
    { class: "daily-top", func: dailyTop },
    { class: "event-banner", func: eventBanner },
  ],
  요일연재: ["dow__serialization"],
};

const nav = [
  { name: "main__nav", contents: mainNavContents, rendering: "rendering" },
  {
    name: "dow__nav",
    contents: webtoons.dowTop,
    rendering: "dow-top__contents",
  },
];

export const settingContents = (selectedNav, selectedValue) => {
  const selectedNavInfo = nav.find((e) => e.name === selectedNav);
  const selectedNavContents = selectedNavInfo.contents;
  const selectedNavRendering = selectedNavInfo.rendering;
  renderingContents(selectedValue, selectedNavContents, selectedNavRendering);
};
