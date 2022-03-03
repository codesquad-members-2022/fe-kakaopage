const select = (selector, where = document) => where.querySelector(selector);

const initElement = (selector) => (select(selector).innerHTML = '');

const removeElement = (selector) => select(selector).remove();

const updateDocumentTitle = (title) => (document.title = `${title} | 카카오페이지`);

const getData = (...paths) => {
  const resource = paths.join('/');
  return fetch(resource).then((response) => response.json());
};

export { select, initElement, removeElement, updateDocumentTitle, getData };
