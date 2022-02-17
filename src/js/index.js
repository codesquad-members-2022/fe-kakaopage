import { DATA_URL, $ } from './util.js';

const $days = $('.days');
const $webtoons = $('.webtoons');

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

function displayWebtoons(wt) {
  $webtoons.innerHTML = wt.map(w => createWebtoonList(w)).join('');
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
    ? displayWebtoons(wt)
    : displayWebtoons(wt.filter(v => v.day === day));
}

function activateDay({ target }) {
  [...$days.children].forEach(day => {
    day.classList.toggle('selected-day', day === target);
  });
}

loadWebtoons()
  .then(wt => {
    displayWebtoons(wt.filter(v => v.day === 'mon'));
    filterWebtoons(wt);
  })
  .catch(console.log);
