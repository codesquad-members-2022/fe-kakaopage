const createPromotionBanner = (bannerImgUrls) => {
  const items = bannerImgUrls.reduce(
    (joined, url, index) =>
      joined + `<li data-index="${index}" class="promotion-banner__item"><img src="${url}"/></li>`,
    ''
  );

  return `
    <div class="promotion-banner">
      <ul class="promotion-banner__list">${items}</ul>
      <button class="promotion-banner__btn promotion-banner__btn-prev"><img src="images/icon/ic-paging-back-nor.svg" /></button>
      <button class="promotion-banner__btn promotion-banner__btn-next"><img src="images/icon/ic-paging-next-nor.svg" /></button>
    </div>
  `;
};

export { createPromotionBanner };
