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

function renderMain(tab) {
  switch (tab) {
    case 'home':
      renderHome(tab);
      break
    case 'daily':
      renderDaily(tab);
      break;
    case 'webtoon':
      renderWebtoon(tab);
      break;
    case 'boy':
      renderBoy(tab);
      break;
  }
}

async function renderHome(tab) {
  const containerInfo = homeContainerInfo;

  const templete = await Promise.all([
    renderMainBanner(tab), 
    renderThemeMenu(tab),
    renderPromotionBanner(tab),
    renderContainer(containerInfo.dailyTop, tab),
    renderContainer(containerInfo.romenceTop, tab),
    renderContainer(containerInfo.dailyRanking, tab),
    renderMoveApp()
  ]);

  $('.main').insertAdjacentHTML('beforeend', templete.join(''));
}

async function renderDaily(tab) {
  const templete = await Promise.all([
    renderMainBanner(tab),
    renderSelectDayDaily()
  ]);

  $('.main').insertAdjacentHTML('beforeend', templete.join(''));
}

async function renderWebtoon(tab) {
  const templete = await Promise.all([renderMainBanner(tab)]);

  $('.main').insertAdjacentHTML('beforeend', templete.join(''));
}

async function renderBoy(tab) {
  const templete = await Promise.all([
    renderMainBanner(tab), 
    renderThemeMenu(tab),
    renderPromotionBanner(tab),
  ])

  $('.main').insertAdjacentHTML('beforeend', templete.join(''));
}

export {renderMain}