const selector = (selector, base = document) => {
  return base.querySelector(selector);
};

const selectorAll = (selector, base = document) => {
  return base.querySelectorAll(selector);
};

const addClass = (className, element) => {
  element.classList.add(className);
};

const removeClass = (className, element) => {
  element.classList.remove(className);
};

const toggleClass = (className, element) => {
  element.classList.toggle(className);
};

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  return element;
}

export { selector, selectorAll, addClass, removeClass, toggleClass, createElement };
