import { getCategoriesTemplate } from '../components/categorise.js';
import { getMainBannersTemplate } from '../components/mainBanners.js';
import { getSubCategoriesTemplate } from '../components/subCategorise.js';

const getBookPageTemplate = (props) => {
    const bookPageTemplate = getCategoriesTemplate(props["categories"])
    + getMainBannersTemplate(props["mainBanner"])
    + getSubCategoriesTemplate(props["subCategories"]);
    return bookPageTemplate;
}

export { getBookPageTemplate };