import { getSildeButtonTemp } from "./sildeButton.js";

const getEventBannerTemp = (dataEl, className) => {
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
  
const getEventBannersTemp = (data) => {
    let eventBannerList =
    getEventBannerTemp(data[data.length - 1], 'prev-slide')
    + getEventBannerTemp(data[0], 'current-slide')
    + getEventBannerTemp(data[1], 'next-slide');
    return (
        `<div class="section section-event-banner">
            <div class="event-banner slider">
                <ul class="event-banners__contents slide-wrap">
                    ${eventBannerList}
                </ul>
            </div>
            ${getSildeButtonTemp('event-banners__slide-button')}
        </div>`
);
}
  
export { getEventBannersTemp };