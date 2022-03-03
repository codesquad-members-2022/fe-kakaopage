import { mainBannerData } from '../../server/data/mainBannerData.js';
import { START_SLIDE_INDEX } from '../constant.js';
import { getBannerContentTemplate} from './banner.js';
import { getSlideBtnTemplate, getpageNumTemplate, activateBtns, activateAutoSlide, activateSlide} from './slide.js';

export const renderMainBanner = (genre) => {
    const mainBanner = document.createElement('div');
    const bannerData = mainBannerData[genre];
    mainBanner.dataset.name = 'main-banner';
    mainBanner.classList.add('main-banner', 'slides')
    mainBanner.innerHTML = getMainBannerTemplate(bannerData);
    document.querySelector('.tab-contents').appendChild(mainBanner);
    activateMainBanner(mainBanner, bannerData);
}

const getMainBannerTemplate = (bannerData) => {
    const mainBannerContentsTemplate = getMainBannerContentsTemplate(bannerData);
    const slideBtnTemplate = getSlideBtnTemplate();
    const pageNumTemplate = getpageNumTemplate('main-banner', START_SLIDE_INDEX + 1, bannerData.length);
    return mainBannerContentsTemplate + slideBtnTemplate + pageNumTemplate;
}

const getMainBannerContentsTemplate = (bannerData) => {
    return `
        <ul class='main-banner__contents'>
            ${getMainBannerSlidesTemplate(bannerData, START_SLIDE_INDEX)}
        </ul>
    `
}

const getMainBannerSlidesTemplate = (bannerData, currIndex) => {
    const prevIndex = currIndex - 1 < 0 ? bannerData.length - 1 : currIndex - 1;
    const nextIndex = currIndex + 1 >= bannerData.length ? 0 : currIndex + 1;
    const indexSeries = [prevIndex, currIndex, nextIndex];
    const mainBannerSlidesTemplate = indexSeries.map(index => getBannerContentTemplate('main-banner', bannerData[index])).join('');
    return mainBannerSlidesTemplate;
}

const activateMainBanner = (mainBanner, bannerData) => {
    activateSlide(mainBanner, bannerData, getMainBannerSlidesTemplate);
    activateBtns(mainBanner);
    activateAutoSlide(mainBanner);
}
