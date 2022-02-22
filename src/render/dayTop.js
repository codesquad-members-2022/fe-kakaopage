import { $, $$ } from '/src/utility.js';
import { getGradeListTemp } from '../componets/gradeList.js';
const dayTopData = await (await fetch('/src/data/dayTop.json')).json();

const renderDayTopContent = (dayIdx) => {
    const dayArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "end"];
    const day = dayArr[dayIdx];
    const rankRowData = dayTopData['rankRow'][day];
    const rankList = getGradeListTemp(rankRowData, 5);
    const gradeRowData = dayTopData['gradeRow'][day];
    const gradeList = getGradeListTemp(gradeRowData, 5);
    $$('.day-top-tab__button')[dayIdx].classList.add('on');
    $('.day-top-conntent').innerHTML = `<div class="works">
        ${rankList}
        ${gradeList}
    </div>`
}

export { renderDayTopContent };