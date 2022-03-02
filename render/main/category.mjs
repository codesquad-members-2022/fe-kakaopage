import { $ } from "../../util/util.mjs";

const renderMainCategory = () => {
  $(".main__inner").innerHTML += /*html*/ `
  <div class="main__category">
    <div class="categories">
      <a href="#">오늘 UP</a>
      <a href="#">오늘 신작</a>
      <a href="#">오리지널</a>
      <a href="#">완결까지 정주행</a>
      <a href="#">독립운동가 웹툰</a>
      <a href="#">오늘 랭킹</a>
    </div>
  </div>
  `;
  /* 카테고리 채울 함수 */
};

export { renderMainCategory };
