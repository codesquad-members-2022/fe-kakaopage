import { mainBannerData } from '../data/mainBannerData.js';
import { START_SLIDE_INDEX } from '../constant.js';
import { getBannerContentTemplate} from './banner.js';
import { getSlideBtnTemplate, getpageNumTemplate, activateBtns} from './slide.js';

export const renderMainBanner = (genre) => {
    const mainBanner = document.createElement('div');
    mainBanner.classList.add('main-banner', 'slides')
    mainBanner.innerHTML = getMainBannerTemplate(genre);
    document.querySelector('.tab-contents').appendChild(mainBanner);
    activateMainBanner(mainBanner, genre);
}

const getMainBannerTemplate = (genre) => {
    const bannerData = mainBannerData[genre];
    const mainBannerContentsTemplate = getMainBannerContentsTemplate(genre);
    const slideBtnTemplate = getSlideBtnTemplate();
    const pageNumTemplate = getpageNumTemplate('main-banner', START_SLIDE_INDEX + 1, bannerData.length);
    return mainBannerContentsTemplate + slideBtnTemplate + pageNumTemplate;
}

const getMainBannerContentsTemplate = (genre) => {
    return `
        <ul class='main-banner__contents'>
            ${getMainBannerSlidesTemplate(genre, START_SLIDE_INDEX)}
        </ul>
    `
}

const getMainBannerSlidesTemplate = (genre, currIndex) => {
    const bannerData = mainBannerData[genre];
    const prevIndex = currIndex - 1 < 0 ? bannerData.length - 1 : currIndex - 1;
    const nextIndex = currIndex + 1 >= bannerData.length ? 0 : currIndex + 1;
    const indexSeries = [prevIndex, currIndex, nextIndex];
    const mainBannerSlidesTemplate = indexSeries.map(index => getBannerContentTemplate('main-banner', bannerData[index])).join('');
    return mainBannerSlidesTemplate;
}

const activateMainBanner = (mainBanner, genre) => {
    activateBtns(mainBanner);
    activateContainer(mainBanner, genre);
}

const activateContainer = (mainBanner, genre) => {
    const container = mainBanner.querySelector('ul');
    container.addEventListener('transitionend', () => {updateMainBanner(mainBanner, genre)});
}

const updateMainBanner = (mainBanner, genre) => {
    const container = mainBanner.querySelector('ul');
    const currIndex = Number(container.querySelector('.curr-slide').dataset.index);
    updateContainer(container, genre, currIndex);
    updatePageNum(mainBanner, currIndex)
}

const updateContainer = (container, genre, currIndex) => {
    container.style.transition = 'none';
    container.style.transform = 'translateX(0px)';
    container.innerHTML = getMainBannerSlidesTemplate(genre, currIndex);
}

const updatePageNum = (mainBanner, currIndex) => {
    const pageNum = mainBanner.querySelector('.main-banner__page-num--curr');
    pageNum.innerText = currIndex + 1;
}