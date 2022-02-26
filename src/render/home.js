import { getMainBannersTemp } from '../components/mainBanners.js';
import { getSubCategoriesTemp } from '../components/subCategorise.js';
import { getEventBannersTemp } from '../components/eventBanner.js';

const getHomePageTemp = (props, today) => {
    const homePageTemp = getMainBannersTemp(props["mainBanner"])
    + getSubCategoriesTemp(props["subCategories"])
    + getEventBannersTemp(props["eventBanner"])
    return homePageTemp;
}

export { getHomePageTemp };