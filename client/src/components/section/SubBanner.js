import { BannerList } from '../index.js';
import { store } from '../../data/store.js';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';
import { bannerCallback, carouselCallback, carouselTransitionHandler, setCarousel } from '../../js';

const SubBanner = (type = 'carousel') => {

  let html = convertStringToHTML(
          `<section class="contents sub-banner" data-banner="sub">
            <div class="sub-banner-wrapper">
              ${BannerList('sub', store.banners.sub)}
            </div>
            <div class="banner-btn-group">
              <button type="button" class="back">이전 배너</button>
              <button type="button" class="next">이후 배너</button>
            </div>
          </section>`);

  if (type === 'carousel') {
    html = setCarousel(html);
    html.addEventListener('click', carouselCallback);
    html.addEventListener('transitionend', carouselTransitionHandler);
  }

  else if (type === 'manual') {
    html.addEventListener('click', bannerCallback);
  }

  setContainerWidth(html);

  return html;
};

export default SubBanner;
