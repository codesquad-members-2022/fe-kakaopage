import { dayRankingData } from '../../data/works/dayRankingData.js';
import { newTopData } from '../../data/works/newTopData.js';
import { makeWorkContainer } from './workContainer.js';
import { icons } from '../../data/icons.js';
import { DEFAULT_DAY } from '../../constant.js';

const dataDic = {
  'dayRanking': dayRankingData,
  'newTop': newTopData,
}

export const renderWorkSection = (layout, contents, genre) => {
  const workSection = document.createElement('section');
  workSection.insertAdjacentHTML('beforeend', getHeaderTemplate());
  if (contents === 'dayRanking') {
    workSection.insertAdjacentHTML('beforeend', getDayTabTemplate());
    setDefault(workSection.querySelector(`li[data-day='${DEFAULT_DAY}']`));
  }
  
  workSection.insertAdjacentElement('beforeend', getWorkContainerTemplate(layout, contents, genre));
  document.querySelector('.tab-contents').appendChild(workSection);
}

const getHeaderTemplate = () => {
    return  `
    <div class='section__header'>
          <div class='section__title-box'>
            <span class='section__title'>요일 연재 TOP</span>
            <span class='section__title-num'>(1,622)</span>
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
      ${weekWords.map(day => `<li class='day-tab__item center' data-day='${day.en}'>${day.ko}</li>`).join('')}
    </ul>
  `
}

const setDefault = (item) => {
  item.classList.add('day-tab__item--selected' ,'tab__item--selected');
}

export const changeContentsByDay = (dayRankSection, day) => {
  const oldContainer = dayRankSection.querySelector('.work-container');
  const currGenre = oldContainer.dataset.genre;
  const newContainer = getWorkContainerTemplate('small', 'dayRanking', currGenre, day);
  
  dayRankSection.replaceChild(newContainer, oldContainer)
}