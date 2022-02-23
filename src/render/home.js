import { getMainBannersTemp } from '../components/mainBanners.js';
import { getSubCategoriesTemp } from '../components/subCategorise.js';
import { getEventBannersTemp } from '../components/eventBanner.js';

const getHomePage = (props, today) => {
    return (
        getMainBannersTemp(props["mainBanner"])
        + getSubCategoriesTemp(props["subCategories"])
        + getEventBannersTemp(props["eventBanner"])
    );
}

export { getHomePage };