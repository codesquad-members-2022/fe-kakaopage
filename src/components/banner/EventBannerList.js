import { EventBannerItem } from '../index.js';

const EventBannerList = (bannerList) => {
  return `<ul class="banner-container">
            ${bannerList.reduce((prev, cur) => prev += EventBannerItem(cur), '')}
          </ul>`;
}

export default EventBannerList;