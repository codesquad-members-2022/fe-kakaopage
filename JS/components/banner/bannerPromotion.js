import {makeBannerBtns} from './bannerBtn.js';
import {promotionBannerData} from '../../data/scrape/promotionBannerData.js'
import {$, $all} from '../../utility.js'

// ========== promotionBanner ==========
function renderPromotionBanner() {
  const main = $('.main');
  const newDiv = makePromotionLayout();
  main.appendChild(newDiv);
}

function makePromotionLayout() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('promotion__banner');

  const btns = makeBannerBtns();
  const newList = makePromotionList();

  newDiv.appendChild(btns);
  newDiv.appendChild(newList);

  return newDiv;
}

function makePromotionList() {
  const newList = document.createElement("ul");
  newList.classList.add('promotion__list');
  makePromotionItem(newList);
  return newList;
}

function makePromotionItem(list) {
  const promotionData = promotionBannerData;

  promotionData.forEach((el, index) => {
    const item = document.createElement('li');
    const firstChild = 0;
    index === firstChild 
    ? item.classList.add('focused', 'promotion__item')
    : item.classList.add('none', 'promotion__item');
    
    item.innerHTML = `<a href="#">
    <img src="${promotionData[index].img_url}" alt="${promotionData[index].img_alt}">
  </a>`;

  list.appendChild(item);
  });
}

export {renderPromotionBanner}