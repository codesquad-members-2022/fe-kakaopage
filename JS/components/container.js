import {makeSelectDayHomeList} from './selectDay/selectDayHome.js'
import {makeRankingList} from './rankingList.js'
import {makeEventSection} from './eventSection.js'
import {makeWebtoonList} from './webtoonList.js'
import {$, $all} from '../utility.js'

function renderContainer(containerInfo, tab) {
  const main = $('.main');
  const newContainer = makeContainer(containerInfo.class, containerInfo.title);
  makeLayout(containerInfo, newContainer, tab);
  main.appendChild(newContainer);
}

// ========== Container ==========
function makeContainer(className, title) {
  const newContainer = document.createElement("div");
  newContainer.classList.add('container', className);
  newContainer.innerHTML = makeContainerTitle(title);

  return newContainer;
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
function makeLayout(containerInfo, container, tab) {
  let newList = null;
  switch (containerInfo.layout) {
    case 'SMALL_CARD':
      if (containerInfo.class === 'daily__top') {
        const newDailyList = makeSelectDayHomeList();
        container.appendChild(newDailyList);
      }
      newList = makeWebtoonList(containerInfo.items, containerInfo.data);
      break;
    case 'RANKING':
      newList = makeRankingList(containerInfo.data, tab);
      break;
    case 'EVENT': 
      newList = makeEventSection(containerInfo.class);
      break;
  }

  return container.appendChild(newList);
}

export {renderContainer}