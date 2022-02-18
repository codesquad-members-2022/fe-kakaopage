import {AddEvent} from "../utils.js";

export const dailyHeader =  ({clock,down}, target, position)=>{
    const template = `
      <ul class="dailyHeader">
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li class="selected">금</li>
        <li>토</li>
        <li>일</li>
        <li>완결</li>
    </ul>
      <div class="dailyCategory">
            <ul class="category">
                <li class="selected">전체</li>
                <div class="separator"></div>
                <li>웹툰</li>
                <div class="separator"></div>
                <li><img src=${clock}/>웹툰</li>
            </ul>
            <div class="total">전체(181) <img src=${down}/></div>
        </div>
    `;
    target.insertAdjacentHTML(position, template);
    const myself = document.querySelector('.dailyHeader');
    AddEvent(myself, 'click', 'li', ({target:eventTarget})=>{
        myself.querySelector('.selected').classList.remove('selected');
        eventTarget.classList.add('selected');
    })
}