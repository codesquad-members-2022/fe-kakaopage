import makeMainBanner from '../components/banner/bannerMain.js'
import makePromotionBanner from '../components/banner/bannerPromotion.js'
import makeThemeMenu from '../components/container/themeMenu.js'
import makeContainer from '../components/container/container.js'
import makeSelectDayHome from '../components/selectDay/selectDayHome.js'
import makeRankingList from '../components/container/rankingList.js'
import makeSelectDayDaily from '../components/selectDay/selectDayDaily.js'
import { makeWebtoonList } from '../components/webtoonList.js'

import {getData} from '../utility.js'

function renderMainBanner(tab) {
  const router = 'main-banner';
  return getData(router)
    .then(json => json[tab])
    .then(data => makeMainBanner(data));
}

function renderPromotionBanner(tab) {
  const router = 'promotion-banner';
  return getData(router)
    .then(json => json[tab])
    .then(data => makePromotionBanner(data));
}

function renderThemeMenu(tab) {
  const router = 'theme-Menu';
  return getData(router)
    .then(json => json[tab])
    .then(data => makeThemeMenu(data));
}

function renderSelectDayDaily() {
  const router = 'daily-top';
  return getData(router)
    .then(json => {
      const today = new Date().getDay();
      const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

      return json[day[today]];
    })
    .then(data => makeSelectDayDaily(data));
}


// =========== container 관련 ===========
function renderContainer(containerInfo, tab) {
  return renderContainerLayout(containerInfo, tab)
  .then(containerLayout => makeContainer(containerInfo, containerLayout));
}

function renderContainerLayout(containerInfo, tab) {
  switch (containerInfo.layout) {
    case 'SMALL_CARD_LAYOUT':
      return containerInfo.datasetTop === 'daily'
        ? renderSelectDayHome(containerInfo.items)
        : renderGenreTop(containerInfo.items);
    case 'RANKING_LAYOUT':
      return renderRankingList(tab);
  }
}

function renderSelectDayHome(num) {
  const router = 'daily-top';
  return getData(router)
    .then(json => {
      const today = new Date().getDay();
      const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

      return json[day[today]];
    })
    .then(data => makeSelectDayHome(num, data));
}

function renderGenreTop(items) {
  const router = 'home-genre-top'
  return getData(router)
    .then(json => json['romanceTop'])
    .then(data => makeWebtoonList(items, data));
}

function renderRankingList(tab) {
  const router = 'daily-ranking'
  return getData(router)
    .then(json => json)
    .then(data => makeRankingList(data, tab));
}

// ============================================================

export {renderMainBanner, renderPromotionBanner, renderThemeMenu, renderContainer, renderSelectDayDaily}