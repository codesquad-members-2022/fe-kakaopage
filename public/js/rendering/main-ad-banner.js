import { $ } from "../utils.js";
import { mainAdBanner } from "../components/main-ad-banner.js";
import { makingClone, changeTab } from "../event/event-slide.js";

export const renderingMainAd = (selectedValue) => {
  const item = fetch("http://localhost:3000/webtoons/main-ad")
    .then((response) => response.json())
    .then((json) => json.filter((e) => e.category === selectedValue))
    .then(
      (selectedData) =>
        ($(".event-slider").innerHTML = selectedData
          .map((e, i) => mainAdBanner(e, i, selectedData.length))
          .reduce((acc, cur) => acc + cur))
    )
    .then(() => {
      makingClone();
      changeTab();
    });
};
