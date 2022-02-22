import { handleTabActive } from '../handleStyle/activeTab.js';

export function renderSubCategory(subCategoryIndexArr) {
  const newUl = document.createElement('ul');
  newUl.classList.add('c-category');
  newUl.innerHTML = `
  ${subCategoryIndexArr
    .map(
      (categoryIndex, idx) =>
        `<li data-subCategory="${idx}" class="main__index c-category__index" >
      <span>${categoryIndex}</span>
      </li>`
    )
    .join('')}`;
  newUl.addEventListener('click', (event) => {
    const targetEl = event.target;
    let targetLi = null;
    if (targetEl.matches('span')) {
      targetLi = targetEl.closest('li');
    } else if (targetEl.matches('[data-subCategory]')) {
      targetLi = targetEl;
    }
    targetLi && handleTabActive(targetLi, true);
  });
  return newUl;
}
