import { $, activateTab, CL, data } from './util.js';
import { render } from './render.js';
import { cloneBanner, initSlider, slideBanner } from './slider.js';

const $gnb = $('.gnb__list');

function addTabFeature() {
  $gnb.addEventListener('click', gnbHandler);
}

function gnbHandler(e) {
  if (e.target.matches('.gnb__list')) return;
  const target = e.target.closest('.gnb__item');
  removeAlarm(target);
  activateTab(target);
  changeTitleByGNB(target.id);
  if (target.id !== 'webtoon') {
    render.otherPage(target.id);
    return;
  }
  render.webtoonPage(data);
  setEventHandlers();
}

function changeTitleByGNB(targetId) {
  document.title = `${targetId} | kakaopage by Millie`;
}

function removeAlarm(target) {
  target.classList.remove('alarm');
}

function filterWebtoonsByDay(e, data) {
  const day = e.target.id;
  day === CL.WHOLE ? render.wholeWebtoon(data) : render.dayWebtoon(data, day);
}

const handler = {
  daybar() {
    const $days = $('.day__list');
    if (!$days) return;

    $days.addEventListener('click', e => {
      const target = e.target.closest('.day__item');
      if (!target) return;
      activateTab(target);
      filterWebtoonsByDay(e, data);
    });
  },

  SNB() {
    const $snb = $('.snb__list');

    $snb.addEventListener('click', e => {
      const target = e.target.closest('.snb__item');
      if (e.target !== target) return;
      const category = target.dataset.category;
      activateTab(target);
      render.contents(category);
      this.daybar();
      this.mainBannerBtn();
    });
  },

  intervalId: null,

  mainBannerBtn() {
    const $mainBanner = $('.main-banner');
    const $mainBannerList = $('.main-banner__list');
    const bannerCount = $mainBannerList.children.length;
    cloneBanner($mainBannerList);
    initSlider($mainBannerList, bannerCount);

    let isClicked = false;
    this.intervalId = setInterval(() => {
      if (!isClicked) {
        slideBanner($mainBannerList, 'next', bannerCount);
      }
    }, 3000);

    $mainBanner.addEventListener('click', e => {
      const target = e.target.closest('.main-banner__btn');
      if (!target) return;
      isClicked = true;
      target.classList.contains('btn--prev')
        ? slideBanner($mainBannerList, 'prev', bannerCount)
        : slideBanner($mainBannerList, 'next', bannerCount);
      setTimeout(() => (isClicked = false), 3000);
    });
  },
};

function setEventHandlers() {
  handler.daybar();
  handler.SNB();
  handler.mainBannerBtn();
}

export { addTabFeature };
