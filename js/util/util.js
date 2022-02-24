const selector = (selector, base = document) => {
  return base.querySelector(selector);
};
const selectorAll = (selector, base = document) => {
  return base.querySelectorAll(selector);
};
export { selector, selectorAll };
