import {makeSelectDayHomeList} from './selectDay/selectDayHome.js'
import {makeRankingList} from './rankingList.js'
import {makeEventSection} from './eventSection.js'
import {makeWebtoonList} from './webtoonList.js'
import {$, $all} from '../utility.js'

function renderContainer(selector, title, num, options, data) {
  const main = $('.main');
  const newContainer = makeContainer(selector, title);

  main.appendChild(newContainer);
  makeLayout(selector, num, options, newContainer, data)
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
function makeLayout(selector, num, options, container, data) {
  let newList = null;
  switch (options) {
    case 'cardLayout':
      if (selector === 'daily__top') {
        const newDailyList = makeSelectDayHomeList();
        container.appendChild(newDailyList);
      }
      newList = makeWebtoonList(num, data);
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

export {renderContainer}