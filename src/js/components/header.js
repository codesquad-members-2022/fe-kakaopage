const header = () => {
  return `
  <div class="header__inner">
    <h1 class="header__logo"><a href="#"><img src="static/icon/logo-kakaopage.svg" alt="카카오페이지 로고" /></a></h1>

    <form class="header__search-form">
      <input class="header__search-input" type="text" required />
      <button class="header__search-submit" type="submit"><img src="static/icon/btn_search.png" alt="" /></button>
    </form>

    <div class="header__link-box">
      <a class="header__link header__link--img" href="#"><img src="static/icon/pc-logo-stage.svg" alt="스테이지"/></a>
      <a class="header__link header__link--txt" href="#">캐시충전</a>
      <span class="header__link-divider"></span>
      <a class="header__link header__link--txt" href="#">로그인</a>
    </div>
  </div>
  `;
};

export { header };
