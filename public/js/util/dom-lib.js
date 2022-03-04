export const $ = (selector, base = document) => base.querySelector(selector);

export const $$ = (selector, base = document) =>
  base.querySelectorAll(selector);

export const getStrTag = (tagName, className) =>
  `<${tagName} class="${className || ""}"></${tagName}`;

export const addTag = (selector, tagName, className, position) => {
  $(selector).insertAdjacentHTML(
    position ? "afterbegin" : "beforeend",
    getStrTag(tagName, className)
  );
};

export const setProperty = (selector, property, value) =>
  $(selector).setAttribute(property, value);

export const addComponent = (selector, string = "", position = false) => {
  $(selector).innerHTML = "";
  $(selector).insertAdjacentHTML(position ? "afterbegin" : "beforeend", string);
};

export const toggleList = (target = false, className) => {
  if (!target) return;
  const list = target.closest("ul").children;
  [...list].forEach((v) => v.classList.remove(className));
  target.closest("li").classList.add(className);
};

export const getToday = () => {
  // const week = ["일", "월", "화", "수", "목", "금", "토"];
  let day = new Date().getDay();
  if (!day) day = 7;
  return day;
};

export const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));
