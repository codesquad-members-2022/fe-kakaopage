// ============== render 관련 모듈 ==============
import {renderMainBanner} from './components/banner/bannerMain.js'
import {renderThemeMenu} from './components/themeMenu.js'
import {renderPromotionBanner} from './components/banner/bannerPromotion.js'
import {renderContainer} from './components/container.js'
import {renderMoveApp} from './components/moveApp.js'
import {renderSelectDayDaily} from './components/selectDay/selectDayDaily.js'
// ============== 각 탭의 컨테이너의 정보 ==============
import {homeContainerInfo} from './containerInfo/home.js'
// ============== 유틸리티 모듈 ==============
import {$} from './utility.js';

async function renderHome(tab) {
  const containerInfo = homeContainerInfo;

  return await Promise.all([
    renderMainBanner(tab), 
    renderThemeMenu(tab),
    renderPromotionBanner(tab),
    renderContainer(containerInfo.dailyTop, tab),
    renderContainer(containerInfo.romenceTop, tab),
    renderContainer(containerInfo.dailyRanking, tab),
    renderMoveApp()
  ])
  .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

async function renderDaily(tab) {
  return await Promise.all([
    renderMainBanner(tab),
    renderSelectDayDaily()
  ])
  .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

async function renderWebtoon(tab) {
  return await Promise.all([renderMainBanner(tab)])
    .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

async function renderBoy(tab) {
  return await Promise.all([
    renderMainBanner(tab), 
    renderThemeMenu(tab),
    renderPromotionBanner(tab),
  ])
  .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

export {renderHome, renderDaily, renderWebtoon, renderBoy}