const $ = (selector) => {
  return document.querySelector(selector);
};

const range = (n) => {
  return [...Array(n)];
};

export { $, range };
