import { DATA_URL, $, CL } from './util.js';

const $days = $('.day__list');
const $webtoons = $('.webtoons');
const $webtoonsPromotion = $('.webtoons--promotion');
const $navHeader = $('.gnb__list');
const $navMain = $('.snb__list');
const $mainBanner = $('.main-banner');

async function loadData(param) {
  const response = await fetch(DATA_URL);
  const json = await response.json();
  const data = await json[param];
  return data;
}

function displayWebtoon(data, node) {
  node.innerHTML = data.map(wt => createWebtoonList(wt)).join('');
}

function createWebtoonList(wt) {
  return `
  <li class="wt">
    <img class="wt__image" src="${wt.url}" alt="webtoon-image"/>
    <div class="wt__discription">
      <p class="title">${wt.title}</p>
      <p class="summary">${wt.summary}</p>
      <p class="info">${wt.info}</p>
    </div>
  </li>
  `;
}

function filterWebtoons(wt) {
  $days.addEventListener('click', e => {
    if (!e.target.matches(CL.DAY_NAME)) return;
    activateTab(e, $days);
    filterWebtoonsByDay(e, wt);
  });
}

function filterWebtoonsByDay(e, wt) {
  const day = e.target.id;
  day === CL.WHOLE
    ? displayWebtoon(wt, $webtoons)
    : displayWebtoon(
        wt.filter(v => v.day === day),
        $webtoons
      );
}

function activateTab({ target }, parentNode) {
  // If the clock is clicked, change the target as LI
  if (target.parentNode.tagName === 'LI') target = target.parentNode;
  [...parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
}

function removeAlarm({ target }) {
  if (target.parentNode.classList.contains('gnb__item')) {
    target = target.parentNode;
  }
  target.classList.remove('alarm');
}

function filterContentsBySub(e, banner) {
  // If e.target is clock or circle, then I need to bring parent's id
  // If I should make slider(carousel), I should use filter instead of find

  const subject = e.target.classList.contains('gnb__item')
    ? e.target.id
    : e.target.parentNode.id;
  displayBanner(banner.find(v => v.subject === subject)['url']);
}

function displayBanner(url) {
  $mainBanner.innerHTML = createBannerImg(url);
}

// function createBannerImg(url) {
//   return `<img src=${url} class="banner__img" alt="webtoon-image"/>`;
// }

function setEventListenrToNavHeader(banner) {
  $navHeader.addEventListener('click', e => {
    if (e.target.matches('.gnb__list')) return;
    removeAlarm(e);
    filterContentsBySub(e, banner);
    activateTab(e, $navHeader);
  });
}

$navMain.addEventListener('click', e => {
  activateTab(e, $navMain);
});

loadData('banner').then(banner => {
  displayBanner(banner.find(b => b.subject === 'home')['url']);
  setEventListenrToNavHeader(banner);
});

loadData('webtoon')
  .then(wt => {
    displayWebtoon(
      wt.filter(v => v.day === 'mon'),
      $webtoons
    );
    displayWebtoon(
      wt.filter(v => v.promotion),
      $webtoonsPromotion
    );
    filterWebtoons(wt);
  })
  .catch(console.log);
