import {jsonRoute, myFetch, renderGrid, select} from "../utils.js";
import {ComicItem} from "./comicsGrid.js";
import {Component} from "../Core/Component.js";
import {store} from "../Core/Store.js";

// export const homeHeader = (target, position, comics, infographic)=>{
export const HomeHeader = class extends Component{
    async initState() {
       return {day:(new Date().getDay()+6)%7}
    }

    template(){
    return`
    <div class="HomeHeader">
        <div class="ifYouWait">
            <span>요일 연재 TOP</span>
            <span>(1,624)</span>
        </div>
        <div class="More">더보기></div>
    </div>
    <ul class="weekdays">
         ${['월', '화', '수', '목', '금', '토','일', '완결'].map((day,index)=> `<li ${this.$state.day==index?"class='selected'":""} data-key=${index}>${day}</li>`).join('')}
    </ul>
    <div class="comicsGrid"></div>
    `
    }
    render(){
        this.$target.insertAdjacentHTML('afterbegin', this.template());
    }
    mounted(){
        const {comics, infographic, images} = store;
        this.select('.comicsGrid').style.paddingTop = '10px';
        const grid = this.select('.comicsGrid')
        grid.innerHTML = '';
        comics[jsonRoute(this.$state.day)].map(comic=>new ComicItem(grid))
    }
    setEvent() {
        const {comics, infographic, images} = store;
        this.addEvent( 'click', 'li', ({target:eventTarget})=>{
            this.select('target,.weekdays>.selected').classList.remove('selected');
            const li = eventTarget.closest('li');
            li.classList.add('selected');
            const grid = this.select('.comicsGrid')
            grid.innerHTML = '';
            comics[jsonRoute(this.$state.day)].map(comic=>new ComicItem(grid))
        });
    }

}