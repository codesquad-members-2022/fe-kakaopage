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

const fillWithData = (req) => {
  fetch(`http://localhost:3000/${req.path}`)
    .then((res) => res.json())
    .then((data) => req.createBlock(data))
    .catch((err) => console.log(err));
};

export { $, $$, range, insertIntoMain, getDay, fillWithData };
