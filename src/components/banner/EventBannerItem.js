const EventBannerItem = (idx, { title, bannerImage, link }) => {
  return `<li class="banner" data-count="${idx}">
            <a href="${link}">
              <img src="${bannerImage}" alt="${title}" />
            </a>
          </li>`;
};

export default EventBannerItem;