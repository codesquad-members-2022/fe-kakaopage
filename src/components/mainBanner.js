import { mainBaneerData } from "../data/mainBannerData.js";
import { START_SLIDE_PAGE } from "../constant.js";
import { getBannerTemplate, getBannerContentTemplate} from "./banner.js";
import { getSlideBtnTemplate, getpageNumTemplate } from "./slide.js";

export const renderMainBanner = (genre) => {
    const mainBanner = document.createElement('div');
    mainBanner.classList.add('main-banner', 'slides')
    mainBanner.innerHTML = getMainBannerTemplate(genre);
    document.querySelector('.tab-contents').appendChild(mainBanner);
    setMainBannerSlide(genre);
}

const getMainBannerTemplate = (currGenre) => {
    const bannerData = mainBaneerData[currGenre];
    const bannerTemplate = getBannerTemplate('main-banner', bannerData[START_SLIDE_PAGE - 1]);
    const slideBtnTemplate = getSlideBtnTemplate();
    const pageNumTemplate = getpageNumTemplate('main-banner', START_SLIDE_PAGE, bannerData.length);
    return bannerTemplate + slideBtnTemplate + pageNumTemplate;
}

const setMainBannerSlide = (currGenre) => {
    const bannerData = mainBaneerData[currGenre];
    const container = document.querySelector('.main-banner__contents');
    const currPage = container.querySelector('li');
    currPage.classList.add('slide--curr');

    const prevSlide = getBannerContentTemplate('main-banner', bannerData[bannerData.length - 1]);
    const nextSlide = getBannerContentTemplate('main-banner', bannerData[START_SLIDE_PAGE]);
    currPage.insertAdjacentHTML('beforebegin', prevSlide);
    currPage.insertAdjacentHTML('afterend', nextSlide);
    currPage.previousElementSibling.classList.add('slide--prev');
    currPage.nextElementSibling.classList.add('slide--next');
}
