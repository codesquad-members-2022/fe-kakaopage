import {getData} from '../utility.js'

const url = 'http://localhost:3000/daily-ranking'

function renderRankingList(tab) {
  return getData(url)
    .then(json => json)
    .then(data => makeRankingList(data, tab));
}

function makeRankingList(data, tab) {
  return `
    <ol class="ranking__list">
      ${makeRankingItems(data, tab)}
    </ol>
  `;
}

function makeRankingItems(data, tab) {
  let result = '';
  data[tab].forEach(el => {
    result += `
    <li class="ranking__item">
      <span class="item__ranking">${el.rank}</span>
      <a href="#" class="item__img"><img src="${el.img_url}" alt="${el.img_alt}"></a>
      <div class="item__info">
        <h4 class="item__title">${el.title}</h4>
        <ul class="ranking__info">
          <li><i class="fas fa-user"></i></li>
          <li><span class="item__text">${el.viewer}</span></li>
          <li><div class="divider"></div></li>
          <li><span class="item__text">기다무웹툰</span></li>
          <li><div class="divider"></div></li>
          <li><span class="item__text">${el.author}</span></li>
        </ul>
        <p>월 연재</p>
      </div>
    </li>
    `;
  })

  return result;
}

export {renderRankingList, makeRankingList}