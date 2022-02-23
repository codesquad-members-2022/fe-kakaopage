const ScrollBanner = () => {
  const scrollBanner = document.createElement('div');
  scrollBanner.classList.add('mainbox', 'scroll-banner');
  scrollBanner.innerHTML = `
    <button type="button" class="scroll-banner__btn btn--prev">
    <img
      src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c"
      alt="scoll banner previous button"
    />
  </button>
  <ul class="scroll-banner__list">
    <li class="scoll-banner__item">
      <img
        class="scroll-banner__img"
        src="https://dn-img-page.kakao.com/download/resource?kid=ry6vF/hzp2mCdOPV/PiNax6pBEB3DRSAjQOQgL0"
        alt="webtoon image"
      />
    </li>
  </ul>
  <button type="button" class="scroll-banner__btn btn--next">
    <img
      src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c"
      alt="scoll banner next button"
    />
  </button>
    `;
  return scrollBanner;
};

export { ScrollBanner };
