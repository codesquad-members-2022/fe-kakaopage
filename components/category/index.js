/**
 *
 * @param {arrray} categories
 * @returns {string}
 */
export function createCategory(categories, type) {
  return `
  <div class="category ${type}">
    <ul class="row">
      ${categories.map((category) => `<li>${category}</li>`).join("")}
    </ul>
  </div>
  `;
}
