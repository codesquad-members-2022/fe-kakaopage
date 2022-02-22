import { getSectionTop } from '../componets/sectionTop.js';
import { getGradeListTemp } from '../componets/gradeList.js';

const getDayTop = (data, dayIdx) => {
    const rankRowData = data['rankRow'][dayIdx];
    const rankList = getGradeListTemp(rankRowData);
    const gradeRowData = data['gradeRow'][dayIdx];
    const gradeList = getGradeListTemp(gradeRowData);
    return (
        `<section class="section">
            ${getSectionTop(data)}
            <ul class="section__day-top-tabs">
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">월</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">화</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">수</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">목</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">금</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">토</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">일</button></li>
                <li class="section__day-top-tab"><button type="button" class="day-top-tab__button">완결</button></li>
            </ul>
            <div class="works day-top-conntent">
                ${rankList}
                ${gradeList}
            </div>
        </section>`
    );
}

export { getDayTop };