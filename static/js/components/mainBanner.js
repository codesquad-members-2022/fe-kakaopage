const createMainBanner = (bannerItems) => {
  const renderingListItems = [...bannerItems, ...bannerItems, ...bannerItems];
  const itemWidth = 720;
  const ulWidth = itemWidth * renderingListItems.length;
  const defaultIndex = bannerItems.length;
  const defaultTranslateX = -(defaultIndex * itemWidth);

  let items = '';
  renderingListItems.forEach((item, index) => {
    items += itemTemplete(item, index, index == defaultIndex ? 'main-banner__item--current' : '');
  });

  return ulTemplete(ulWidth, defaultTranslateX, items, bannerItems.length);
};

const itemTemplete = (item, index, className = '') => {
  return `
    <li data-index="${index}" class="main-banner__item ${className}">
      <div class="main-banner__visual"><img src="${item.path}" /></div>
      <div class="main-banner__desc">
        <p class="main-banner__title">${item.title}</p>
        <p class="main-banner__tags">
          <img class="main-banner__badge main-banner__badge--tag" src="images/icon/badge-bigthum-${item.tag}.svg"/>
          <img class="main-banner__badge main-banner__badge--wait" src="images/icon/ico-bigthum-wait.svg"/>
          <span class="main-banner__type">${item.type}</span>
          <span class="main-banner__tag-divider"></span>
          <img class="main-banner__badge main-banner__badge--person" src="images/icon/ico-bigthum-person.svg"/>
          <span class="main-banner__viewer"> ${item.view}만명</span>
        </p>
      </div>
      <div class="main-banner__caption">${item.caption}</div>
    </li>
  `;
};

const ulTemplete = (width, translateX, items, length) => {
  return `
    <div class="main-banner">
      <ul style="width:${width}px;transform: translateX(${translateX}px);" class="main-banner__list">
        ${items}
      </ul>
      <button class="main-banner__btn main-banner__btn-prev">
        <img data-direction="prev" src="images/icon/ic-banner-paging-back-nor.svg" />
      </button>
      <button class="main-banner__btn main-banner__btn-next">
        <img data-direction="next" src="images/icon/ic-banner-paging-next-nor.svg" />
      </button>
      <div class="main-banner__orderinfo">
        <span class="main-banner__curr-order">1</span>
        /
        <span class="main-banner__total-count">${length}</span>
      </div>
    </div>
  `;
};

export { createMainBanner };
