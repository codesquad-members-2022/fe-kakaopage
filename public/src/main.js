import {renderHome, renderDaily, renderWebtoon, renderBoy} from './render/pages.js';
import {makeWebtoonList} from './components/webtoonList.js';
import Slider from './slider.js';
import {$, $all, getData} from './utility.js';

let slider = null;

const setSlide = () => {
  const container = '.main__banner'
  const list = '.banner__list'
  slider.init(container, list);
}

const todayFocus = () => {
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = new Date().getDay();
  const selectDay = document.querySelectorAll('.select__day .day');
  selectDay.forEach(el => {
    if (el.dataset.day === day[today]) el.classList.add('day--focused');
  });
}

const setFocus = (target, className) => {
  const focused = $(`.${className}`);
  if (focused) focused.classList.remove(className);
  target.classList.add(className);
}

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      if($('.genres__item.genres--focused') === event.target) return false;
      const focusedClass = 'genres--focused';
      setFocus(event.target, focusedClass);
      
      slider.stopAutoSlide();
      resetMain();
      moveGenreNav(event.target);
    })
  });
}

const moveGenreNav = (target) => {
  switch (target.dataset.nav) {
    case 'home':
      renderHome(target.dataset.nav)
        .then(() => eventHomePage());
      break;
    case 'daily':
      renderDaily(target.dataset.nav)
        .then(() => eventDailyPage());
      break;
    case 'webtoon':
      renderWebtoon(target.dataset.nav)
        .then(() => setSlide());
      break;  
    case 'boy':
      renderBoy(target.dataset.nav)
        .then(() => eventBoyPage());
      break; 
  }
}

const resetMain = () =>{
  const main = $('.main');
  const GENRES_LIST = 1;
  while (main.children.length > GENRES_LIST) {
    main.removeChild(main.lastChild);
  }
}

const clickDailyTopList = () => {
  const selectDay = $all('.day');
  selectDay.forEach((item) => {
    item.addEventListener('click', (event) => {
      if ($('.day.day--focused') === event.target.parentNode) return false;
      if (!event.target.classList.contains('day__btn')) return false
      const parentNode = event.target.parentNode;
      const focusedClass = 'day--focused';
      setFocus(parentNode, focusedClass);

      const topContainer = event.target.closest('.select__day').parentNode;
      topContainer.removeChild($('.webtoons__list'));

      const DAILY_ITEMS = 10; 
      const targetDay = event.target.parentNode.dataset.day;
      
      const dailyTopRouter = 'daily-top';
      getData(dailyTopRouter)
        .then(json => json[targetDay])
        .then(data => makeWebtoonList(DAILY_ITEMS, data))
        .then(templete => topContainer.insertAdjacentHTML('beforeend', templete));
    })
  })
}

const clickBannerPrevBtn = () => {
  const focused = $('.focused');
  const prevItem = focused.previousElementSibling;

  if (prevItem !== null) {
    prevItem.classList.toggle('none');
    prevItem.classList.toggle('focused');

    focused.classList.toggle('none');
    focused.classList.toggle('focused');
  }
}

const clickBannerNextBtn = () => {
  const focused = $('.focused');
  const nextItem = focused.nextElementSibling;

  if (nextItem !== null) {
    nextItem.classList.toggle('none');
    nextItem.classList.toggle('focused');

    focused.classList.toggle('none');
    focused.classList.toggle('focused');
  }
}

const clickPromotionBanner = () => {
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

const eventHomePage = () => {
  todayFocus();
  setSlide();
  clickPromotionBanner();
  clickDailyTopList();
}

const eventDailyPage = () => {
  todayFocus();
  setSlide();
  clickDailyTopList();
}

const eventBoyPage = () => {
  setSlide(),
  clickPromotionBanner();
}

window.addEventListener('load', () => {
  renderHome('home')
    .then(() => {
      slider = new Slider();
      clickGenresList();
      eventHomePage();
    });
});