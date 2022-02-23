import { insertIntoMain } from "../utils.js";

const createCateNav = () => {
  const cateNav = `<nav class="center container webtoon-category">
  <ul class="nav-item-sort text-color--light-gray">
    <li class="text-color--black" data-cate='home'>홈</li>
    <li data-cate='days'>요일연재</li>
    <li data-cate='webtoon'>웹툰</li>
    <li data-cate='boy'>소년</li>
    <li data-cate='drama'>드라마</li>
    <li data-cate='romance'>로맨스</li>
    <li data-cate='rofan'>로판</li>
    <li data-cate='action'>액션무협</li>
    <li data-cate='bl'>BL</li>
  </ul>
</nav>`;

  insertIntoMain(cateNav);
};

export { createCateNav };
