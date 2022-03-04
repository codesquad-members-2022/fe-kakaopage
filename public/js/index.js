import { initEventListener } from "./controllers/event-listener.js";
import { dowTopDefault } from "./views/blocks/dow-top.js";
import { renderingDowNavDefault } from "./views/render/nav.js";
import { renderingMainAd } from "./views/render/main-ad-banner.js";

const renderingDefault = () => {
  renderingMainAd("홈");
  renderingDowNavDefault();
  dowTopDefault();
};

renderingDefault();
initEventListener();
