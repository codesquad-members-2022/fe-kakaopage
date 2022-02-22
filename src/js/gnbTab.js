import { $, activateTab, loadData, CL, TITLE, getToday } from './util.js';
import { SNB } from './components/SNB.js';
import { MainBanner } from './components/MainBanner.js';
import { DayBar } from './components/DayBar.js';
import { WebtoonList, createWebtoonItem } from './components/WebtoonList.js';
import { ThemeBox } from './components/ThemeBox.js';
import { ScrollBanner } from './components/ScrollBanner.js';
import { addTabFeatureToSNB } from './snbTab.js';

const $gnb = $('.gnb__list');
const $main = $('.main');
const today = getToday();

let data = null;
loadData('webtoon')
  .then(d => (data = d))
  .catch(console.log);

function addTabFeatureToGNB() {
  $gnb.addEventListener('click', gnbHandler);
}

function gnbHandler(e) {
  if (e.target.matches('.gnb__list')) return;
  removeAlarm(e);
  activateTab(e, $gnb);

  let target = e.target;
  if (target.tagName === 'A') target = e.target.parentNode;

  if (target.id !== 'webtoon') {
    $main.innerHTML = `<div class="mainbox">${target.id}</div>`;
    return;
  }

  renderWebtoonTabPage();
}

function renderWebtoonTabPage() {
  if ($main.childElementCount !== 1) return;
  const randomNum = Math.floor(Math.random() * data.length);
  $main.innerHTML = '';
  $main.append(SNB());
  $main.append(MainBanner([...data].splice(randomNum, 1)));
  $main.append(DayBar());
  $main.append(displayTodaysWebtoon(data));
  $main.append(displayWebtoon(data, 'promotion'));
  $main.append(ThemeBox());
  $main.append(ScrollBanner());
  displayTodaysDayBar();
  setEventHandlers();
  addTabFeatureToSNB();
}

function displayTodaysDayBar() {
  const $dayList = $('.day__list');
  [...$dayList.children].forEach(day => {
    if (day.id === today) {
      day.classList.add(CL.SELECTED);
      return;
    }
  });
}

function removeAlarm({ target }) {
  if (target.parentNode.classList.contains('gnb__item')) {
    target = target.parentNode;
  }
  target.classList.remove('alarm');
}

function setEventHandlers() {
  const $days = $('.day__list');

  $days.addEventListener('click', e => {
    if (!e.target.matches(CL.DAY_NAME)) return;
    activateTab(e, $days);
    filterWebtoonsByDay(e, data);
  });
}

function displayTodaysWebtoon(data) {
  return WebtoonList(data.filter(v => v.day.includes(today)));
}

function displayWebtoon(data, header) {
  return WebtoonList(
    data.filter(v => v[header]),
    header,
    TITLE[header]
  );
}

function filterWebtoonsByDay(e, data) {
  const day = e.target.id;
  if (day === CL.WHOLE) {
    const webtoonBox = $('.webtoon-box');
    $main.replaceChild(WebtoonList(data), webtoonBox);
    return;
  }
  const webtoonList = $('.webtoon__list');
  webtoonList.innerHTML = createWebtoonItem(
    data.filter(v => v.day.includes(day))
  );
}

export { addTabFeatureToGNB };
