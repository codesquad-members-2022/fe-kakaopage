import { webtoons } from "../../data/webtoons.js";
import { renderingContents } from "./rendering/contents.js";
import { promotionBanner } from "./components/promotion-banner.js";
import { subAdBanner } from "./components/sub-ad-banner.js";
import { dowTop } from "./blocks/dow-top.js";
import { expectedTop } from "./blocks/expected-top.js";
import { romanceTop } from "./blocks/romance-top.js";
import { dailyTop } from "./blocks/daily-top.js";
import { eventBanner } from "./components/event-banner.js";
import { dowSerialization } from "./blocks/dow-serialization.js";

const mainNavContents = {
  홈: [
    { block: "promotion-banner", func: promotionBanner, frame: "use" },
    { block: "sub-ad-banner", func: subAdBanner, frame: "use" },
    { block: "dow-top", func: dowTop, frame: "use" },
    { block: "expected-top", func: expectedTop, frame: "use" },
    { block: "romance-top", func: romanceTop, frame: "use" },
    { block: "daily-top", func: dailyTop, frame: "use" },
    { block: "event-banner", func: eventBanner, frame: "use" },
  ],
  요일연재: [
    {
      block: "dow__serialization",
      func: dowSerialization,
      frame: "unuse",
    },
  ],
  웹툰: [],
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
