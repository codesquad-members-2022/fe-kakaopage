const select = (selector, where = document) => where.querySelector(selector);

const initElement = (selector) => (select(selector).innerHTML = '');

const updateDocumentTitle = (title) => (document.title = `${title} | 카카오페이지`);

export { select, initElement, updateDocumentTitle };
