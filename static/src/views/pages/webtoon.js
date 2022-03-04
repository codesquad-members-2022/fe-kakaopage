import { getCategoriesTemplate } from '../components/categorise.js';
import { getMainBannersTemplate, addMainBannersEvent } from '../components/mainBanners.js';
import { getSubCategoriesTemplate } from '../components/subCategorise.js';
import { getEventBannersTemplate } from '../components/eventBanner.js';
import { getDayTopTemplate, addDayTopTapEvent } from '../components/dayTop.js';

export const getWebtoonPageTemplate = props => {
  const webtoonPageTemplate =
    getCategoriesTemplate(props['categories']) +
    getMainBannersTemplate(props['mainBanner']) +
    getSubCategoriesTemplate(props['subCategories']) +
    getEventBannersTemplate(props['eventBanner']) +
    getDayTopTemplate(props['dayTop']);
  return webtoonPageTemplate;
};

export const addWebtoonPageEvent = props => {
  addDayTopTapEvent(props['dayTop']);
  addMainBannersEvent(props['mainBanner']);
};
