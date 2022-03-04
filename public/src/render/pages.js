// ============== render 관련 모듈 ==============
import {renderMainBanner, renderPromotionBanner, renderThemeMenu, renderContainer, renderSelectDayDaily} from './components.js'
import {renderMoveApp} from '../components/moveApp.js'
// // ============== 각 탭의 컨테이너의 정보 ==============
import {homeContainerInfo} from '../containerInfo/home.js'
// ============== 유틸리티 모듈 ==============
import {$} from '../utility.js';

function renderHome(tab) {
  const containerInfo = homeContainerInfo;
  return Promise.all([
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

function renderDaily(tab) {
  return Promise.all([
    renderMainBanner(tab),
    renderSelectDayDaily()
  ])
  .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

function renderWebtoon(tab) {
  return Promise.all([renderMainBanner(tab)])
    .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

function renderBoy(tab) {
  return Promise.all([
    renderMainBanner(tab), 
    renderThemeMenu(tab),
    renderPromotionBanner(tab),
  ])
  .then(templete =>  $('.main').insertAdjacentHTML('beforeend', templete.join('')));
}

export {renderHome, renderDaily, renderWebtoon, renderBoy}