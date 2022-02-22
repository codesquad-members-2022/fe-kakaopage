import { getMainBannersTemp } from '../componets/mainBanners.js';
import { getSubCategoriesTemp } from '../componets/subCategorise.js';
import { getEventBannersTemp } from '../componets/eventBanner.js';

const getHomePage = (props, today) => {
    return (
        getMainBannersTemp(props["mainBanner"])
        + getSubCategoriesTemp(props["subCategories"])
        + getEventBannersTemp(props["eventBanner"])
    );
}

export { getHomePage };