const select = (selector, where = document) => where.querySelector(selector);

const initElement = (selector) => (select(selector).innerHTML = '');

const removeElement = (selector) => select(selector).remove();

const updateDocumentTitle = (title) => {
  if (title) {
    document.title = `${title} | 카카오페이지`;
    return;
  }

  const [global, sub] = [getCurrentCategory('gnb'), getCurrentCategory('snb')];
  const currentCategory = `${sub ? sub + ' - ' : ''}${global}`;
  document.title = `${currentCategory} | 카카오페이지`;
};

const getCurrentCategory = (nav) => {
  const currentEl = select(`.${nav}__item--active`);
  return currentEl ? currentEl.dataset.category : null;
};

const getData = (...paths) => {
  const resource = paths.join('/');
  return fetch(resource).then((response) => response.json());
};

export { select, initElement, removeElement, updateDocumentTitle, getCurrentCategory, getData };
