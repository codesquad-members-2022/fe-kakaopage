import {containerInfo} from './data/containerInfoData.js'
import {renderHome, renderDaily} from './render.js'
import {$, $all} from './utility.js'

function setFocus(target, className) {
  const focused = $(`.${className}`);
  if (focused) focused.classList.remove(className);
  target.classList.add(className);
}

function clickGenresList() {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      const focusedClass = 'genres--focused';
      setFocus(event.target, focusedClass);
      moveGenreNav(event.target)
    })
  });
}

function clickDailyTopList() {
  const selectDay = $all('.day__btn');
  selectDay.forEach((item) => {
    item.addEventListener('click', (event) => {
      const focusedClass = 'day--focused';
      setFocus(event.target.parentNode, focusedClass);
    })
  })
}

function moveGenreNav(target) {
  switch (target.dataset.nav) {
    case 'home':
      resetMain();
      renderHome('홈', containerInfo, 'reRender');
      eventHome();
      break;
    case 'daily':
      resetMain();
      renderDaily();
      clickDailyTopList();
      break;
  }
}

function resetMain() {
  const main = $('.main');
  
  while (main.children.length > 2) {
    main.removeChild(main.lastChild);
  }
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

function eventHome() {
  clickGenresList();
  clickPromotionBanner();
  clickDailyTopList();
}

function loadHome() {
  renderHome('홈', containerInfo, 'firstRender');
  eventHome();
}

window.addEventListener('load', loadHome);

