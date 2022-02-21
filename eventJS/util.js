import { defaultDisplay } from "../component/defaultComponent.js";
const createEl = (el) => document.createElement(el);
const $ = (className) => document.querySelector(className);
const $All = (className) => document.querySelectorAll(className);

const remove = (dom) => {
  if ($(dom)) {
    $All(dom).forEach((el) => el.remove());
  }
};

const replaceInner = (el, HTMLtem) => {
  el.innerHTML = HTMLtem;
};

const resetDefault = () => {
  $(".containEvery").innerHTML = defaultDisplay;
};

const cloneAndDsiplay = (parent, contents, loop) => {
  for (let i = 0; i < loop; i++) {
    const $cloneEl = contents.cloneNode(true);
    parent.appendChild($cloneEl);
  }
};

export { createEl, $, remove, replaceInner, resetDefault, cloneAndDsiplay };
