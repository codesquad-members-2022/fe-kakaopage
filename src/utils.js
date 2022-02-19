const $ = (selector) => document.querySelector(selector);

const convertStringToHTML = (string) => {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

export { $, convertStringToHTML };