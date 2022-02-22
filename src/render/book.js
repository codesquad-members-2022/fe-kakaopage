import { getCategoriesTemp } from '../componets/categorise.js';
import { getMainBannersTemp } from '../componets/mainBanners.js';
import { getSubCategoriesTemp } from '../componets/subCategorise.js';

const getBookPage = (props) => {
    return (
        getCategoriesTemp(props["categories"])
        + getMainBannersTemp(props["mainBanner"])
        + getSubCategoriesTemp(props["subCategories"])
    );
}

export { getBookPage };