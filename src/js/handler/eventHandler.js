import {
  $,
  activateTab,
  changeTitle,
  removeAlarm,
  getAllData,
} from '../utils/util.js';
import { URLS } from '../utils/constants.js';
import { render } from '../render/render.js';
import { handlerComponent } from './handlerComponent.js';

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
  getAllData(URLS)
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

export { addTabFeature };
