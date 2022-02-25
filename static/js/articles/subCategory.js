import { handleClickNavigation } from '../router.js';
import { getParams } from '../utils.js';

export function renderSubCategory(subCategoryIndexArr) {
  const { categoryUid, subCategoryUid } = getParams();
  const $newUl = document.createElement('ul');
  $newUl.classList.add('c-category');
  $newUl.innerHTML = `
  ${subCategoryIndexArr
    .map(
      ({ key, value }) =>
        `<li class="main__index c-category__index ${
          key === Number(subCategoryUid) && 'sub-category-active'
        }" >
          <a data-subCategory=${key} href="/?categoryUid=${categoryUid}&subCategoryUid=${key}">${value}</a>
        </li>`
    )
    .join('')}`;
  $newUl.addEventListener('click', (event) =>
    handleClickNavigation(event, 'subCategory', true)
  );
  return $newUl;
}
