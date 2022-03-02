import {makeBannerBtns} from './bannerBtn.js';
import {getData} from '../../utility.js'

const url = 'http://localhost:3000/promotion-banner';

function renderPromotionBanner(tab) {
  return getData(url)
    .then(json => json[tab])
    .then(data => promotionBannerTemplete(data));
}

function promotionBannerTemplete(data) {
  return  `
    <div class="promotion__banner">
      ${makeBannerBtns()}
      <ul class="promotion__list">
        ${makePromotionItem(data)}
      </ul>
    </div>
  `;
}

function makePromotionItem(data) {
  let result = '';
  data.forEach((el, index) => {
    const FIRST_CHILD = 0;
    const checkIndex = index === FIRST_CHILD ? 'focused' : 'none';
    result += `
    <li class="promotion__item ${checkIndex}">
      <a href="#">
        <img src="${el.img_url}" alt="${el.img_alt}">
      </a>
    </li>
    `
  });

  return result;
}

export {renderPromotionBanner}