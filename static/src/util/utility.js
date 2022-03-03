export const $ = el => document.querySelector(el);
export const $$ = el => document.querySelectorAll(el);

export const removeAndInsertHTML = (target, position, template) => {
  $(target).innerHTML = '';
  $(target).insertAdjacentHTML(position, template);
};

export const activateButton = (removeSelector, addSelector, className) => {
  removeSelector.classList.remove(className);
  addSelector.classList.add(className);
};
