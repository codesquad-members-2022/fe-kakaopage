export const adBanner = (data, list) => {
  const template = `
  <div class="toon-ad-banner-1_banner">
    <img src=${data.adBanner.find((v) => v.title === list).image}>
  </div>
  <button class="toon-ad-banner-1_left">
    <img src=${data.icon.adLeftBtn}>
  </button>
  <button class="toon-ad-banner-1_right">
   <img src=${data.icon.adRightBtn}>
  </button>`;
  return template;
};
