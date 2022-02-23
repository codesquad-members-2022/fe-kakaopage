import { $ } from '../utils.js';

const setContainerWidth = (...sections) => {
  sections.forEach((section) => {
    const sectionClass =
      section === 'main' ? 'main-banner' :
      section === 'sub' ? 'sub-banner' : 'recommend-event';

    const bannerCount = $(`.${sectionClass} .banner-container`).childElementCount;
    $(`.${sectionClass} .banner-container`).style.width = `${100 * bannerCount}%`;
  })
};

const handleMainBanner = (e) => {
  const button = e.target;
  const ul = $('.main-banner .banner-container');

  // 이후 translate 값 계산하는 것으로 수정할 예정
  if (button.classList.contains('next')) {
    ul.style.transform = `translateX(${-50}%)`;
  }

  if (button.classList.contains('back')) {
    ul.style.transform = `translateX(${0}%)`;
  }
};

const checkTarget = (e) => e.target.tagName === 'BUTTON';

const mainBannerCallback = (e) => checkTarget(e) && handleMainBanner(e);

export { setContainerWidth, mainBannerCallback };