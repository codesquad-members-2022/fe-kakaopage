import {renderContainer} from './components/container.js'
import {renderMainBanner} from './components/banner/bannerMain.js'
import {renderPromotionBanner} from './components/banner/bannerPromotion.js'
import {makeSelectDayDailySection} from './components/selectDay/selectDayDaily.js'
import {makeWebtoonList} from './components/webtoonList.js'
import {renderMoveApp} from './components/moveApp.js'
import {$, $all} from './utility.js'

function renderHome(tab, data, options) {
  if (options === 'firstRender') renderMainBanner(tab);

  renderPromotionBanner(tab);

  for (let i in data) {
    renderContainer(data[i].class, data[i].title, data[i].items, data[i].layout);
  }

  renderMoveApp('move-app');
}

function renderDaily() {
  const main = $('.main');
  const newList = makeSelectDayDailySection();
  main.appendChild(newList)

  const DAILY_ITEMS = 10;
  const webtoonsList = makeWebtoonList(DAILY_ITEMS);
  newList.appendChild(webtoonsList);
}

export {renderHome, renderDaily}