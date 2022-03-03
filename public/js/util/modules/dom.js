export const $ = (selector, element) => {
  if (element === undefined) {
    return document.querySelector(selector);
  }
  
  return element.querySelector(selector);
};

export const $$ = (selector, element) => {
  if (element === undefined) {
    return document.querySelectorAll(selector);
  }

  return element.querySelectorAll(selector);
};

export const getElementByAttrSelector = (name, value) => {
  if (value === undefined) {
    return $(`[data-${name}]`);
  }

  return $(`[data-${name}="${value}"]`);
};

export const getElementsByAttrSelector = (name, value) => {
  if (value === undefined) {
    return $$(`[data-${name}]`);
  }

  return $$(`[data-${name}="${value}"]`);
};
