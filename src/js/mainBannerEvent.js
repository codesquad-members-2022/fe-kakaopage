import { $ } from '../utils.js';

const setContainerWidth = () => {
  const bannerCount = $('.main-banner .banner-container').childElementCount;
  $('.main-banner .banner-container').style.width = `${720 * bannerCount}px`;
};

const handleMainBanner = (e) => {
  const button = e.target;
  const ul = $('.main-banner .banner-container');

  // 이후 translate 값 계산하는 것으로 수정할 예정
  if (button.classList.contains('next')) {
    ul.style.transform = `translateX(${-720}px)`;
  }

  if (button.classList.contains('back')) {
    ul.style.transform = `translateX(${0}px)`;
  }
};

const checkTarget = (e) => e.target.tagName === 'BUTTON';

const mainBannerCallback = (e) => checkTarget(e) && handleMainBanner(e);

export { setContainerWidth, mainBannerCallback };