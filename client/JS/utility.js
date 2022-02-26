const selector = (selector, target = document) => {
  return target.querySelector(selector);
};

const addClass = (target, className) => {
  target.classList.add(className);
};

const removeClass = (target, className) => {
  target.classList.remove(className);
};

const addEvent = (event, func) => {
  document.addEventListener(event, func);
};

export { selector, addClass, removeClass, addEvent };
