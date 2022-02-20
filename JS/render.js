import {dailyTopData} from './data/scrape/dailyTop.js'
import {dailyRankingData} from './data/scrape/dailyRanking.js'

function renderContainer(selector, title, num, options) {
  const main = document.querySelector('.main');
  const newContainer = makeContainer(selector, title);

  main.appendChild(newContainer);
  makeLayout(selector, num, options, newContainer)
}

function renderMoveApp(selector) {
  const main = document.querySelector('.main');
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
  newList.innerHTML = makeSelectDayItems();

  return newList;
}

function makeSelectDayItems() {
  const day = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const dataSet = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end']
  let items = '';
  day.forEach((el, index) => {
    if (index === 0) {
      items += `<li class="day daily__top--focused" data-day="${dataSet[index]}"><button type="button">${day[index]}</button></li>`;
    } else {
      items += `
      <li class="day" data-day="${dataSet[index]}"><button type="button">${day[index]}</button></li>
      `
    }
  })
  
  return items;
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

export {renderContainer, renderMoveApp}