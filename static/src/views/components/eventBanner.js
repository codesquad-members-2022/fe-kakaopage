const getEventBannerTemplate = (dataEl, className) => {
  return `<li class="event-banner slide ${className}">
            <a href="${dataEl.link}" class="event-banners__link">
              <div class="event-banners__img-wrap">
                <img src="${dataEl.imgUrl}" alt="${dataEl.imgDescription}">
              </div>
            </a>
          </li>`;
};

const getEventBannersTemplate = data => {
  let eventBannerList =
    getEventBannerTemplate(data[data.length - 1], 'prev-slide') +
    getEventBannerTemplate(data[0], 'current-slide') +
    getEventBannerTemplate(data[1], 'next-slide');
  return `<div class="section section-event-banner">
            <div class="event-banner slider">
              <ul class="event-banners__contents slide-wrap">
                ${eventBannerList}
              </ul>
            </div>
            <div class="slide-buttons">
              <button class="slide-button slide-button--prev event-banners__slide-button" type="button"><span class="hidden-text">왼쪽으로 이동</span></button>
              <button class="slide-button slide-button--next event-banners__slide-button" type="button"><span class="hidden-text">오른쪽으로 이동</span></button>
            </div>
          </div>`;
};

export { getEventBannersTemplate };
