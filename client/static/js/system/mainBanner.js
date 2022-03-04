import { START_SLIDE_INDEX } from '../constant.js';
import { getBannerContentTemplate } from '../components/banner.js';
import { getSlidesTemplate, getSlideBtnTemplate, getpageNumTemplate, activateBtns, activateAutoSlide, activateSlide} from '../components/slide.js';

export const getMainBannerTemplate = (bannerData) => {
    const mainBannerContentsTemplate = getMainBannerContentsTemplate(bannerData);
    const slideBtnTemplate = getSlideBtnTemplate();
    const pageNumTemplate = getpageNumTemplate('main-banner', START_SLIDE_INDEX + 1, bannerData.length);
    return `
        <div class="main-banner slides" data-name="main-banner">
            ${mainBannerContentsTemplate}
            ${slideBtnTemplate}
            ${pageNumTemplate}
        </div>
    `
}

const getMainBannerContentsTemplate = (bannerData) => {
    return `
        <ul class='main-banner__contents'>
            ${getSlidesTemplate(bannerData, START_SLIDE_INDEX, getBannerContentTemplate)}
        </ul>
    `
}

export const activateMainBanner = (bannerData) => {
    const mainBanner = document.querySelector('.main-banner');
    activateSlide(mainBanner, bannerData, getBannerContentTemplate);
    activateBtns(mainBanner);
    activateAutoSlide(mainBanner);
}
