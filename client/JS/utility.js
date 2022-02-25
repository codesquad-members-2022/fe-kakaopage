export const selector = (selector, target = document) => {
  return target.querySelector(selector);
};

export const addClass = (target, className) => {
  target.classList.add(className);
};

export const removeClass = (target, className) => {
  target.classList.remove(className);
};

export const addEvent = (event, func) => {
  document.addEventListener(event, func);
};
