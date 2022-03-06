import { getCategoriesTemplate } from '../components/categorise.js';
import { getMainBannersTemplate, addMainBannersEvent } from '../components/mainBanners.js';
import { getSubCategoriesTemplate } from '../components/subCategorise.js';
import { getEventBannersTemplate } from '../components/eventBanner.js';
import { getDayTopTemplate, addDayTopTapEvent } from '../components/dayTop.js';

export const getWebFictionPageTemplate = props => {
  const webFictionPageTemplate =
    getCategoriesTemplate(props['categories']) +
    getMainBannersTemplate(props['mainBanner']) +
    getSubCategoriesTemplate(props['subCategories']) +
    getEventBannersTemplate(props['eventBanner']) +
    getDayTopTemplate(props['dayTop']);
  return webFictionPageTemplate;
};

export const addWebFictionPageEvent = props => {
  addDayTopTapEvent(props['dayTop']);
  addMainBannersEvent(props['mainBanner']);
};
