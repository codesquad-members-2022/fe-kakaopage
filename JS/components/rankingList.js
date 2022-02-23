import {dailyRankingData} from '../data/scrape/dailyRanking.js'

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

export {makeRankingList}