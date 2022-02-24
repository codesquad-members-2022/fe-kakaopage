// ============== renderMain 관련 데이터 ==============
import {containerInfo} from './data/containerInfoData.js'
import {todayWebtoonsData} from './data/todayWebtoons.js'
import {dailyTopData} from './data/scrape/dailyTopData.js'
import mainBannerData from './data/json/mainBannerData.json' assert { type: "json"} ;
// ============== renderHome 관련 모듈 ==============
import {renderContainer} from './components/container.js'
import {renderMainBanner} from './components/banner/bannerMain.js'
import {renderPromotionBanner} from './components/banner/bannerPromotion.js'
import {renderMoveApp} from './components/moveApp.js'
// ============== renderDaily 관련 모듈 ==============
import {makeSelectDayDailySection} from './components/selectDay/selectDayDaily.js'
import {makeWebtoonList} from './components/webtoonList.js'

import {$, $all} from './utility.js'

function renderMain(tab) {
  const tabInfo = {
    home: {
      func: renderHome,
      data: todayWebtoonsData,
      layoutInfo : containerInfo,
    },
    daily: {
      func: renderDaily,
      data: dailyTopData,
    }
  }

  tabInfo[tab].func(tab, tabInfo[tab].data, tabInfo[tab].layoutInfo);
}

function renderHome(tab, data, layoutInfo) {
  renderMainBanner(mainBannerData[tab]);
  renderPromotionBanner();

  for (let i in layoutInfo) {
    renderContainer(layoutInfo[i].class, layoutInfo[i].title, layoutInfo[i].items, layoutInfo[i].layout, data);
  }

  renderMoveApp();
}

function renderDaily(tab, data) {
  renderMainBanner(mainBannerData[tab]);
  const main = $('.main');
  const newList = makeSelectDayDailySection();
  main.appendChild(newList)

  const DAILY_ITEMS = 10;
  const webtoonsList = makeWebtoonList(DAILY_ITEMS, data);
  newList.appendChild(webtoonsList);
}

export {renderMain}