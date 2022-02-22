import { icons } from "../data/icons.js";
import { mainBaneerData } from "../data/mainBannerData.js";
import { START_SLIDE_PAGE } from "../constant.js";

const mainBanner = document.querySelector('.main-banner');
let currSlidePage = START_SLIDE_PAGE;

export const renderMainBanner = (currGenre) => {
    const bannerData = mainBaneerData[currGenre];
    mainBanner.innerHTML = initSlideContainer(bannerData[START_SLIDE_PAGE]);
    mainBanner.appendChild(makeSlideBtn());
    mainBanner.appendChild(makePageNum(bannerData.length));
}

const initSlideContainer = (defaultSlidePage) => {
    return `
        <ul class="main-banner__contents slide__container">
            ${makeBanner(defaultSlidePage)}
        </ul>
    `
}


//재사용 위해 별도 파일로 분리해야함
const makeBanner = (bannerData) => {
    const tags = makeBannerTags(bannerData.tags);
    return `
        <li class="main-banner__content banner__content slide--curr">
            <a href="#">
              <div class="banner__img-wrapper">
                <img
                  class="banner__img"
                  src=${bannerData.src}
                  alt=${bannerData.title} 포스터
                />
              </div>
              <p class="main-banner__description banner__description center">
                ${bannerData.description}
              </p>
              <div class="main-banner__information banner__information">
                <p class="main-banner__title banner__title">${bannerData.title}</p>
                ${tags}
              </div>
            </a>
        </li>
    `
}

const makeBannerTags = (tagData) => {
    return  `    
        <div class="main-banner__tags banner__tags vertical-center">
            <span class="banner__status"
                ><img src=${icons[tagData.status]} alt=${tagData.status} 아이콘
            /></span>
            <div class="banner__genre vertical-center">
                ${tagData.free ? `<img src=${icons.free} />` : ``}
                <span>${tagData.type}</span>
            </div>
            <div class="divider divider--thick"></div>
            <div class="banner__views vertical-center">
                ${tagData.views ? `<img src=${icons.whitePerson} />` : ``}
                <span>${tagData.views}</span>
            </div>
        </div>
    `
}

const updateSlidePages = () => {

}

const makeSlideBtn = () => {
    const btnDOM = document.createElement('div');
    btnDOM.className = 'slide__btns';
    btnDOM.innerHTML = `
        <button class="slide__btn slide__btn--prev">
          <img src=${icons.prevBtn} alt="이전 슬라이드 버튼" />
        </button>
        <button class="slide__btn slide__btn--next">
          <img src=${icons.nextBtn} alt="다음 슬라이드 버튼" />
        </button>
    `
    return btnDOM;
}

const makePageNum = (totalNum) => {
    const pageNumDOM = document.createElement('div');
    pageNumDOM.classList.add("main-banner__page-nums", "slide__page-nums")
    pageNumDOM.innerHTML = `
        <span class="main-banner__page-num--curr">${START_SLIDE_PAGE}</span>
        <span>/</span>
        <span class="main-banner__page-num--total">${totalNum}</span>
    `
    return pageNumDOM;
}