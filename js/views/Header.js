import Abstract from './Abstract.js';

export default class extends Abstract {
  constructor() {
    super();
    this.setTitle('Header');
  }
  async getHtml() {
    return `
    <div class="c-navigation l-header-child">
    <h1 class="c-navigation__header">kakaopage</h1>
    <div class="c-navigation__menu">
      <form class="c-navigation__form">
        <input class="c-navigation__input" type="text" />
        <span class="c-navigation__icon"
          ><i class="fas fa-search"></i
        ></span>
      </form>
      <div class="c-navigation__button c-navigation__button_type_stage">
        <span>STAGE</span>
        <div class="c-navigation__stage-description">
          새로운 작가를 만나는 곳
        </div>
      </div>
      <div class="c-navigation__button c-navigation__button_type_cash">
        <span>캐시충전</span>
      </div>
      <div class="c-navigation__button c-navigation__button_type_login">
        <span>로그인</span>
      </div>
    </div>
  </div>
  <nav class="l-category l-header-child">
    <ul class="c-category">
      <li class="header__index c-category__index">
        <div class="c-category__content">홈</div>
      </li>
      <li class="header__index c-category__index">
        <div class="c-category__content">
          <span>웹툰∙<i class="fas fa-clock"></i></span>
          <div class="c-category__alaram"></div>
        </div>
      </li>
      <li class="header__index c-category__index">
        <div class="c-category__content">
          <span>웹소설∙<i class="fas fa-clock"></i></span>
          <div class="c-category__alaram"></div>
        </div>
      </li>
      <li class="header__index c-category__index">
        <div class="c-category__content">
          <span>영화</span>
          <div class="c-category__alaram"></div>
        </div>
      </li>
      <li class="header__index c-category__index">
        <div class="c-category__content">
          <span>방송</span>
          <div class="c-category__alaram"></div>
        </div>
      </li>
      <li class="header__index c-category__index">
        <div class="c-category__content">
          <span>책</span>
          <div class="c-category__alaram"></div>
        </div>
      </li>
    </ul>
  </nav>
    `;
  }
}
