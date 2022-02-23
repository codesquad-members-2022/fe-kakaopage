const $ = (selector) => {
  return document.querySelector(selector);
};

const range = (n) => {
  return [...Array(n)];
};

const insertIntoMain = (component) => {
  $("main").insertAdjacentHTML("beforeend", component);
};

export { $, range, insertIntoMain };
