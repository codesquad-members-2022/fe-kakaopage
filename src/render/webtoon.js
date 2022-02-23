import { getCategoriesTemp } from '../components/categorise.js';
import { getMainBannersTemp } from '../components/mainBanners.js';
import { getSubCategoriesTemp } from '../components/subCategorise.js';
import { getEventBannersTemp } from '../components/eventBanner.js';
import { getDayTop } from '../components/dayTop.js';

const getWebtoonPage = (props, today) => {
    return (
        getCategoriesTemp(props["categories"])
        + getMainBannersTemp(props["mainBanner"])
        + getSubCategoriesTemp(props["subCategories"])
        + getEventBannersTemp(props["eventBanner"])
        + getDayTop(props["dayTop"], today)
    );
}

export { getWebtoonPage };