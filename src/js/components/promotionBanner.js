const createPromotionBanner = (bannerImgUrls) => {
  let items = '';

  bannerImgUrls.forEach((url, index) => {
    items += `<li data-index="${index}" class="promotion-banner__item"><img src="static/thumb/${url}"/></li>`;
  });

  return `
    <div class="promotion-banner">
      <ul class="promotion-banner__list">${items}</ul>
      <button class="promotion-banner__btn promotion-banner__btn-prev"><img src="static/icon/ic-paging-back-nor.svg" /></button>
      <button class="promotion-banner__btn promotion-banner__btn-next"><img src="static/icon/ic-paging-next-nor.svg" /></button>
    </div>
  `;
};

export { createPromotionBanner };
