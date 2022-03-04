import { BannerList } from '../index.js';
import { store } from '../../data/store.js';
import { bannerCallback, carouselCallback, setCarousel, carouselTransitionHandler } from '../../js';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';

const MainBanner = (type = 'carousel') => {

  let html = convertStringToHTML(
          `<section class="contents main-banner" data-banner="main">
            ${BannerList('main', store.banners.main)}
            <p class="banner-count">
              <span class="current">1</span> / 
              <span class="total">${store.banners.main.length}</span>
            </p>
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

export default MainBanner;
