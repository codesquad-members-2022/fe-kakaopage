const promotionBannerContents = {
  홈: [
    "오늘 UP",
    "오늘 신작",
    "오리지널",
    "완결까지 정주행",
    "독립운동가 웹툰",
    "오늘 랭킹",
  ],
};

export const promotionBanner = (selectedValue) => {
  return promotionBannerContents[selectedValue].reduce(
    (acc, cur) =>
      acc + `<button class="promotion-banner__item">${cur}</button>`,
    ""
  );
};
