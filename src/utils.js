const $ = (selector) => document.querySelector(selector);

const convertStringToHTML = (string) => {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

const convertReader = (reader) => {
  return `${reader / 10000}만명`;
}

export { $, convertStringToHTML, convertReader };