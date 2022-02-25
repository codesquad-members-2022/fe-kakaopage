import { getCategoriesTemp } from '../components/categorise.js';
import { getMainBannersTemp } from '../components/mainBanners.js';
import { getSubCategoriesTemp } from '../components/subCategorise.js';
import { getEventBannersTemp } from '../components/eventBanner.js';
import { getDayTop } from '../components/dayTop.js';

const getWebtoonPageTemp = (props, today) => {
    const webtoonPageTemp =  getCategoriesTemp(props["categories"])
    + getMainBannersTemp(props["mainBanner"])
    + getSubCategoriesTemp(props["subCategories"])
    + getEventBannersTemp(props["eventBanner"])
    + getDayTop(props["dayTop"], today);
    return webtoonPageTemp;
}

export { getWebtoonPageTemp };