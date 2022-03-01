import {makeSelectDayHomeList} from './selectDay/selectDayList.js'
import {makeRankingList} from './rankingList.js'
import {makeEventSection} from './eventSection.js'
import {makeWebtoonList} from './webtoonList.js'
import {$} from '../utility.js'


function renderContainer(containerInfo, tab) {
  const newContainer = `
    <div class="container ${containerInfo.class}">
      ${makeContainerTitle(containerInfo.title)}
      ${makeContainerLayout(containerInfo, tab)}
    </div>
  `;

  $('.main').insertAdjacentHTML('beforeend', newContainer);
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
  let innerHTML = '';
  switch (containerInfo.layout) {
    case 'SMALL_CARD':
      if (containerInfo.class === 'daily__top') {
        innerHTML += makeSelectDayHomeList(containerInfo.items, containerInfo.data);
      }
      
      innerHTML += makeWebtoonList(containerInfo.items, containerInfo.data);
      break;
    case 'RANKING':
      innerHTML += makeRankingList(containerInfo.data, tab);
      break;
    case 'EVENT': 
      innerHTML += makeEventSection(containerInfo.class);
      break;
  }

  return innerHTML;
}

export {renderContainer}