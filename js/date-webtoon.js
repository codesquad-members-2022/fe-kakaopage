import { webtoonData } from './data/webtoon-data/data.js';
import { contents } from './html-template.js';

function getDayOfTheWeek() {
  const dayWeek = ['일', '월', '화', '수', '목', '금', '토', '전체'];
  return dayWeek;
}

function selectedList() {
  return document.querySelectorAll('.date ul li');
}

export default function init() {
  document.querySelector('.date').addEventListener('click', changeDate);

  paintTodayList();
  changeWebtoonContents();
}

function paintTodayList() {
  const dayWeek = getDayOfTheWeek();
  const todayNum = new Date().getDay();
  const additionalList = selectedList();
  additionalList.forEach((list) => {
    if (list.innerText === dayWeek[todayNum])
      return list.classList.add('border-color');
  });
}

function findTodayData(day = false) {
  const dayWeek = getDayOfTheWeek();
  const todayNum = new Date().getDay();

  return day === false ? webtoonData[dayWeek[todayNum]] : webtoonData[day];
}

function changeWebtoonContents(day = false) {
  let template = '';
  let webtoonData = day === false ? findTodayData() : findTodayData(day);

  for (let obj of webtoonData) {
    if (day === false) obj.status = 'UP';
    template += contents.makeWebtoonInfo(obj);
  }

  document.querySelector('.dayWeekWebtoon').innerHTML = template;
}

function removeClass() {
  const deletedList = selectedList();

  deletedList.forEach((list) => {
    if (list.classList.value === 'border-color') {
      list.classList.remove('border-color');
    }
  });
}

function changeDate(e) {
  if (!e.target.closest('li')) return false;
  removeClass();
  e.target.closest('li').classList.add('border-color');

  changeWebtoonContents(e.target.innerText);
}
