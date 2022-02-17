import { DATA_URL, $ } from './util.js';

const $days = $('.days');
const $webtoons = $('.webtoons');
const $webtoonsPromotion = $('.webtoons--promotion');
const $navHeader = $('.nav--header');

async function loadWebtoons() {
  // Better way?
  const response = await fetch(DATA_URL);
  const wtJson = await response.json();
  const webtoons = await wtJson.webtoon;
  return webtoons;

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
    activateDay(e);
    filterWebtoonsByDay(e, wt);
  });
}

function filterWebtoonsByDay(e, wt) {
  const day = e.target.id;
  day === 'whole'
    ? displayWebtoon(wt, $webtoons)
    : displayWebtoon(
        wt.filter(v => v.day === day),
        $webtoons
      );
}

function activateDay({ target }) {
  [...$days.children].forEach(day => {
    day.classList.toggle('selected-day', day === target);
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

$navHeader.addEventListener('click', removeCircle);

loadWebtoons()
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
