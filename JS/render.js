import {dailyTopData} from './data/scrape/dailyTop.js'
import {dailyRankingData} from './data/scrape/dailyRanking.js'
import {mainBannerData} from './data/scrape/mainBannerData.js'
import {promotionBannerData} from './data/scrape/promotionBannerData.js'
import {$, $all} from './utility.js'

function renderContainer(selector, title, num, options) {
  const main = $('.main');
  const newContainer = makeContainer(selector, title);

  main.appendChild(newContainer);
  makeLayout(selector, num, options, newContainer)
}

function renderMoveApp(selector) {
  const main = $('.main');
  const newList = makeMoveApp(selector);
  main.appendChild(newList);

  return newList;
}

// ========== Container ==========
function makeContainer(selector, title) {
  const newContainer = document.createElement("div");
  newContainer.classList.add('container', selector);
  newContainer.innerHTML = makeContainerTitle(title);

  return newContainer;
}

function makeContainerTitle(title) {
  return `<div class="container__title">
  <h3>${title}</h3>
  <div class="container__title__more">
    <span>더보기</span>
    <i class="fas fa-chevron-right"></i>
  </div>
</div>
`
}

// ==================== layout ====================
function makeLayout(selector, num, options, container) {
  let newList = null;
  switch (options) {
    case 'cardLayout':
      if (selector === 'daily__top') {
        const newDailyList = makeSelectDayListHome();
        container.appendChild(newDailyList);
      }
      newList = makeWebtoonList(num);
      break;
    case 'ranking':
      newList = makeRankingList();
      break;
    case 'event': 
      newList = makeEventSection(selector);
      break;
  }

  return container.appendChild(newList);
}

// ========== SelectDayHome (웹툰-홈 화면의 요일탭)==========
function makeSelectDayListHome() {
  const newList = document.createElement("ul");
  newList.classList.add('select__day');
  makeSelectDayItems(newList);

  return newList;
}

function makeSelectDayItems(list) {
  const day = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const arrDaySun = 6;
  const defaultSun = 0;

  const dataSet = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end'];
  const today = new Date().getDay();

  day.forEach((el, index) => {
    const item = document.createElement('li');
    item.classList.add('day');
    item.dataset.day = `${dataSet[index]}`;
    item.dataset.dayIndex = `${index}`;
    
    item.innerHTML = `<button type="button" class="day__btn">${day[index]}</button></li>`;

    if (index === arrDaySun && today === defaultSun) item.classList.add('daily__top--focused');
    if (today === index + 1) item.classList.add('daily__top--focused');

    list.appendChild(item);
  });
}

// ========== WebtoonList ==========
function makeWebtoonList(num) {
  const newList = document.createElement("ul");
  newList.classList.add('webtoons__list');
  newList.innerHTML = makeWebtoonItems(num);

  return newList;
}

// ❗️전역변수(dailyTopData) 수정하기
function makeWebtoonItems(num) {
  let result = '';
  const newData = dailyTopData;
  for (let i = 0; i < num; i++) {
    let random = Math.floor(Math.random() * newData.length)
    result += `<li class="webtoons__item">
    <div class="item__privew">
      <div class="item__img">
        <img src=${newData[random].img_url} alt="${newData[random].img_alt}"/>
      </div>
      <div class="item__rating">
        <div class="rating-star">
          <i class="fas fa-star"></i>
          <span>${newData[random].review}</span>
        </div>
        <i class="fas fa-clock"></i>
      </div>
    </div>
    <div class="item__info">
      <h4 class="item__title">${newData[random].title}</h4>
      <i class="fas fa-user"></i>
      <span class="item__viewer">${newData[random].viewer}</span>
    </div>
  </li>
  `
  }

  return result
}

// ========== RankingList ==========
function makeRankingList() {
  const newList = document.createElement("ol");
  newList.classList.add('ranking__list');
  newList.innerHTML = makeRankingItems();

  return newList;
}

// ❗️전역변수(dailyRankingData) 수정하기
function makeRankingItems() {
  let result = '';
  const newData = dailyRankingData;
  for (let i = 0; i < newData.length; i++) {
    result += `<li class="ranking__item">
    <span class="item__ranking">${i + 1}</span>
    <a href="#" class="item__img"><img src="${newData[i].img_url}" alt="${newData[i].img_alt}"></a>
    <div class="item__info">
      <h4 class="item__title">${newData[i].title}</h4>
      <ul class="ranking__info">
        <li><i class="fas fa-user"></i></li>
        <li><span class="item__text">${newData[i].viewer}</span></li>
        <li><div class="divider"></div></li>
        <li><span class="item__text">기다무웹툰</span></li>
        <li><div class="divider"></div></li>
        <li><span class="item__text">${newData[i].author}</span></li>
      </ul>
      <p>월 연재</p>
    </div>
  </li>
  `;
  }

  return result;
}

// ========== event ==========
function makeEventSection() {
  const newList = document.createElement("div");
  newList.classList.add('event__img');
  newList.innerHTML = `<img src="https://dn-img-page.kakao.com/download/resource?kid=deu6dT/hzp2nVsO2d/FYkdB8uFGaSppYpxkP4Gck" alt="런칭 기념 이벤트">`

  return newList;
}

// ========== makeMoveApp ==========
function makeMoveApp(selector) {
  const newList = document.createElement("div");
  newList.classList.add(selector);
  newList.innerHTML = `<a href="#">
  <span><strong>코코아페이지</strong> 앱으로 보기</span>
  <i class="fas fa-chevron-right"></i>
</a>`;

  return newList;
}

// ==================== Banner ====================
// ========== banner__btns ==========
function makeBannerBtns() {
  const btnInfo = {
    prev: {
      class: 'banner__prev',
      iconClass: 'fas fa-chevron-left'
    },
    next: {
      class: 'banner__next',
      iconClass: 'fas fa-chevron-right'
    }
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add('banner__btns');

  let innerHTML = '';
  for (let i in btnInfo) {
    innerHTML += `<button type="button" class="${btnInfo[i].class}"><i class="${btnInfo[i].iconClass}"></i>`
  }

  newDiv.innerHTML = innerHTML;

  return newDiv;
}

// ========== mainBanner ==========
function renderMainBanner() {
  const main = $('.main');
  const newDiv = makeMainBannerLayout(focus);
  main.appendChild(newDiv);
}

function makeMainBannerLayout() {
  const newDiv = document.createElement('article');
  newDiv.classList.add('main__banner');
  newDiv.classList.add('banner');

  const btns = makeBannerBtns();
  const newList = makeMainBannerList(focus);
  newDiv.appendChild(btns);
  newDiv.appendChild(newList);

  return newDiv
}

function makeMainBannerList() {
  const newList = document.createElement("ul");
  newList.classList.add('banner__list');
  makeMainBannerItems(newList, focus);
  
  return newList;
}

function makeMainBannerItems(list) {
  const data = mainBannerData;
  data.forEach((el, index) => {
    const item = document.createElement('li');
    item.classList.add('banner__item');
    item.dataset.index = index + 1;
    item.innerHTML = `<a href="#"><img src="${data[index].img}" alt="${data[index].img_alt}" class="banner__img"/></a>
    <div class="banner__info">
      <h3 class="banner__title">${data[index].title}</h3>
      <div class="banner__viewer">
        <p><i class="fas fa-clock"></i> 웹툰</p>
        <div class="divider"></div>
        <p><i class="fas fa-user"></i> ${data[index].viewer}</p>
      </div>
      <div class="banner__summary">
        <span>${data[index].desc}</span>
      </div>
    </div>`

    list.appendChild(item);
  });
}

// ========== promotionBanner ==========
function renderPromotionBanner(focus) {
  const main = $('.main');
  const newDiv = makePromotionLayout(focus);
  main.appendChild(newDiv);
}

function makePromotionLayout(focus) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('promotion__banner');

  const btns = makeBannerBtns();
  const newList = makePromotionList(focus);

  newDiv.appendChild(btns);
  newDiv.appendChild(newList);

  return newDiv;
}

function makePromotionList(focus) {
  const newList = document.createElement("ul");
  newList.classList.add('promotion__list');
  makePromotionItem(newList, focus);
  return newList;
}

function makePromotionItem(list, focus) {
  const promotionData = promotionBannerData;

  promotionData.forEach((el, index) => {
    const item = document.createElement('li');

    item.classList.add('promotion__item');
    promotionData[index].genre === focus
    ? item.classList.add('focused')
    : item.classList.add('none')

    item.innerHTML = `<a href="#">
    <img src="${promotionData[index].img_url}" alt="${promotionData[index].img_alt}">
  </a>`

  list.appendChild(item);
  });
}

export {renderContainer, renderPromotionBanner, renderMoveApp, renderMainBanner}