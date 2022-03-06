import { $, $$, activateButton, removeAndInsertHTML, getToday } from '../../util/utility.js';
import { getSectionTopTemplate } from './sectionTop.js';
import { getGradeListTemplate } from './gradeList.js';

const today = getToday();

const getDayTopContentTemplate = (data, dayIdx) => {
  const rankRowData = data['rankRow'][dayIdx];
  const rankList = getGradeListTemplate(rankRowData);
  const gradeRowData = data['gradeRow'][dayIdx];
  const gradeList = getGradeListTemplate(gradeRowData);
  const dayTopContent = rankList + gradeList;
  return dayTopContent;
};

export const getDayTopTemplate = (data, dayIdx = today) => {
  const dayTopContent = getDayTopContentTemplate(data, dayIdx);
  const dateArr = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  return `<section class="section">
            ${getSectionTopTemplate(data)}
            <ul class="section__day-top-tabs">
              ${dateArr.reduce(
                (acc, cur, idx) =>
                  (acc += `<li class="section__day-top-tab">
                            <button type="button" class="day-top-tab__button" data-index="${idx}">${cur}</button>
                          </li>`),
                ''
              )}
            </ul>
            <div class="works day-top-conntent">
              ${dayTopContent}
            </div>
          </section>`;
};

const activateTodayTabButton = () => {
  $$('.day-top-tab__button')[today].classList.add('day-top-tab__button--active');
};

export const addDayTopTapEvent = dayTopData => {
  activateTodayTabButton();

  $('.section__day-top-tabs').addEventListener('click', ({ target }) => {
    const currentTabIdx = target.dataset.index;
    const newDayTopContent = getDayTopContentTemplate(dayTopData, currentTabIdx);
    removeAndInsertHTML('.day-top-conntent', 'afterbegin', newDayTopContent);
    activateButton('day-top-tab__button--active', target);
  });
};
