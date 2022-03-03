import {makeBannerBtns} from './bannerBtn.js';
import {getData} from '../../utility.js'

const url = 'http://localhost:3000/main-banner';

function renderMainBanner(tab) {
  return getData(url)
    .then(json => json[tab])
    .then(data => makeMainBanner(data));
}

function makeMainBanner(data) {
  const mainBannerItems = data.reduce((acc, cur, index) => acc + makeMainBannerItem(cur, index), '');
  
  return `
    <article class="main__banner banner">
      ${makeBannerBtns()}
      <ul class="banner__list">
        ${mainBannerItems}
      </ul>
      ${makeMainBannerCounter(data)}
    </article>
  `;
}

function makeMainBannerItem(item, index) {
  return `
    <li class="banner__item" data-index="${index + 1}">
      <a href="#"><img src="${item.img_url}" alt="${item.img_alt}" class="banner__img"/></a>
      <div class="banner__info">
        <h3 class="banner__title">${item.title}</h3>
        <div class="banner__viewer">
          <p><i class="fas fa-clock"></i> 웹툰</p>
          <div class="divider"></div>
          <p><i class="fas fa-user"></i> ${item.viewer}</p>
        </div>
        <div class="banner__summary">
          <span>${item.desc}</span>
        </div>
      </div>
    </li>
    ` 
}

function makeMainBannerCounter(data) {
  return `
    <div class="banner__count">
      <span class="now">1</span>
      <span>/</span>
      <span class="total">${data.length}</span>
    </div>
  `
}

export {renderMainBanner} 