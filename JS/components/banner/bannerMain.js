import {makeBannerBtns} from './bannerBtn.js';
import {mainBannerData} from '../../data/scrape/mainBannerData.js'
import {$, $all} from '../../utility.js'

// ========== mainBanner ==========
function renderMainBanner() {
  const main = $('.main');
  const newDiv = makeMainBannerLayout();
  main.appendChild(newDiv);
}

function makeMainBannerLayout() {
  const newDiv = document.createElement('article');
  newDiv.classList.add('main__banner', 'banner');

  const btns = makeBannerBtns();
  const newList = makeMainBannerList();
  const counter = makeMainBannerCounter();
  
  newDiv.appendChild(btns);
  newDiv.appendChild(newList);
  newDiv.appendChild(counter);

  return newDiv;
}

function makeMainBannerList() {
  const newList = document.createElement("ul");
  newList.classList.add('banner__list');
  makeMainBannerItems(newList, focus);
  
  return newList;
}

function makeMainBannerItems(list) {
  mainBannerData.forEach((el, index) => {
    const item = document.createElement('li');
    item.classList.add('banner__item');
    item.dataset.index = index + 1;
    item.innerHTML = `<a href="#"><img src="${mainBannerData[index].img}" alt="${mainBannerData[index].img_alt}" class="banner__img"/></a>
    <div class="banner__info">
      <h3 class="banner__title">${mainBannerData[index].title}</h3>
      <div class="banner__viewer">
        <p><i class="fas fa-clock"></i> 웹툰</p>
        <div class="divider"></div>
        <p><i class="fas fa-user"></i> ${mainBannerData[index].viewer}</p>
      </div>
      <div class="banner__summary">
        <span>${mainBannerData[index].desc}</span>
      </div>
    </div>`

    list.appendChild(item);
  });
}

function makeMainBannerCounter() {
  const newList = document.createElement("div");
  newList.classList.add('banner__count');
  newList.innerHTML = `<span class="now">1</span>
  <span>/</span>
  <span class="total">${mainBannerData.length}</span>`

  return newList;
}

export {renderMainBanner} 