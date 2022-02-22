import {dailyTopData} from '../data/scrape/dailyTop.js'

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

export {makeWebtoonList}