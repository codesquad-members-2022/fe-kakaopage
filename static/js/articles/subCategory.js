import { handleClickNavigation } from '../router.js';
import { getParams } from '../utils.js';

export function renderSubCategory(subCategoryIndexArr) {
  const { categoryUid, subCategoryUid } = getParams();
  const newUl = document.createElement('ul');
  newUl.classList.add('c-category');
  newUl.innerHTML = `
  ${subCategoryIndexArr
    .map(
      (categoryIndex, idx) =>
        `<li class="main__index c-category__index ${
          idx === Number(subCategoryUid) && 'sub-category-active'
        }" >
          <a data-subCategory=${idx} href="/?categoryUid=${categoryUid}&subCategoryUid=${idx}">${categoryIndex}</a>
        </li>`
    )
    .join('')}`;
  newUl.addEventListener('click', (event) =>
    handleClickNavigation(event, 'subCategory', true)
  );
  return newUl;
}
