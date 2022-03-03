import { getSildeButtonTemplate } from "./sildeButton.js";

const getEventBannerTemplate = (dataEl, className) => {
    return (
        `<li class="event-banner slide ${className}">
            <a href="${dataEl.link}" class="event-banners__link">
                <div class="event-banners__img-wrap">
                    <img src="${dataEl.imgUrl}" alt="${dataEl.imgDescription}">
                </div>
            </a>
        </li>`
    );
  }
  
const getEventBannersTemplate = (data) => {
    let eventBannerList =
    getEventBannerTemplate(data[data.length - 1], 'prev-slide')
    + getEventBannerTemplate(data[0], 'current-slide')
    + getEventBannerTemplate(data[1], 'next-slide');
    return (
        `<div class="section section-event-banner">
            <div class="event-banner slider">
                <ul class="event-banners__contents slide-wrap">
                    ${eventBannerList}
                </ul>
            </div>
            ${getSildeButtonTemplate('event-banners__slide-button')}
        </div>`
);
}
  
export { getEventBannersTemplate };