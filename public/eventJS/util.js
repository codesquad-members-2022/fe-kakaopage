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

const cloneAndDsiplay = (parent, contents, loop) => {
  for (let i = 0; i < loop; i++) {
    const $cloneEl = contents.cloneNode(true);
    parent.appendChild($cloneEl);
  }
};

const removeAllChild = (el, classname) => {
  while (el.querySelector(classname).firstChildElement) {
    el.removeChild(el.firstChild);
  }
};

export { createEl, $, remove, removeAllChild, replaceInner, cloneAndDsiplay };
