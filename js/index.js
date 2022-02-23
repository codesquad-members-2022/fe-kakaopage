import { initEventListener } from "./event-listener.js";
import { dowTopDefault } from "./blocks/dow-top.js";
import { renderingDowNavDefault } from "./rendering-nav.js";

const renderingDefault = () => {
  renderingDowNavDefault();
  dowTopDefault();
};

initEventListener();
renderingDefault();
