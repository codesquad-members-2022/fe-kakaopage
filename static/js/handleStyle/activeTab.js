export function handleTabActive(liElement, isSub = false) {
  const activeClass = isSub ? 'sub-category-active' : 'category-active';
  const liElements = liElement.closest('ul').querySelectorAll('li');
  liElements.forEach((li) => li.classList.remove(activeClass));
  liElement.classList.add(activeClass);
}
