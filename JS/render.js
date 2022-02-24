// ============== renderMain 관련 데이터 ==============
import {containerInfo} from './data/containerInfoData.js'
import {todayWebtoonsData} from './data/todayWebtoons.js'
import mainBannerData from './data/json/mainBannerData.json' assert { type: "json"} ;
// ============== renderHome 관련 모듈 ==============
import {renderContainer} from './components/container.js'
import {renderMainBanner} from './components/banner/bannerMain.js'
import {renderPromotionBanner} from './components/banner/bannerPromotion.js'
import {renderMoveApp} from './components/moveApp.js'
// ============== renderDaily 관련 모듈 ==============
import {renderSelectDayDaily} from './components/selectDay/selectDayDaily.js'

function renderMain(tab) {
  const tabInfo = {
    home: {
      func: renderHome,
      data: todayWebtoonsData,
      layoutInfo : containerInfo,
    },
    daily: {
      func: renderDaily,
      data: todayWebtoonsData,
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
  renderSelectDayDaily(data);
}

export {renderMain}