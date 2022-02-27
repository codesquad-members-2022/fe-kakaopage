import { getMainBannersTemplate } from '../components/mainBanners.js';
import { getSubCategoriesTemplate } from '../components/subCategorise.js';
import { getEventBannersTemplate } from '../components/eventBanner.js';

const getHomePageTemplate = (props, today) => {
    const homePageTemplate = getMainBannersTemplate(props["mainBanner"])
    + getSubCategoriesTemplate(props["subCategories"])
    + getEventBannersTemplate(props["eventBanner"])
    return homePageTemplate;
}

export { getHomePageTemplate };