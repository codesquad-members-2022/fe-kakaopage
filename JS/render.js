import {dailyTopData} from '../data/dailyTop.js'
import {dailyRankingData} from '../data/dailyRanking.js'

function renderContainer(selector, title, num, options) {
  const main = document.querySelector('.main');
  const newContainer = makeContainer(selector, title);

  main.appendChild(newContainer);

  if (options === 'cardLayout') {
    if (selector === 'daily__top') {
      const newDailyList = makeSelectDayListHome();
      newContainer.appendChild(newDailyList);
    }
    const newList = makeWebtoonList(num);
    newContainer.appendChild(newList);
  } 
  
  if (options === 'ranking') {
    const newList = makeRankingList();
    newContainer.appendChild(newList);
  }
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
// ========== SelectDayHome (웹툰-홈 화면의 요일탭)==========
function makeSelectDayListHome() {
  const newList = document.createElement("ul");
  newList.classList.add('select__day');
  newList.innerHTML = makeSelectDayItem();

  return newList;
}

function makeSelectDayItem() {
  const weekend = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const dataSet = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end']
  let items = '';
  for (let i = 0; i < weekend.length; i++) {
    if (i === 0) {
      items += `<li class="day daily__top--focused" data-day="${dataSet[i]}"><button type="button">${weekend[i]}</button></li>`;
    } else {
      items += `
      <li class="day" data-day="${dataSet[i]}"><button type="button">${weekend[i]}</button></li>
      `
    }
  }
  return items;
}

// ========== WebtoonList ==========
function makeWebtoonList(num) {
  const newList = document.createElement("ul");
  newList.classList.add('webtoons__list');
  newList.innerHTML = makeWebtoonItems(num);

  return newList;
}

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
  newList.innerHTML = makeRankingItem();

  return newList;
}

function makeRankingItem() {
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

export {renderContainer}