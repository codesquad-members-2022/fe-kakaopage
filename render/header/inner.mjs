import { $ } from "../../util/util.mjs";

const renderHeaderInner = () => {
  $(".header").innerHTML = /* html */ `
  <div class="header__inner">
    <div class="header__top">
      <a class="header__logo" href="#">
        <img
          src="https://static-page.kakao.com/static/common/logo-kakaopage.svg?e0dffe87c45ca42b47399538391a1954"
          alt="카카오페이지 로고"
        />
      </a>
      <div class="flex-blank"></div>
      <div class="header__search">
        <form class="search__form" action="">
          <input class="search__input" type="text" />
        </form>
        <a class="search__logo" href="#">
          <img
            src="https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a"
            alt="검색 아이콘"
          />
        </a>
      </div>
      <div class="header__button">
        <button>
          <img
            src="https://static-page.kakao.com/static/common/pc-logo-stage.svg?67473e9acf34aa0425a982b16f882f5f"
            class="indent"
          />
        </button>
        <button>캐시충전</button>
        <li class="indent">|</li>
        <button>로그인</button>
      </div>
    </div>
  </div>
  `;
};

export { renderHeaderInner };
