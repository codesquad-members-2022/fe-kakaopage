import { getCategoriesTemp } from '../componets/categorise.js';
import { getMainBannersTemp } from '../componets/mainBanners.js';
import { getSubCategoriesTemp } from '../componets/subCategorise.js';
import { getEventBannersTemp } from '../componets/eventBanner.js';

const getMoviePage = (props) => {
    return (
        getCategoriesTemp(props["categories"])
        + getMainBannersTemp(props["mainBanner"])
        + getSubCategoriesTemp(props["subCategories"])
        + getEventBannersTemp(props["eventBanner"])
    );
}

export { getMoviePage };