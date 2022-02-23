const createMainBanner = (bannerItems) => {
  let items = '';

  bannerItems.forEach((item, index) => {
    items += `
      <li data-index="${index + 1}" class="main-banner__item">
        <div class="main-banner__visual"><img src="${item.path}" /></div>
        <div class="main-banner__desc">
          <p class="main-banner__title">${item.title}</p>
          <p class="main-banner__tags">
            <img
              class="main-banner__badge main-banner__badge--tag"
              src="static/icon/badge-bigthum-${item.tag}.svg"
            />
            <img
              class="main-banner__badge main-banner__badge--wait"
              src="static/icon/ico-bigthum-wait.svg"
            />
            <span class="main-banner__type">${item.type}</span>
            <span class="main-banner__tag-divider"></span>
            <img
              class="main-banner__badge main-banner__badge--person"
              src="static/icon/ico-bigthum-person.svg"
            />
            <span class="main-banner__viewer"> ${item.view}만명</span>
          </p>
        </div>
        <div class="main-banner__caption">${item.caption}</div>
      </li>
    `;
  });

  const singleItemWidth = 720;

  return `
    <div class="main-banner">
      <ul data-currentindex="1" data-totalitem="${bannerItems.length}" style="width: ${
    singleItemWidth * bannerItems.length
  }px" class="main-banner__list">
        ${items}
      </ul>
      <button class="main-banner__btn main-banner__btn-prev">
        <img data-btndirection="prev" src="static/icon/ic-banner-paging-back-nor.svg" />
      </button>
      <button class="main-banner__btn main-banner__btn-next">
        <img data-btndirection="next" src="static/icon/ic-banner-paging-next-nor.svg" />
      </button>
      <div class="main-banner__orderinfo">
        <span data-showing="1" class="main-banner__curr-order">1</span>
        /
        <span class="main-banner__total-count">${bannerItems.length}</span>
      </div>
    </div>
  `;
};

export { createMainBanner };
