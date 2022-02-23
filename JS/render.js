import {renderContainer} from './components/container.js'
import {renderMainBanner} from './components/banner/bannerMain.js'
import {renderPromotionBanner} from './components/banner/bannerPromotion.js'
import {makeSelectDayDailySection} from './components/selectDay/selectDayDaily.js'
import {makeWebtoonList} from './components/webtoonList.js'
import {renderMoveApp} from './components/moveApp.js'
import {$, $all} from './utility.js'

function renderHome(tab, layoutInfo, options, data) {
  if (options === 'firstRender') renderMainBanner(tab);

  renderPromotionBanner(tab);

  for (let i in layoutInfo) {
    renderContainer(layoutInfo[i].class, layoutInfo[i].title, layoutInfo[i].items, layoutInfo[i].layout, data);
  }

  renderMoveApp('move-app');
}

function renderDaily(data) {
  const main = $('.main');
  const newList = makeSelectDayDailySection();
  main.appendChild(newList)

  const DAILY_ITEMS = 10;
  const webtoonsList = makeWebtoonList(DAILY_ITEMS, data);
  newList.appendChild(webtoonsList);
}

export {renderHome, renderDaily}