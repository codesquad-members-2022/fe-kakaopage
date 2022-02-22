import {makeBannerBtns} from './bannerBtn.js';
import {promotionBannerData} from '../../data/scrape/promotionBannerData.js'
import {$, $all} from '../../utility.js'

// ========== promotionBanner ==========
function renderPromotionBanner(focus) {
  const main = $('.main');
  const newDiv = makePromotionLayout(focus);
  main.appendChild(newDiv);
}

function makePromotionLayout(focus) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('promotion__banner');

  const btns = makeBannerBtns();
  const newList = makePromotionList(focus);

  newDiv.appendChild(btns);
  newDiv.appendChild(newList);

  return newDiv;
}

function makePromotionList(focus) {
  const newList = document.createElement("ul");
  newList.classList.add('promotion__list');
  makePromotionItem(newList, focus);
  return newList;
}

function makePromotionItem(list, focus) {
  const promotionData = promotionBannerData;

  promotionData.forEach((el, index) => {
    const item = document.createElement('li');

    item.classList.add('promotion__item');
    promotionData[index].genre === focus
    ? item.classList.add('focused')
    : item.classList.add('none')

    item.innerHTML = `<a href="#">
    <img src="${promotionData[index].img_url}" alt="${promotionData[index].img_alt}">
  </a>`

  list.appendChild(item);
  });
}

export {renderPromotionBanner}