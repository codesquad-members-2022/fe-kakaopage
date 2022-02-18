import { DATA_URL, $, CL } from './util.js';

const $days = $('.days');
const $webtoons = $('.webtoons');
const $webtoonsPromotion = $('.webtoons--promotion');
const $navHeader = $('.nav--header');
const $navMain = $('.nav--main');
const $mainSlider = $('.main__slider');

async function loadData(param) {
  const response = await fetch(DATA_URL);
  const json = await response.json();
  const data = await json[param];
  return data;

  // return fetch(DATA_URL)
  //   .then(response => response.json())
  //   .then(json => json.webtoon);
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
    if (!e.target.matches('.days > .day__name')) return;
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
  if (target === parentNode) return;
  [...parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
}

function removeCircle(e) {
  if (!e.target.matches('.nav--header > .nav__subject')) return;
  const circle = [...e.target.children].find(
    v => v.className === 'nav__circle'
  );
  if (!circle) return;
  e.target.removeChild(circle);
}

function filterContentsBySub(e, banner) {
  // If e.target is clock or circle, then I need to bring parent's id
  // If I should make slider(carousel), I should use filter instead of find
  const subject = e.target.classList.contains('nav__subject')
    ? e.target.id
    : e.target.parentNode.id;
  displayBanner(banner.find(v => v.subject === subject)['url']);
}

function displayBanner(url) {
  $mainSlider.innerHTML = createBannerImg(url);
}

function createBannerImg(url) {
  return `<img src=${url} class="slider__img" alt="webtoon-image"/>`;
}

function setEventListenrToNavHeader(banner) {
  $navHeader.addEventListener('click', e => {
    if (!e.target.matches('.nav--header > .nav__subject')) return;
    removeCircle(e);
    activateTab(e, $navHeader);
    filterContentsBySub(e, banner);
  });
}

$navMain.addEventListener('click', e => {
  activateTab(e, $navMain);
});

loadData('banner').then(banner => setEventListenrToNavHeader(banner));

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
