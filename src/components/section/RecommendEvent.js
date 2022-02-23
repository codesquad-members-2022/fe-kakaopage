import { ContentsHeader, EventBannerList } from '../index.js';
import { EventBanners } from '../../data';

const RecommendEvent = () => {

  const title = '추천 이벤트';

  return `<section class="contents recommend-event">
            ${ContentsHeader(title)}
            <div class="event-banner-wrapper">
              ${EventBannerList(EventBanners)}
              <span class="banner-count">1 / 8</span>
              <div class="banner-btn-group">
                <button type="button" class="back">back</button>
                <button type="button" class="next">next</button>
              </div>
            </div>
          </section>`;
}

export default RecommendEvent;