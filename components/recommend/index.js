/**
 *
 * @param {array} buttonNames 2차원 배열
 * @returns {string}
 */
export function createRecommend(buttonNames) {
  return `
  <div>
    <div class="recommend white col">
      <div class="recommend__container">
        ${buttonNames
          .map((row) => {
            return `<div class="row">${row
              .map((btnName) => {
                return `<button class="btn recommend__btn">${btnName}</button>`;
              })
              .join("")}</div>`;
          })
          .join("")}
      </div>
    </div>
  </div>
  `;
}
