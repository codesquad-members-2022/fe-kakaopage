import {makeBannerBtns} from './bannerBtn.js';
import {$} from '../../utility.js'

// ========== promotionBanner ==========
const renderPromotionBanner = (data) => {
  const promotionBanner = `
    <div class="promotion__banner">
      ${makeBannerBtns()}
      <ul class="promotion__list">
        ${makePromotionItem(data)}
      </ul>
    </div>
  `;

  $('.main').insertAdjacentHTML('beforeend', promotionBanner);
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