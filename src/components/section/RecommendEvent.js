import { ContentsHeader, BannerList } from '../index.js';
import { EventBanners } from '../../data';
import { convertStringToHTML, setContainerWidth } from '../../utils.js';
import { bannerCallback, carouselCallback, setCarousel } from '../../js';

const RecommendEvent = (type = 'carousel') => {

  const title = '추천 이벤트';

  let html = convertStringToHTML(
          `<section class="contents recommend-event">
            ${ContentsHeader(title)}
            <div class="event-banner-wrapper" data-banner="event">
              ${BannerList('event', EventBanners)}
              <p class="banner-count">
                <span class="current">1</span> / 
                <span class="total">${EventBanners.length}</span>
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
  } else {
    html.addEventListener('click', bannerCallback);
  }
  setContainerWidth(html);

  return html;
};

export default RecommendEvent;