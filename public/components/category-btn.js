import { insertIntoMain, range } from "../utils.js";

const getCateBtn = (categoryName) => {
  const cateBtn = `<button class="category-button">${categoryName}</button>`;
  return cateBtn;
};

const getCateBtns = (dataOfCategoryName) => {
  const cateBtns = range(dataOfCategoryName.length).reduce(
    (acc, i) => acc + getCateBtn(dataOfCategoryName[i]),
    ""
  );
  return cateBtns;
};

const createCateBtnBlock = (dataOfCategoryName) => {
  const cateBtnBlock = `<div class="center container category-buttons-container">
  <div class="round-container grid-3col">
    ${getCateBtns(dataOfCategoryName)}
  </div>
</div>`;

  insertIntoMain(cateBtnBlock);
};

export { createCateBtnBlock };
