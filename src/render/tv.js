import { getCategoriesTemp } from '../components/categorise.js';
import { getMainBannersTemp } from '../components/mainBanners.js';
import { getSubCategoriesTemp } from '../components/subCategorise.js';
import { getEventBannersTemp } from '../components/eventBanner.js';

const getTVPageTemp = (props) => {
    const tvPageTemp = getCategoriesTemp(props["categories"])
    + getMainBannersTemp(props["mainBanner"])
    + getSubCategoriesTemp(props["subCategories"])
    + getEventBannersTemp(props["eventBanner"]);
    return tvPageTemp;
}

export { getTVPageTemp };