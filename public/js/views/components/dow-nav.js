import { getToday } from "../../util/utils.js";

const dowNavContents = ["월", "화", "수", "목", "금", "토", "일", "완결"];

export const dowNav = () => {
  return `<div class="dow__nav nav">
  <ul class="nav__list">${dowNavContents.reduce(
    (acc, cur) =>
      acc +
      `<li class="nav__item" ${
        cur === getToday() ? "id = selected" : ""
      } data-value="${cur}">${cur}</li>`,
    ""
  )}
  </ul></div>`;
};
