import { DEFAULT_GENRE_INDEX } from '../constant.js';
import { getSlideBtnTemplate } from '../components/slide.js'

export const getEventBannerTemplate = (eventBannerData) => {
    const eventContent = getEventContentTemplate(eventBannerData[DEFAULT_GENRE_INDEX - 1]);
    const slideBtnTemplate = getSlideBtnTemplate();
    return `
      <div class='event-banner slides center'>
        ${eventContent}
        ${slideBtnTemplate}
      </div>
    `
}

const getEventContentTemplate = (data) => {
    return `
      <ul class='event-banner__contents slide__container'>
        <li class='event-banner__content'>
          <a href='#'>
            <div class='banner__img-wrapper'>
              <img
                class='banner__img'
                src=${data.src}
              />
            </div>
          </a>
        </li>
      </ul>
    `
} 
