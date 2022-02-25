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
          .map(
            (row) =>
              `<div class="row">${row.reduce(
                (acc, btnName) =>
                  acc +
                  `<button class="btn recommend__btn">${btnName}</button>`,
                ""
              )}</div>`
          )
          .join("")}
      </div>
    </div>
  </div>
  `;
}
