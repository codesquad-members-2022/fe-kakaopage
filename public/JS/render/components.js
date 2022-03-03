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
  const url = 'http://localhost:3000/main-banner';
  return getData(url)
    .then(json => json[tab])
    .then(data => makeMainBanner(data));
}

function renderPromotionBanner(tab) {
  const url = 'http://localhost:3000/promotion-banner';
  return getData(url)
    .then(json => json[tab])
    .then(data => makePromotionBanner(data));
}

function renderThemeMenu(tab) {
  const url = 'http://localhost:3000/theme-Menu';
  return getData(url)
    .then(json => json[tab])
    .then(data => makeThemeMenu(data));
}

function renderSelectDayDaily() {
  const url = 'http://localhost:3000/daily-top';
  return getData(url)
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
  .then(containerLayout => makeContainer(containerInfo, containerLayout))
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
  const url = 'http://localhost:3000/daily-top';
  return getData(url)
    .then(json => {
      const today = new Date().getDay();
      const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

      return json[day[today]];
    })
    .then(data => makeSelectDayHome(num, data));
}

function renderGenreTop(items) {
  const url = 'http://localhost:3000/home-genre-top'
  return getData(url)
    .then(json => json['romanceTop'])
    .then(data => makeWebtoonList(items, data));
}

function renderRankingList(tab) {
  const url = 'http://localhost:3000/daily-ranking'
  return getData(url)
    .then(json => json)
    .then(data => makeRankingList(data, tab));
}

// ============================================================

export {renderMainBanner, renderPromotionBanner, renderThemeMenu, renderContainer, renderSelectDayDaily}