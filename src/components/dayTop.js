import { getSectionTopTemp } from '../components/sectionTop.js';
import { getGradeListTemp } from '../components/gradeList.js';

const getDayTopContentTemp = (data, dayIdx) => {
    const rankRowData = data['rankRow'][dayIdx];
    const rankList = getGradeListTemp(rankRowData);
    const gradeRowData = data['gradeRow'][dayIdx];
    const gradeList = getGradeListTemp(gradeRowData);
    return { rankList, gradeList };
}

const getDayTop = (data, dayIdx) => {
    const dayTopContent = getDayTopContentTemp(data, dayIdx);
    const dateArr = ["월", "화", "수", "목", "금", "토", "일", "완결"];
    return (
        `<section class="section">
            ${getSectionTopTemp(data)}
            <ul class="section__day-top-tabs">
                ${dateArr.reduce((acc, cur, idx) => acc += `<li class="section__day-top-tab"><button type="button" class="day-top-tab__button" data-index="${idx}">${cur}</button></li>`, '')}
            </ul>
            <div class="works day-top-conntent">
                ${dayTopContent.rankList}
                ${dayTopContent.gradeList}
            </div>
        </section>`
    );
}

export { getDayTopContentTemp, getDayTop };