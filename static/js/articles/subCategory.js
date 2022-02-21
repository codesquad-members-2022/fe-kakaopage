export function renderSubCategory(subCategoryIndexArr) {
  return `
    <ul class="c-category">
      ${subCategoryIndexArr
        .map(
          (categoryIndex) =>
            `<li class="main__index c-category__index">
          <span>${categoryIndex}</span>
          </li>`
        )
        .join('')}
    </ul>
  `;
}
