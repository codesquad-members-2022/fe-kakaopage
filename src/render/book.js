import { getCategoriesTemp } from '../components/categorise.js';
import { getMainBannersTemp } from '../components/mainBanners.js';
import { getSubCategoriesTemp } from '../components/subCategorise.js';

const getBookPageTemp = (props) => {
    const bookPageTemp = getCategoriesTemp(props["categories"])
    + getMainBannersTemp(props["mainBanner"])
    + getSubCategoriesTemp(props["subCategories"]);
    return bookPageTemp;
}

export { getBookPageTemp };