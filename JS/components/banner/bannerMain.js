import {makeBannerBtns} from './bannerBtn.js';
import {mainBannerData} from '../../data/scrape/mainBannerData.js'
import {$, $all} from '../../utility.js'

// ========== mainBanner ==========
function renderMainBanner() {
  const main = $('.main');
  const newDiv = makeMainBannerLayout(focus);
  main.appendChild(newDiv);
}

function makeMainBannerLayout() {
  const newDiv = document.createElement('article');
  newDiv.classList.add('main__banner');
  newDiv.classList.add('banner');

  const btns = makeBannerBtns();
  const newList = makeMainBannerList(focus);
  newDiv.appendChild(btns);
  newDiv.appendChild(newList);

  return newDiv
}

function makeMainBannerList() {
  const newList = document.createElement("ul");
  newList.classList.add('banner__list');
  makeMainBannerItems(newList, focus);
  
  return newList;
}

function makeMainBannerItems(list) {
  const data = mainBannerData;
  data.forEach((el, index) => {
    const item = document.createElement('li');
    item.classList.add('banner__item');
    item.dataset.index = index + 1;
    item.innerHTML = `<a href="#"><img src="${data[index].img}" alt="${data[index].img_alt}" class="banner__img"/></a>
    <div class="banner__info">
      <h3 class="banner__title">${data[index].title}</h3>
      <div class="banner__viewer">
        <p><i class="fas fa-clock"></i> 웹툰</p>
        <div class="divider"></div>
        <p><i class="fas fa-user"></i> ${data[index].viewer}</p>
      </div>
      <div class="banner__summary">
        <span>${data[index].desc}</span>
      </div>
    </div>`

    list.appendChild(item);
  });
}

export {renderMainBanner} 