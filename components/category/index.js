/**
 *
 * @param {arrray} categories
 * @returns {Node}
 */
export function createCategory(categories) {
  return `
  <div class="category">
    <ul class="row">
      ${categories.map((category) => `<li>${category}</li>`).join("")}
    </ul>
  </div>
  `;
}
