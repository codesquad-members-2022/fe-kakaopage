function $(selector) {
  return document.querySelector(selector);
}

function getStrTag(tagName, className) {
  return `<${tagName} class="${className || ""}"></${tagName}`;
}

/**
 * @param {string} selector
 * @param {string} className
 * @param {string} imagePath
 * @param {boolean} position true: 자식 앞 | false: 자식 뒤
 * 문제있음.. 기능을 더 작게 분해하자.
 */
function addImg(selector, className, imagePath, position) {
  $(`.${selector}`).insertAdjacentHTML(
    position ? "afterbegin" : "beforeend",
    getStrTag("img", className)
  );
  $(`.${className}`).src = imagePath;
}

function addTag(selector, tagName, className, position) {
  $(selector).insertAdjacentHTML(
    position ? "afterbegin" : "beforeend",
    getStrTag(tagName, className)
  );
}

function setProperty(selector, property, value) {
  $(selector).setAttribute(property, value);
}

export { $, getStrTag, addImg, addTag, setProperty };
