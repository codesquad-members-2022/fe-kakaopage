import {addEvent, jsonRoute, myFetch, renderGrid, select} from "../utils.js";
import {comicItem} from "./comicsGrid.js";

export const homeHeader = (target, position, comics, infographic)=>{
    const template = `
    <div class="HomeHeader">
        <div class="ifYouWait">
            <span>요일 연재 TOP</span>
            <span>(1,624)</span>
        </div>
        <div class="More">더보기></div>
    </div>
    <ul class="weekdays">
         ${['월', '화', '수', '목', '금', '토','일', '완결'].map((day,index)=> `<li ${(new Date().getDay()+6)%7===index?"class='selected'":""} data-key=${index}>${day}</li>`).join('')}
    </ul>
    <div class="comicsGrid"></div>
    `
    target.insertAdjacentHTML(position, template)
    select(target,'.comicsGrid').style.paddingTop = '10px';
    const grid = select(target,'.comicsGrid')
    const jsonKey = select(target,'.weekdays>.selected').dataset.key
    renderGrid(comics, infographic, grid, jsonKey);
    addEvent(target, 'click', 'li', ({target:eventTarget})=>{
        select('target,.weekdays>.selected').classList.remove('selected');
        const li = eventTarget.closest('li');
        li.classList.add('selected');
        renderGrid(comics, infographic, grid, li.dataset.key)
    });

}