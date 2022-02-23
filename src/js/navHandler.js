import { renderer } from './renderer.js';
import { loader } from './loader.js';
import {
  DATA_WEBTOON,
  DATA_WEBNOVEL,
  DATA_MOVIE,
  DATA_BROADCAST,
  DATA_BOOK,
} from '../data/data.js';

const addHandlerOnNav = (nav) => {
  const navEl = document.querySelector(`.${nav}`);
  navEl.addEventListener('click', handleNav);
};

const handleNav = (event) => {
  const navtype = event.target.parentNode.dataset.navtype;
  const category = event.target.dataset.category;

  if (!category) return;

  if (isAlreadyClicked(event.target)) {
    window.scrollTo(0, 0);
    return;
  }

  if (navtype === 'gnb') loadContentFromGnb(category);
  if (navtype === 'snb') loadContentFromSnb(category);
};

const isAlreadyClicked = (eventTarget) => eventTarget.className.includes('--active');

const updateDocumentTitle = (title) => (document.title = `${title} | 카카오페이지`);

const updateNavStyle = (navtype, category) => {
  const classActive = `${navtype}__item--active`;
  const currentTab = document.querySelector(`.${classActive}`);
  const clickedTab = document.querySelector(`.${navtype}__item[data-category="${category}"]`);

  if (currentTab) currentTab.classList.remove(classActive);
  clickedTab.classList.add(classActive);
};

const loadContentFromGnb = (category) => {
  const mainEl = document.querySelector('.main');
  mainEl.innerHTML = '';

  updateDocumentTitle(category);
  updateNavStyle('gnb', category);

  if (category === '홈') {
    mainEl.innerHTML = `<p style="text-align:center;padding:100px 0;">홈 탭은 준비 중입니다.</p>`;
    return;
  }

  loadContent(category, '0');
  // 0은 서브카테고리의 '홈'이다. 예) 웹툰탭의 홈, 웹소설탭의 홈
};

const loadContent = (globalCategory, subCategory) => {
  const DATA = getData(globalCategory);

  renderer.snb(DATA.category);
  renderer.categoryContentWrap();

  addHandlerOnNav('snb');
  loadContentFromSnb(subCategory);
};

const getData = (globalCategory) => {
  if (globalCategory === '웹툰') return DATA_WEBTOON;
  if (globalCategory === '웹소설') return DATA_WEBNOVEL;
  if (globalCategory === '영화') return DATA_MOVIE;
  if (globalCategory === '방송') return DATA_BROADCAST;
  if (globalCategory === '책') return DATA_BOOK;
};

const loadContentFromSnb = (subCategory) => {
  const categoryContentEl = document.querySelector('.category-content');
  categoryContentEl.innerHTML = '';

  updateNavStyle('snb', subCategory);

  const gnbLabel = document.querySelector('.gnb__item--active').dataset.category;
  if (gnbLabel === '웹툰') loadWebtoon(subCategory);
  if (gnbLabel === '웹소설') loadWebnovel(subCategory);
  if (gnbLabel === '영화') loadMovie(subCategory);
  if (gnbLabel === '방송') loadBroadcast(subCategory);
  if (gnbLabel === '책') loadBook(subCategory);
};

const loadWebtoon = (subCategory) => {
  const DATA = DATA_WEBTOON[subCategory];
  updateDocumentTitle(`${DATA_WEBTOON.category[subCategory]} - 웹툰`);

  if (subCategory === '0') loader.webtoonHome(DATA);
  if (subCategory === '1') loader.webtoonWeeky(DATA);
  if (subCategory === '2') loader.webtoonBoy(DATA);
  if (subCategory === '3') loader.webtoonDrama(DATA);
  if (subCategory === '4') loader.webtoonRomance(DATA);
  if (subCategory === '5') loader.webtoonRomanceFantasy(DATA);
  if (subCategory === '6') loader.webtoonAction(DATA);
  if (subCategory === '7') loader.webtoonBl(DATA);
};

const loadWebnovel = (subCategory) => {
  const DATA = DATA_WEBNOVEL[subCategory];
  updateDocumentTitle(`${DATA_WEBNOVEL.category[subCategory]} - 웹소설`);

  if (subCategory === '0') loader.webnovelHome(DATA);
  if (subCategory === '1') loader.webnovelWeeky(DATA);
  if (subCategory === '2') loader.webnovelFantasy(DATA);
  if (subCategory === '3') loader.webnovelRomance(DATA);
  if (subCategory === '4') loader.webnovelRomanceFantasy(DATA);
  if (subCategory === '5') loader.webnovelWuxia(DATA);
  if (subCategory === '6') loader.webnovelFantasyDrama(DATA);
  if (subCategory === '7') loader.webnovelBL(DATA);
};

const loadMovie = (subCategory) => {
  const DATA = DATA_MOVIE[subCategory];
  updateDocumentTitle(`${DATA_MOVIE.category[subCategory]} - 영화`);

  if (subCategory === '0') loader.movieHome(DATA);
  if (subCategory === '1') loader.movieRanking(DATA);
  if (subCategory === '2') loader.movieAction(DATA);
  if (subCategory === '3') loader.movieAnimation(DATA);
  if (subCategory === '4') loader.movieAll(DATA);
};

const loadBroadcast = (subCategory) => {
  const DATA = DATA_BROADCAST[subCategory];
  updateDocumentTitle(`${DATA_BROADCAST.category[subCategory]} - 방송`);

  if (subCategory === '0') loader.broadcastHome(DATA);
  if (subCategory === '1') loader.broadcastVarietyshow(DATA);
  if (subCategory === '2') loader.broadcastDrama(DATA);
  if (subCategory === '3') loader.broadcastAnimation(DATA);
  if (subCategory === '4') loader.broadcastForeign(DATA);
  if (subCategory === '5') loader.broadcastAll(DATA);
};

const loadBook = (subCategory) => {
  const DATA = DATA_BOOK[subCategory];
  updateDocumentTitle(`${DATA_BOOK.category[subCategory]} - 책`);

  if (subCategory === '0') loader.bookHome(DATA);
  if (subCategory === '1') loader.bookSeries(DATA);
  if (subCategory === '2') loader.bookBestseller(DATA);
  if (subCategory === '3') loader.bookRanking(DATA);
  if (subCategory === '4') loader.bookThriller(DATA);
  if (subCategory === '6') loader.bookSelfimprovement(DATA);
};

export { addHandlerOnNav, loadContentFromGnb };
