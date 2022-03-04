import { $ } from "../../util/utils.js";
import { mainAdBanner } from "../components/main-ad-banner.js";
import { makingClone, changeTab } from "../../controllers/event-slide.js";

const render = (selectedData) => {
  $(".event-slider").innerHTML = selectedData
    .map((e, i) => mainAdBanner(e, i, selectedData.length))
    .reduce((acc, cur) => acc + cur);
};

export const renderingMainAd = (selectedValue) => {
  const item = fetch("http://localhost:3000/webtoons/main-ad")
    .then((response) => response.json())
    .then((json) => json.filter((e) => e.category === selectedValue))
    .then((selectedData) => render(selectedData))
    .then(() => {
      makingClone();
      changeTab();
    });
};
