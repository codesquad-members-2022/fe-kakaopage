import { handleTabActive } from '../handleStyle/activeTab.js';
import { navigateTo } from '../router.js';
import { getParams } from '../utils.js';

export function renderSubCategory(subCategoryIndexArr) {
  const { categoryUid } = getParams();
  const newUl = document.createElement('ul');
  newUl.classList.add('c-category');
  newUl.innerHTML = `
  ${subCategoryIndexArr
    .map(
      (categoryIndex, idx) =>
        `<li class="main__index c-category__index" >
          <a data-subCategory=${idx} href="/?categoryUid=${categoryUid}&subCategoryUid=${idx}">${categoryIndex}</a>
        </li>`
    )
    .join('')}`;
  newUl.addEventListener('click', (event) => {
    event.preventDefault();
    const targetEl = event.target;
    let targetLi = null;
    if (targetEl.matches('span')) {
      targetLi = targetEl.closest('li');
    } else if (targetEl.matches('[data-subCategory]')) {
      targetLi = targetEl;
    }
    if (targetLi) {
      const {
        href,
        dataset: { subCategory },
      } = event.target;
      handleTabActive(targetLi, true);
      navigateTo(href, categoryUid, subCategory);
    }
  });
  return newUl;
}
