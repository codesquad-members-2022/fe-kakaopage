import {containerInfo} from './data/containerInfoData.js'
import {renderMain} from './render.js'
import {$, $all} from './utility.js'

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      const focusedClass = 'genres--focused';
      setFocus(event.target, focusedClass);
    })
  });
}

function setFocus(target, className) {
  const focused = $(`.${className}`);
  if (focused) focused.classList.remove(className);
  target.classList.add(className);
}

function clickDailyTopList() {
  const selectDay = $all('.day__btn');
  selectDay.forEach((item) => {
    item.addEventListener('click', (event) => {
      const focusedClass = 'daily__top--focused';
      setFocus(event.target.parentNode, focusedClass);
    })
  })
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

function eventMain() {
  renderMain('홈', containerInfo);

  clickGenresList();
  clickPromotionBanner();
  clickDailyTopList();
}

window.addEventListener('load', eventMain);

