import {dailyTopData} from './data/scrape/dailyTop.js'
import {dailyRankingData} from './data/scrape/dailyRanking.js'
import {promotionBannerData} from './data/scrape/promotionBannerData.js'
import {containerInfo} from './data/containerInfoData.js'
import {renderContainer, renderPromotionBanner, renderMoveApp} from './render.js'
import {$, $all} from './utility.js'

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      setGenreFocus(event);
    })
  });
}

function setGenreFocus (event) {
  const focused = $('.genres--focused');
  if (focused) focused.classList.remove('genres--focused');
  event.target.classList.add('genres--focused');
}

function clickDailyTopList() {
  const selectDay = $all('.day__btn');
  selectDay.forEach((item) => {
    item.addEventListener('click', (event) => {
      clickDailyTopFocus(event.target);
    })
  })
}

function clickDailyTopFocus(event) {
  const focused = $('.daily__top--focused');
  if (focused) focused.classList.remove('daily__top--focused');
  event.parentNode.classList.add('daily__top--focused');
}

function clickBannerPrevBtn() {
  const focused = $('.focused');
  const prevItem = focused.previousElementSibling;

  if (prevItem !== null) {
    prevItem.classList.toggle('none');
    prevItem.classList.toggle('focused');

    focused.classList.toggle('none');
    focused.classList.toggle('focused');
  }
}

function clickBannerNextBtn() {
  const focused = $('.focused');
  const nextItem = focused.nextElementSibling;

  if (nextItem !== null) {
    nextItem.classList.toggle('none');
    nextItem.classList.toggle('focused');

    focused.classList.toggle('none');
    focused.classList.toggle('focused');
  }
}

function clickPromotionBanner() {
  const promo = $('.promotion__banner');
  promo.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-chevron-left')) {
      clickBannerPrevBtn();
    }

    if (e.target.classList.contains('fa-chevron-right')) {
      clickBannerNextBtn();
    }
  })
}

function setPromotionBanner(focus) {
  renderPromotionBanner(focus);
  clickPromotionBanner();
}

function renderMain() {
  clickGenresList();
  setPromotionBanner('홈');

  for (let i in containerInfo) {
    renderContainer(containerInfo[i].class, containerInfo[i].title, containerInfo[i].items, containerInfo[i].layout);
  }
  clickDailyTopList();
  renderMoveApp('move-app');
}

window.addEventListener('load', renderMain);

