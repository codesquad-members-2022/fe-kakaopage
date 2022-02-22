export { getSildeButton } from "./sildeButton.js";

const getEventBannerTemp = (dataEl) => {
    return (
        `<li class="event-banner event-banner1">
            <a href="${dataEl.link}" class="event-banners__link">
                <div class="event-banners__img-wrap">
                    <img src="${dataEl.imgUrl}" alt="${dataEl.imgDescription}">
                </div>
            </a>
        </li>`
    );
  }
  
  const getEventBannersTemp = (data, length) => {
    let eventBannerList = '';
    for (let i = 0; i < length; i++) {
        eventBannerList += `${getEventBannerTemp(data[i])}\n`
    }
    return (
        `<div class="section section-event-banner">
            <div class="event-banner slider">
                <ul class="event-banners__contents slide-wrap">
                    ${eventBannerList}
                </ul>
            </div>
            ${getSildeButton()}
        </div>`
    );
  }
  
  export { getEventBannersTemp };