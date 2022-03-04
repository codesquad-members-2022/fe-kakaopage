import { getWorkContainerTemplate } from '../components/workContainer.js';
import { icons } from '../../assets/icons.js';
import { DEFAULT_DAY } from '../constant.js';

export const getWorkSectionTemplate = (layout, contents, workData) => {
  let workSectionTemplate = '';
  workSectionTemplate += getHeaderTemplate(contents);
  if (contents === 'daySeriesTop') workSectionTemplate += getDayTabTemplate();
  workSectionTemplate += getWorkContainerTemplate(layout, workData);
  return `
    <section>
      ${workSectionTemplate}
    </section>
  `
}

const sectionTitleDic = {
  'daySeriesTop': '요일 연재',
  'newTop': '기대신작',
  'dailyRanking': '일간 랭킹',
  'recommendEvent': '추천 이벤트'
}

export const getHeaderTemplate = (contents) => {
    return  `
    <div class='section__header'>
      <div class='section__title-box'>
        <span class='section__title'>${sectionTitleDic[contents]} TOP</span>
      </div>
      <div class='section__more-btn'>
        <span>더보기</span>
        <img src=${icons.moreArrow} />
      </div>
    </div>
    `
}

const getDayTabTemplate = () => {
  const weekWords = [
    { 'en': 'mon', 'ko': '월' }, 
    { 'en': 'tue', 'ko': '화' }, 
    { 'en': 'wed', 'ko': '수' }, 
    { 'en': 'thr', 'ko': '목' }, 
    { 'en': 'fri', 'ko': '금' }, 
    { 'en': 'sat', 'ko': '토' }, 
    { 'en': 'sun', 'ko': '일' }, 
    { 'en': 'end', 'ko': '완결'}
  ];
  return `
    <ul class='day-tab__container tab__container'>
      ${weekWords.map(day => `<li class='day-tab__item center${markDefault(day.en)}' data-day='${day.en}'>${day.ko}</li>`).join('')}
    </ul>
  `
}

const markDefault = (day) => {
  return day === DEFAULT_DAY ? ' day-tab__item--selected' : '';
}

export const changeContentsByDay = (dayRankSection, day) => {
  const oldContainer = dayRankSection.querySelector('.work-container');
  const currGenre = oldContainer.dataset.genre;
  const newContainerTemplate = getWorkContainerTemplate('small', 'daySeriesTop', currGenre, day);
  dayRankSection.removeChild(oldContainer);
  dayRankSection.insertAdjacentHTML('beforeend', newContainerTemplate);
}