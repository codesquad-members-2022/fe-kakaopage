import { getMainBannersTemp } from '../componets/mainBanners.js';
import { getSubCategoriesTemp } from '../componets/subCategorise.js';

const getHomePage = (props) => {
    return (
        getMainBannersTemp(props["mainBanner"])
        + getSubCategoriesTemp(props["subCategories"])
    );
}

export { getHomePage };