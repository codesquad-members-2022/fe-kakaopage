import {renderSelectDayHome} from './selectDay/selectDayList.js';
import {renderRankingList} from './rankingList.js';
import {makeWebtoonList} from './webtoonList.js';
import {makeEventSection} from './eventSection.js';
import {getData} from '../utility.js';

function renderContainer(containerInfo, tab) {
  return makeContainerLayout(containerInfo, tab)
  .then(containerLayout => {
    return `
      <div class="container ${containerInfo.class}">
        ${makeContainerTitle(containerInfo.title)}
        ${containerLayout}
      </div>
    `;
  })
}

function makeContainerTitle(title) {
  return `
  <div class="container__title">
    <h3>${title}</h3>
    <div class="container__title__more">
      <span>더보기</span>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
  `
}

// ==================== layout ====================
function makeContainerLayout(containerInfo, tab) {
  switch (containerInfo.layout) {
    case 'SMALL_CARD':
      return containerInfo.class === 'daily__top'
        ? renderSelectDayHome(containerInfo.items)
        : renderGenreTop(containerInfo.items);
    case 'RANKING':
      return renderRankingList(tab);
      // case 'EVENT': 
      // return makeEventSection(containerInfo.class);
      // makeEventSection는 프로미스가 아니라 문자열을 반환하기 때문에 아무일도 안일어난다.
  }
}

function renderGenreTop(items) {
  const url = 'http://localhost:3000/home-genre-top'
  return getData(url)
    .then(json => json['romanceTop'])
    .then(data => makeWebtoonList(items, data));
}

export {renderContainer}