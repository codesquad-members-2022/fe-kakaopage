import {makeBannerBtns} from './bannerBtn.js';
import {$, $all} from '../../utility.js'

// ========== promotionBanner ==========
function renderPromotionBanner(data) {
  const main = $('.main');
  const newDiv = makePromotionLayout(data);
  main.appendChild(newDiv);
}

function makePromotionLayout(data) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('promotion__banner');

  const btns = makeBannerBtns();
  const newList = makePromotionList(data);

  newDiv.appendChild(btns);
  newDiv.appendChild(newList);

  return newDiv;
}

function makePromotionList(data) {
  const newList = document.createElement("ul");
  newList.classList.add('promotion__list');
  makePromotionItem(newList, data);
  return newList;
}

function makePromotionItem(list, data) {
  data.forEach((el, index) => {
    const item = document.createElement('li');
    const firstChild = 0;
    index === firstChild 
    ? item.classList.add('focused', 'promotion__item')
    : item.classList.add('none', 'promotion__item');
    
    item.innerHTML = `<a href="#">
    <img src="${el.img_url}" alt="${el.img_alt}">
  </a>`;

  list.appendChild(item);
  });
}

export {renderPromotionBanner}