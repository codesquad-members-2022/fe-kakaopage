import {addEvent, jsonRoute, myFetch, renderGrid, select} from "../utils.js";
import {comicItem} from "./comicsGrid.js";


export const dailyHeader = (target, position, comics, infographic)=>{

    const template =  `
      <ul class="dailyHeader">
        ${["월", "화", "수", "목", "금","토","일","완결"].map((day,index)=> `<li ${(new Date().getDay()+6)%7===index?"class='selected'":""} data-key=${index}>${day}</li>`).join('')}
        </ul>
      <div class="dailyCategory">
            <ul class="category">
                <li class="selected">전체</li>
                <div class="separator"></div>
                <li>웹툰</li>
                <div class="separator"></div>
                <li><img src=${infographic.clock}/>웹툰</li>
            </ul>
            <div class="total">전체(181) <img src=${infographic.down}/></div>
        </div>
          <div class="listContentBox freeComics">
            <div class="comicsGrid"></div>
        </div>
    `;
    target.insertAdjacentHTML(position,template);
    const grid = select(target, '.comicsGrid')
    const jsonKey = select(target, '.dailyHeader>.selected').dataset.key
    renderGrid(comics, infographic, grid, jsonKey);
    addEvent(target, 'click', 'li', ({target:eventTarget})=>{
        select(target, '.dailyHeader>.selected').classList.remove('selected');
        const li = eventTarget.closest('li[data-key]');
        eventTarget.classList.add('selected');
        grid.innerHTML = '';
        renderGrid(comics, infographic, grid, li.dataset.key);
    })
}
//new 어쩌구는 return this로 객체를 생성해준다.


