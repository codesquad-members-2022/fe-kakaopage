import { getCategoriesTemplate } from '../components/categorise.js';
import { getMainBannersTemplate } from '../components/mainBanners.js';
import { getSubCategoriesTemplate } from '../components/subCategorise.js';
import { getEventBannersTemplate } from '../components/eventBanner.js';
import { getDayTop } from '../components/dayTop.js';

const getWebtoonPageTemplate = (props, today) => {
    const webtoonPageTemplate =  getCategoriesTemplate(props["categories"])
    + getMainBannersTemplate(props["mainBanner"])
    + getSubCategoriesTemplate(props["subCategories"])
    + getEventBannersTemplate(props["eventBanner"])
    + getDayTop(props["dayTop"], today);
    return webtoonPageTemplate;
}

export { getWebtoonPageTemplate };