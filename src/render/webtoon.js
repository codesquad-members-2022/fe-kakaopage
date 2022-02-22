import { getCategoriesTemp } from '../componets/categorise.js';
import { getMainBannersTemp } from '../componets/mainBanners.js';
import { getSubCategoriesTemp } from '../componets/subCategorise.js';
import { getEventBannersTemp } from '../componets/eventBanner.js';
import { getDayTop } from '../componets/dayTop.js';

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