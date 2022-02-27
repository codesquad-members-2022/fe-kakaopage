import { getCategoriesTemplate } from '../components/categorise.js';
import { getMainBannersTemplate } from '../components/mainBanners.js';
import { getSubCategoriesTemplate } from '../components/subCategorise.js';
import { getEventBannersTemplate } from '../components/eventBanner.js';

const getMoviePageTemplate = (props) => {
    const moviePageTemplate = getCategoriesTemplate(props["categories"])
    + getMainBannersTemplate(props["mainBanner"])
    + getSubCategoriesTemplate(props["subCategories"])
    + getEventBannersTemplate(props["eventBanner"]);
    return moviePageTemplate;
}

export { getMoviePageTemplate };