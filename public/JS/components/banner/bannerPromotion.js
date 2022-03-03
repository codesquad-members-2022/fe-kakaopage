import {makeBannerBtns} from './bannerBtn.js';

export default function makePromotionBanner(data) {
  return  `
    <div class="promotion__banner">
      ${makeBannerBtns()}
      <ul class="promotion__list">
        ${makePromotionItems(data)}
      </ul>
    </div>
  `;
}

function makePromotionItems(data) {
  return data.reduce((acc, cur, index) => {
    const FIRST_CHILD = 0;
    const checkIndex = index === FIRST_CHILD ? 'focused' : 'none';
    
    return acc + makePromotionItem(cur, checkIndex)
  }, '');
}

function makePromotionItem(data, focus) {
  return `
    <li class="promotion__item ${focus}">
      <a href="#">
        <img src="${data.img_url}" alt="${data.img_alt}">
      </a>
    </li>
  `
}