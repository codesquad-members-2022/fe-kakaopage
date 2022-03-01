/**
 *
 * @param {arrray} categories
 * @returns {string}
 */
export function createCategory(categories, type) {
  return `
  <div class="category ${type}">
    <ul class="row">
    ${categories.reduce(
      (acc, category) => acc + `<li data-name=${category}>${category}</li>`,
      ""
    )}
    </ul>
  </div>
  `;
}
