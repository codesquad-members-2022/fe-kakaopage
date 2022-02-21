export function renderSubCategory(subCategoryIndexArr) {
  const newUl = document.createElement('ul');
  newUl.classList.add('c-category');
  newUl.innerHTML = `
  ${subCategoryIndexArr
    .map(
      (categoryIndex) =>
        `<li class="main__index c-category__index">
      <span>${categoryIndex}</span>
      </li>`
    )
    .join('')}`;
  return newUl;
}
