import {AddEvent, jsonRoute, renderGrid} from "../utils.js";
import {comicItem} from "./comicsGrid.js";

export const homeHeader = async (target, position)=>{
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
    target.querySelector('.comicsGrid').style.paddingTop = '10px';
    const grid = target.querySelector('.comicsGrid')
    const key = target.querySelector('.weekdays>.selected').dataset.key
    await renderGrid(grid, key);
    AddEvent(target, 'click', 'li', async ({target:eventTarget})=>{
        target.querySelector('.weekdays>.selected').classList.remove('selected');
        const li = eventTarget.closest('li');
        li.classList.add('selected');
        await renderGrid(grid, li.dataset.key)
    });

}