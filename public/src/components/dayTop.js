import { getSectionTopTemplate } from './sectionTop.js';
import { getGradeListTemplate } from './gradeList.js';

const getDayTopContentTemplate = (data, dayIdx) => {
  const rankRowData = data['rankRow'][dayIdx];
  const rankList = getGradeListTemplate(rankRowData);
  const gradeRowData = data['gradeRow'][dayIdx];
  const gradeList = getGradeListTemplate(gradeRowData);
  return { rankList, gradeList };
};

const getDayTop = (data, dayIdx) => {
  const dayTopContent = getDayTopContentTemplate(data, dayIdx);
  const dateArr = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  return `<section class="section">
            ${getSectionTopTemplate(data)}
            <ul class="section__day-top-tabs">
                ${dateArr.reduce(
                  (acc, cur, idx) =>
                    (acc += `<li class="section__day-top-tab"><button type="button" class="day-top-tab__button" data-index="${idx}">${cur}</button></li>`),
                  ''
                )}
            </ul>
            <div class="works day-top-conntent">
                ${dayTopContent.rankList}
                ${dayTopContent.gradeList}
            </div>
        </section>`;
};

export { getDayTopContentTemplate, getDayTop };
