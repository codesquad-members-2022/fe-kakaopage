import { renderPage, renderPageNav } from './render.js';
import { navCallback } from './js';
import DataApi from './js/api';
import { store, setBanners, setCategories, setNavItems, setWebtoons } from './data/store.js';
import { setSlideTotal } from './js/event/bannerEvent.js';

const init = () => {
  Promise.all([
    DataApi.getWebtoon(setWebtoons),
    DataApi.getNavItem(setNavItems),
    DataApi.getBanner(setBanners),
    DataApi.getCategory(setCategories),
  ]).then(() => setSlideTotal({
    main: store.banners.main.length,
    sub: store.banners.sub.length,
    event: store.banners.event.length,
  })).then(() => {
    renderPageNav();
    renderPage();
    document.body.addEventListener('click', navCallback);
  })
};

init();
