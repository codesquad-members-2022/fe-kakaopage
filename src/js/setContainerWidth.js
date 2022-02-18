import { $ } from '../utils.js';

const setContainerWidth = () => {
  const bannerCount = $('.main-banner .banner-container').childElementCount;
  $('.main-banner .banner-container').style.width = `${720 * bannerCount}px`;
};

export { setContainerWidth };