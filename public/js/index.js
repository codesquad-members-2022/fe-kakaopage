import { initEventListener } from "./event/event-listener.js";
import { dowTopDefault } from "./blocks/dow-top.js";
import { renderingDowNavDefault } from "./rendering/nav.js";
import { renderingMainAd } from "./rendering/main-ad-banner.js";

const renderingDefault = () => {
  renderingMainAd("홈");
  renderingDowNavDefault();
  dowTopDefault();
};

renderingDefault();
initEventListener();
