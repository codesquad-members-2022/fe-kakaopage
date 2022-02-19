import {AddEvent} from "../utils.js";

export const HomeHeader = (target, position)=>{
    const template = `
    <div class="HomeHeader">
        <div class="ifYouWait">
            <span>요일 연재 TOP</span>
            <span>(1,624)</span>
        </div>
        <div class="More">더보기></div>
    </div>
    <ul class="weekdays">
        <li class="day">
            <div>월</div>
        </li>
        <li class="day">
            <div>화</div>
        </li>
        <li class="day">
            <div>수</div>
        </li>
        <li class="day selected ">
            <div>목</div>
        </li>
        <li class="day">
            <div>금</div>
        </li>
        <li class="day">
            <div>토</div>
        </li>
        <li class="day">
            <div>일</div>
        </li>
        <li class="day">
            <div>완결</div>
        </li>
    </ul>`
    target.insertAdjacentHTML(position, template)
    const myself = document.querySelector('.weekdays')

    AddEvent(myself, 'click', 'li', ({target:eventTarget})=>{
        myself.querySelector('.selected').classList.remove('selected');
        const li = eventTarget.closest('li');
        li.classList.add('selected');
    });

}