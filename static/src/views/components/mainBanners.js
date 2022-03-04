import { startSlider } from '../../modules/slider/slider.js';

const checkMainBannerTags = dataEl => {
  const status = dataEl.status ? `<span class="main-banner__status banner__status">${dataEl.status}</span>` : '';
  const category = dataEl.category
    ? `<span class="main-banner__category banner__category">${dataEl.category}</span>`
    : '';
  const readerNum = dataEl.readerNum
    ? `<span class="main-banner__reader banner__reader">${dataEl.readerNum}</span>`
    : '';
  return status + category + readerNum;
};

export const getMainBannerTemplate = (dataEl, className) => {
  return `<li class="main-banner slide ${className}">
            <a href="${dataEl.link}" class="main-banners__link">
              <div class="main-banner__img-wrap">
                <img src="${dataEl.imgUrl}" alt="${dataEl.title} 포스터">
              </div>
              <div class="baner__info">
                <p class="main-banner__title banner__title">${dataEl.title}</p>
                <div class="main-banner__tags banner__tags">
                  ${checkMainBannerTags(dataEl)}
                </div>
              </div>
              <p class="banner__description">${dataEl.description}</p>
            </a>
          </li>`;
};

export const getMainBannersTemplate = data => {
  let mainBannerList =
    getMainBannerTemplate(data[data.length - 1], 'prev-slide') +
    getMainBannerTemplate(data[0], 'current-slide') +
    getMainBannerTemplate(data[1], 'next-slide');
  return `<div class="main-banners slider">
            <ul class="main-banners__contents slide-wrap">
              ${mainBannerList}
            </ul>
            <div class="slide-buttons">
              <button class="slide-button slide-button--prev main-banners__slide-button" type="button"><span class="hidden-text">왼쪽으로 이동</span></button>
              <button class="slide-button slide-button--next main-banners__slide-button" type="button"><span class="hidden-text">오른쪽으로 이동</span></button>
            </div>
            <div class="slide-paging-number">
              <span class="slide-paging-number__current">1</span>
              <span class="slide-paging-number__all">${data.length}</span>
            </div>
          </div>`;
};

export const addMainBannersEvent = mainBannerData => {
  const sliderOption = {
    data: mainBannerData,
    name: 'main-banners',
    slideFun: getMainBannerTemplate,
    time: 3000
  };
  startSlider(sliderOption);
};
