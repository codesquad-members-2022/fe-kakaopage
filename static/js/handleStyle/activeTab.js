export function handleTabActive(element, isSub) {
  debugger;
  const activeClass = isSub ? 'sub-category-active' : 'category-active';
  const ulElement = element.closest('ul').querySelectorAll('li');
  ulElement.forEach((li) => li.classList.remove(activeClass));
  element.classList.add(activeClass);
}
