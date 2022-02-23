import {containerInfo} from './data/containerInfoData.js'
import {todayWebtoonsData} from './data/todayWebtoons.js'
import {renderHome, renderDaily} from './render.js'
import {dailyTopData} from './data/scrape/dailyTopData.js'
import {makeWebtoonList} from './components/webtoonList.js'
import {$, $all} from './utility.js'

const setFocus = (target, className) => {
  const focused = $(`.${className}`);
  if (focused) focused.classList.remove(className);
  target.classList.add(className);
}

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      const focusedClass = 'genres--focused';
      setFocus(event.target, focusedClass);
      moveGenreNav(event.target);
    })
  });
}

const moveGenreNav = (target) => {
  switch (target.dataset.nav) {
    case 'home':
      resetMain();
      renderHome('홈', containerInfo, 'reRender', todayWebtoonsData);
      eventHome();
      break;
    case 'daily':
      resetMain();
      renderDaily(todayWebtoonsData);
      clickDailyTopList(dailyTopData);
      break;
  }
}

const resetMain = () =>{
  const main = $('.main');

  while (main.children.length > 2) {
    main.removeChild(main.lastChild);
  }
}

const clickDailyTopList = (data) => {
  const selectDay = $all('.day');
  selectDay.forEach((item) => {
    item.addEventListener('click', (event) => {
      const parentNode = event.target.parentNode;
      const focusedClass = 'day--focused';
      setFocus(parentNode, focusedClass);

      const topContainer = event.target.closest('.select__day').parentNode;
      topContainer.removeChild($('.webtoons__list'));

      const filterData = selectDailyWebtoonData(parentNode, data);
      const DAILY_ITEMS = 10; 
      const newList = makeWebtoonList(DAILY_ITEMS, filterData);
      
      topContainer.appendChild(newList);
    })
  })
}

const selectDailyWebtoonData = (parentNode, data) => {
  const select = parentNode.dataset.day;
  const filterData = (select === 'end')
    ? data
    : data.filter((el) => el.day.includes(select) && !(el.review.includes('위')));

  return filterData;
}

const makeCloneNode = () => {
  const list = $('.main__banner .banner__list');
  const items = $all('.main__banner .banner__item');
  const firstNode = items[0].cloneNode(true);
  const lastNode = items[items.length - 1].cloneNode(true);
  firstNode.classList.add('cloneFirstNode');
  lastNode.classList.add('cloneLastNode');

  list.appendChild(firstNode);
  list.insertBefore(lastNode, items[0]);

  return list
}

const eventMainBanner = () => {
  const list = makeCloneNode();
  const items = $all('.main__banner .banner__item');
  const width = $('.main__banner .banner__item').offsetWidth;

  let counter = 1;
  list.style.transform = `translate(${-width * counter}px)`;
  slideMainBanner(list, items, width, counter);
}

const slideMainBanner = (list, items, width, counter) => {
  setInterval(() => {
    if (counter >= items.length - 1) return;
    counter++;
    list.style.transform = `translate(${-width * counter}px)`;
    list.style.transition = 'transform 0.5s';

    $('.banner__count .now').innerText = items[counter].dataset.index;
  }, 3000);

  list.addEventListener('transitionend', () => {
    if (items[counter].classList.contains("cloneFirstNode"))  {
      list.style.transition = "none";
      counter = items.length - counter;
      list.style.transform = `translate(${-width * counter}px)`;
    }
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

const eventHome = () => {
  clickPromotionBanner();
  clickDailyTopList(dailyTopData);
}

const loadHome = () => {
  renderHome('홈', containerInfo, 'firstRender', todayWebtoonsData);
  eventHome();
  clickGenresList();
}

window.addEventListener('load', () => {
  loadHome();
  eventMainBanner();
});