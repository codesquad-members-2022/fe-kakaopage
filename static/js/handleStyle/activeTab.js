export function handleTabActive(liElement) {
  const liElements = liElement.closest('ul').querySelectorAll('li');
  liElements.forEach((li) => li.classList.remove('category-active'));
  liElement.classList.add('category-active');
}
