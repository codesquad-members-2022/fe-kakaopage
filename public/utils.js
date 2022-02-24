const $ = (selector) => {
  return document.querySelector(selector);
};

const $$ = (selecotr) => {
  return document.querySelectorAll(selecotr);
};

const range = (n) => {
  return [...Array(n)];
};

const insertIntoMain = (component) => {
  $("main").insertAdjacentHTML("beforeend", component);
};

const getDay = () => {
  const date = new Date();
  const day = date.getDay();

  return day;
};

export { $, $$, range, insertIntoMain, getDay };
