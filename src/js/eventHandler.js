import { $, activateTab, CL, data } from './util.js';
import { render } from './render.js';

const $gnb = $('.gnb__list');

function addTabFeature() {
  $gnb.addEventListener('click', gnbHandler);
}

function gnbHandler(e) {
  if (e.target.matches('.gnb__list')) return;
  removeAlarm(e);
  activateTab(e, $gnb);

  let target = e.target;
  if (target.tagName === 'A') target = e.target.parentNode;

  changeTitleByGNB(target);

  if (target.id !== 'webtoon') {
    render.otherPage(target.id);
    return;
  }

  render.webtoonPage(data);
  setEventHandlers();
}

function changeTitleByGNB(target) {
  document.title = `${target.id} | kakaopage by Millie`;
}

function removeAlarm({ target }) {
  if (target.parentNode.classList.contains('gnb__item')) {
    target = target.parentNode;
  }
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
      if (!e.target.matches(CL.DAY_NAME)) return;
      activateTab(e, $days);
      filterWebtoonsByDay(e, data);
    });
  },

  SNB() {
    const $snb = $('.snb__list');

    $snb.addEventListener('click', e => {
      if (e.target.matches('.snb__list')) return;
      activateTab(e, $snb);
      const category = e.target.dataset.category;
      render.contents(category);
      this.daybar();
      this.mainBannerBtn();
    });
  },

  mainBannerBtn() {
    const $mainBanner = $('.main-banner');
    const $mainBannerList = $('.main-banner__list');
    $mainBanner.addEventListener('click', e => {
      if (!e.target.matches('.main-banner__btn-img')) return;

      if (e.target.parentNode.classList.contains('btn--prev')) {
        // ing...
        $mainBannerList.style.transform = `translateX(${0}px)`;
      } else {
        $mainBannerList.style.transform = `translateX(${-720}px)`;
      }
    });
  },
};

function setEventHandlers() {
  handler.daybar();
  handler.SNB();
  handler.mainBannerBtn();
}

export { addTabFeature };
