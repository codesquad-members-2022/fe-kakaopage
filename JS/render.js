// ============== renderMain 관련 데이터 ==============
import {homeContainerInfo} from './data/containerInfoData.js'
import {todayWebtoonsData} from './data/todayWebtoons.js'
import mainBannerData from './data/json/mainBannerData.json' assert { type: "json"} ;
import themeMenuData from './data/json/themeMenuData.json' assert { type: "json"} ;
import promotionBannerData from './data/json/promotionBannerData.json' assert { type: "json"} ;
// ============== renderHome 관련 모듈 ==============
import {renderContainer} from './components/container.js'
import {renderMainBanner} from './components/banner/bannerMain.js'
import {renderThemeMenu} from './components/themeMenu.js'
import {renderPromotionBanner} from './components/banner/bannerPromotion.js'
import {renderMoveApp} from './components/moveApp.js'
// ============== renderDaily 관련 모듈 ==============
import {renderSelectDayDaily} from './components/selectDay/selectDayDaily.js'

function renderMain(tab) {
  const tabInfo = {
    home: {
      func: renderHome,
      data : homeContainerInfo,
    },
    daily: {
      func: renderDaily,
      data: todayWebtoonsData,
    },
    webtoon: {
      func: renderWebtoon,
      data: null
    },
    boy: {
      func: renderBoy,
      data: null
    }
  }

  tabInfo[tab].func(tab, tabInfo[tab].data);
}

function renderHome(tab, homeInfo) {
  renderMainBanner(mainBannerData[tab]);
  renderThemeMenu(themeMenuData[tab]);
  renderPromotionBanner(promotionBannerData[tab]);

  for (let i in homeInfo) {
    renderContainer(homeInfo[i].class, homeInfo[i].title, homeInfo[i].items, homeInfo[i].layout, homeInfo[i].data, tab);
  }

  renderMoveApp();
}

function renderDaily(tab, data) {
  renderMainBanner(mainBannerData[tab]);
  renderSelectDayDaily(data);
}

function renderWebtoon(tab) {
  renderMainBanner(mainBannerData[tab]);
}

function renderBoy(tab) {
  renderMainBanner(mainBannerData[tab]);
  renderThemeMenu(themeMenuData[tab]);
  renderPromotionBanner(promotionBannerData[tab]);

}

export {renderMain}