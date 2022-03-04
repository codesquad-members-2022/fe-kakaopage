const $ = (selector) => {
  return document.querySelector(selector);
};

const $$ = (selecotr) => {
  return document.querySelectorAll(selecotr);
};

const range = (n) => {
  return [...Array(n)].map((_, idx) => idx);
};

const insertIntoMain = (component) => {
  $("main").insertAdjacentHTML("beforeend", component);
};

const getDay = () => {
  const date = new Date();
  const day = date.getDay();

  return day;
};

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

export { $, $$, range, insertIntoMain, getDay, delay };
