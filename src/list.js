import { $, $$ } from './utility.js';

const dayTopData = await (await fetch('/src/data/dayTop.json')).json();

const getGradeRowTemp = (props) => {
    return (
        `<li class="row">
            <a href="${props.link}">
                <div class="work__inner-wrap">
                    <img src="${props.imgUrl}" alt="${props.title}">
                    <div class="work__rank bg-black-bar">${props.rank || props.grade}</div>
                </div>
                <h4 class="work__title">${props.title}</h4>
                <span class="work__reader">${props.readerNum}</span>
            </a>
        </li>`
    );
}

const getGradeListTemp = (props, length) => {
    let row5 = '';
    for(let i = 0; i < length; i++) {
        row5 += `${getGradeRowTemp(props[i])}\n`
    }
    return (
    `<ul class="row-${length}">
        ${row5}
    </ul>`
    );
}

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

const addDayTopTabEvent = () => {
    $$('.day-top-tab__button').forEach((tab, idx) => {
        (function() {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                $('.day-top-tab__button.on').classList.remove('on');
                renderDayTopContent(idx);
            });
        })(idx);
    });
}

export { renderDayTopContent, addDayTopTabEvent };