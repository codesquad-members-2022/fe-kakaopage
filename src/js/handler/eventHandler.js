import {
  $,
  loadData,
  activateTab,
  changeTitle,
  removeAlarm,
  getData,
} from '../utils/util.js';
import { CL, WEBTOON_URL, URLS } from '../utils/constants.js';
import { render } from '../render/render.js';
import { initSlider, slideBanner } from '../feature/slider.js';

const $gnb = $('.gnb__list');

function addTabFeature() {
  $gnb.addEventListener('click', gnbHandler);
}

function gnbHandler(e) {
  if (e.target.matches('.gnb__list')) return;
  const target = e.target.closest('.gnb__item');
  removeAlarm(target);
  activateTab(target);
  changeTitle(target.id);
  if (target.id !== 'webtoon') {
    render.otherPage(target.id);
    return;
  }
  getData(URLS)
    .then(data => {
      render.webtoonPage(data);
      setEventHandlers();
    })
    .catch(console.log);
}

function setEventHandlers() {
  handlerComponent.snb();
  handlerComponent.mainBannerBtn();
  handlerComponent.daybar();
}

const handlerComponent = {
  snb() {
    const $snb = $('.snb__list');

    $snb.addEventListener('click', e => {
      const target = e.target.closest('.snb__item');
      if (e.target !== target) return;
      const cateName = target.dataset.category;

      loadData(WEBTOON_URL)
        .then(wt => {
          activateTab(target);
          render.contents(wt, { cateName });
          this.daybar();
          this.mainBannerBtn();
          clearInterval(this.intervalId);
        })
        .catch(console.log);
    });
  },

  intervalId: null,

  mainBannerBtn() {
    const $mainBanner = $('.main-banner');
    const $mainBannerList = $('.main-banner__list', $mainBanner);
    const bannerCount = $mainBannerList.children.length;

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

  daybar() {
    const $days = $('.day__list');
    if (!$days) return;

    $days.addEventListener('click', e => {
      const target = e.target.closest('.day__item');
      if (!target) return;

      let day = e.target.id;
      if (day === CL.WHOLE) day = '';

      loadData(WEBTOON_URL, day)
        .then(wt => {
          activateTab(target);
          render.webtoonList(wt);
        })
        .catch(console.log);
    });
  },
};

export { addTabFeature };
