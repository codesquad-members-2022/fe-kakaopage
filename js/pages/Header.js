import Anchor from '../components/Anchor.js';
import Div from '../components/Div.js';
import Form from '../components/Form.js';
import Ul from '../components/Ul.js';
import Abstract from './Abstract.js';
import { NAVIGATION } from '../constant/header-c.js';

const { CATEGORY_NAMES } = NAVIGATION;

const insideForm = `<input class="c-navigation__input" type="text" />
<span class="c-navigation__icon"
  ><i class="fas fa-search"></i
></span>`;

export default class extends Abstract {
  constructor() {
    super();
    this.setTitle('Header');
  }
  async getHtml() {
    const form = new Form();
    const anchor = new Anchor();
    const ul = new Ul();
    return `
    <div class="c-navigation l-header-child">
    <h1 class="c-navigation__header">kakaopage</h1>
    <div class="c-navigation__menu">
      ${await form.getElement('c-navigation__form', insideForm)}
      ${await anchor.getElement(
        'c-navigation__button c-navigation__button_type_stage',
        `<span>STAGE</span>
      <div class="c-navigation__stage-description">
        새로운 작가를 만나는 곳
      </div>`
      )}
      ${await anchor.getElement(
        'c-navigation__button c-navigation__button_type_cash',
        `<span>캐시충전</span>`
      )}
      ${await anchor.getElement(
        'c-navigation__button c-navigation__button_type_login',
        `<span>로그인</span>`
      )}
    </div>
  </div>
  <nav class="l-category l-header-child">
    ${await ul.getElement(
      'c-category',
      CATEGORY_NAMES,
      'header__index c-category__index'
    )}
  </nav>
    `;
  }
}
