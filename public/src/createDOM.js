
export default function createDom(tagName, text, className) {
  let element = document.createElement(`${tagName}`);
  let content = document.createTextNode(`${text}`);
  element.appendChild(content);
  element.classList.add(className);
  
  return element;
};