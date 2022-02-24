import { dayRankingData } from '../../data/works/dayRankingData.js';
import { newTopData } from '../../data/works/newTopData.js';
import { makeWorkContainer } from './workContainer.js';
import { icons } from '../../data/icons.js';
import { DEFAULT_DAY } from '../../constant.js';

const dataDic = {
  'dayRanking': dayRankingData,
  'newTop': newTopData,
}

const sectionTitleDic = {
  'dayRanking': '요일 연재',
  'newTop': '기대신작'
}

export const renderWorkSection = (layout, contents, genre) => {
  const workSection = document.createElement('section');
  let workSectionTemplate = '';
  workSectionTemplate += getHeaderTemplate(contents)
  if (contents === 'dayRanking') workSectionTemplate += getDayTabTemplate();
  workSectionTemplate += getWorkContainerTemplate(layout, contents, genre);
  workSection.innerHTML = workSectionTemplate;
  document.querySelector('.tab-contents').appendChild(workSection);
}

const getHeaderTemplate = (contents) => {
    return  `
    <div class='section__header'>
          <div class='section__title-box'>
            <span class='section__title'>${sectionTitleDic[contents]} TOP</span>
          </div>
          <div class='section__more-btn'>
            <span>더보기</span>
            <img src=${icons.rightArrow} />
          </div>
        </div>`
}

const getWorkContainerTemplate = (layout, contents, genre, day = DEFAULT_DAY) => {
  const data = contents === 'dayRanking' ? dataDic[contents][genre][day] : dataDic[contents][genre];
  return makeWorkContainer(genre, data, layout);
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
  const newContainerTemplate = getWorkContainerTemplate('small', 'dayRanking', currGenre, day);
  dayRankSection.removeChild(oldContainer);
  dayRankSection.insertAdjacentHTML('beforeend', newContainerTemplate);
}