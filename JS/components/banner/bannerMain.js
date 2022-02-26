import {makeBannerBtns} from './bannerBtn.js';
import {$} from '../../utility.js'

const renderMainBanner = (data) => {
  const mainBanner = `
    <article class="main__banner banner">
      ${makeBannerBtns()}
      <ul class="banner__list">
        ${makeMainBannerItems(data)}
      </ul>
      ${makeMainBannerCounter(data)}
    </article>
  `;

  $('.main').insertAdjacentHTML('beforeend', mainBanner);
}

const makeMainBannerItems = (data) => {
  let result = '';
  data.forEach((el, index) => {
    result += `
      <li class="banner__item" data-index="${index + 1}">
        <a href="#"><img src="${el.img_url}" alt="${el.img_alt}" class="banner__img"/></a>
        <div class="banner__info">
          <h3 class="banner__title">${el.title}</h3>
          <div class="banner__viewer">
            <p><i class="fas fa-clock"></i> 웹툰</p>
            <div class="divider"></div>
            <p><i class="fas fa-user"></i> ${el.viewer}</p>
          </div>
          <div class="banner__summary">
            <span>${el.desc}</span>
          </div>
        </div>
      </li>
    `
  });

  return result
}

const makeMainBannerCounter = (data) => {
  return `
    <div class="banner__count">
      <span class="now">1</span>
      <span>/</span>
      <span class="total">${data.length}</span>
    </div>
  `
}

export {renderMainBanner} 