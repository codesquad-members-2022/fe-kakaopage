import { insertIntoMain } from "../utils.js";

const createCateBtnBlock = () => {
  const cateBtnBlock = `<div class="center container category-buttons-container">
  <div class="round-container grid-3col">
    <button class="category-button">오늘 UP</button>
    <button class="category-button">오늘 신작</button>
    <button class="category-button">오리지널</button>
    <button class="category-button">완결까지 정주행</button>
    <button class="category-button">독립운동가 웹툰</button>
    <button class="category-button">오늘 랭킹</button>
  </div>
</div>`;

  insertIntoMain(cateBtnBlock);
};

export { createCateBtnBlock };
