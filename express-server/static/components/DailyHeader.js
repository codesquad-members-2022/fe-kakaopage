
import{ jsonRoute, myFetch, renderGrid} from "../utils.js";

import {ComicItem} from "./comicsGrid.js";
import {Component} from "../Core/Component";
import {store} from "../Core/Store";


// export const dailyHeader = (target, position, comics, infographic)=>{
export const DailyHeader = class extends Component{
    async initState() {
        return {day:(new Date().getDay()+6)%7 }
    }

    template (){
        const {comics, infographic, images} = store;
        return `
      <ul class="dailyHeader">
        ${["월", "화", "수", "목", "금","토","일","완결"].map((day,index)=> `<li ${this.$state.day===index?"class='selected'":""} data-key=${index}>${day}</li>`).join('')}
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
    }
    render(){
        this.$target.insertAdjacentHTML('beforeend',this.template());
    }
    mounted(){
        const {comics, infographic, images} = store;
        const grid = this.select('.comicsGrid')
        grid.innerHTML = '';
        comics[jsonRoute(this.$state.day)].map(comic=>new ComicItem(grid))
    }
    setEvent(){
        const {comics} = store;
        this.addEvent('click', 'li', ({target:eventTarget})=>{
            this.select('.dailyHeader>.selected').classList.remove('selected');
            const li = eventTarget.closest('li[data-key]');
            li.classList.add('selected');
            this.$state.day = li.dataset.key;
            const grid = this.select('.comicsGrid');
            grid.innerHTML = '';
            comics[jsonRoute(this.$state.day)].map(comic=>new ComicItem(grid))
        })
    }

}
//new 어쩌구는 return this로 객체를 생성해준다.


