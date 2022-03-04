import { ContentsHeader, BannerList } from '../index.js';
import { store } from '../../data/store.js';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';
import { bannerCallback, carouselCallback, carouselTransitionHandler, setCarousel } from '../../js';

const RecommendEvent = (type = 'carousel') => {

  const title = '추천 이벤트';

  let html = convertStringToHTML(
          `<section class="contents recommend-event">
            ${ContentsHeader(title)}
            <div class="event-banner-wrapper" data-banner="event">
              ${BannerList('event', store.banners.event)}
              <p class="banner-count">
                <span class="current">1</span> / 
                <span class="total">${store.banners.event.length}</span>
              </p>              
              <div class="banner-btn-group">
                <button type="button" class="back">back</button>
                <button type="button" class="next">next</button>
              </div>
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

export default RecommendEvent;
