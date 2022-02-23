
export default function createDom(tagName, text) {
  let element = document.createElement(`${tagName}`);
  let content = document.createTextNode(`${text}`);
  element.appendChild(content);
};