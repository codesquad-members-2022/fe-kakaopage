import { $ } from "../../util/util.mjs";

const renderHeaderGnb = () => {
  $(".header").innerHTML += /*html*/ `
  <nav class="header__gnb">
    <ul class="gnb__ul">
      <li class="gnb__li"><a href="#">홈</a></li>
      <li class="gnb__li selected-box">
        <a href="#"
          ><img
            src="https://static-page.kakao.com/static/pc/menu_toon.svg?fd6837bff2e823e13c693320961cc5a8"
            alt="웹툰 기다무"
        /></a>
      </li>
      <li class="gnb__li">
        <a href="#"
          ><img
            src="https://static-page.kakao.com/static/pc/menu_novel.svg?417f894a74c6cd5334b4a84cfa470d55"
            alt="웹소설 기다무"
        /></a>
      </li>
      <li class="gnb__li"><a href="#">영화</a></li>
      <li class="gnb__li"><a href="#">방송</a></li>
      <li class="gnb__li"><a href="#">책</a></li>
    </ul>
  </nav>`;
};

export { renderHeaderGnb };
