import { $, $$ } from './utility.js';
import dayTopData from './data/dayTop.js';

// const loadData = async function() {
//     let response = await fetch('./data/dayTop.json');
//     if (response.ok) {
//       let json = await response.json();
//     } else {
//     //   alert("HTTP-Error: " + response.status);
//     }
// }
// loadData();


// section__rank-area
const getGradeRowTemp = (props) => {
    return (
        `<li class="row">
            <a href="${props.link}">
                <div class="work__inner-wrap">
                    <img src="${props.imgUrl}" alt="${props.title}">
                    <div class="work__rank bg-black-bar">${props.rank || props.grade}</div>
                </div>
                <h4 class="work__title">${props.title}</h4>
                <span class="work__reader">${props.readerNum}만명</span>
            </a>
        </li>`
    );
}

const getGradeListTemp = (props) => {
    let row5 = '';
    for(let i = 0; i < 5; i++) {
        row5 += `${getGradeRowTemp(props[i])}\n`
    }
    return (
    `<ul class="row-5">
        ${row5}
    </ul>`
    );
}

let dayTopActiveTab;
const renderDayTopContent = (dayIdx) => {
    const dayArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "end"];
    const day = dayArr[dayIdx];
    const rankRowData = dayTopData['rankRow'][day];
    const rankList = getGradeListTemp(rankRowData);
    const gradeRowData = dayTopData['gradeRow'][day];
    const gradeList = getGradeListTemp(gradeRowData);
    $$('.day-top-tab__button')[dayIdx].classList.add('on');
    $('.day-top-conntent').innerHTML = `<div class="works">
        ${rankList}
        ${gradeList}
    </div>`
    dayTopActiveTab = $$('.day-top-tab__button')[dayIdx];
}

const addDayTopTabEvent = () => {
    $$('.day-top-tab__button').forEach((tab, idx) => {
        (function() {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.target;
                dayTopActiveTab.classList.remove('on');
                dayTopActiveTab = target;
                renderDayTopContent(idx);
            });
        })(idx);
    });
}

export { renderDayTopContent, addDayTopTabEvent };