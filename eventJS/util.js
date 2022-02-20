import { defaultDisplay } from "../component/defaultComponent.js";
const createEl = (el) => document.createElement(el);
const $ = (className) => document.querySelector(className);

const remove = (dom) => {
  if ($(dom)) {
    $(dom).remove();
  }
};

const replaceInner = (el, HTMLtem) => {
  el.innerHTML = HTMLtem;
};

const resetDefault = () => {
  $(".containEvery").innerHTML = defaultDisplay;
};

export { createEl, $, remove, replaceInner, resetDefault };
