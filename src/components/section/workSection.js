import { dayRankingData } from "../../data/works/dayRanking.js";
import { makeWorkContainer } from "./workContainer.js";
import { icons } from "../../data/icons.js";
import { DEFAULT_DAY } from "../../constant.js";

const dataDic = {
  "dayRanking": dayRankingData,
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
    <div class="section__header">
          <div class="section__title-box">
            <span class="section__title">요일 연재 TOP</span>
            <span class="section__title-num">(1,622)</span>
          </div>
          <div class="section__more-btn">
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
  return `
    <ul class="day-tab__container tab__container">
      <li class="day-tab__item center" data-day="mon">월</li>
      <li class="day-tab__item center" data-day="tue">화</li>
      <li class="day-tab__item center" data-day="wed">수</li>
      <li class="day-tab__item center" data-day="thr">목</li>
      <li class="day-tab__item center" data-day="fri">금</li>
      <li class="day-tab__item center" data-day="sat">토</li>
      <li class="day-tab__item center" data-day="sun">일</li>
      <li class="day-tab__item center" data-day="end">완결</li>
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