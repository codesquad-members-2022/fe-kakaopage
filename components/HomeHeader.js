import {jsonRoute, week} from "../utils.js";
import Component from "../Core/Component.js";
import {store} from "../Core/Store.js";

// export const homeHeader = (target, position, comics, infographic)=>{
export const HomeHeader = class extends Component{
    setup (){
       this.$state = {day:(new Date().getDay()+6)%7}
        console.log(jsonRoute(this.$state.day));
    }

    template(){
        const {comics, infographic} = store.state
    return`
    <div class="HomeHeader">
        <div class="ifYouWait">
            <span>요일 연재 TOP</span>
            <span>(1,624)</span>
        </div>
        <div class="More">더보기></div>
    </div>
    <ul class="weekdays">
         ${week.map((day,index)=> `<li ${this.$state.day==index?"class='selected'":""} data-key=${index}>${day}</li>`).join('')}
    </ul>
    <div class="comicsGrid">
    ${comics[jsonRoute(this.$state.day)].map(comic=>{
         const { image, title, author, totalView, additional: {adult}} = comic;
        return` <a class="wrapper">
        <div class="thumbnail">
            <img src=${image} />
            <div class="rank">
                <div>1위</div>
                <img src=${infographic.clock} />
            </div>
        </div>

        <div class="title">
            ${title}
        </div>
        <div class="infographic">
            ${adult ? `<img src=${infographic.adult}/>` : ""}
            <img src=${infographic.Person}/>
            <div>${(totalView / 10000).toFixed(1)} 만명</div>
        </div>
    </a>`}).join('')}
</div>
    `
    }


    setEvent() {
        const {comics, infographic, images} = store.state;

        this.addEvent( 'click', 'li', ({target})=>{
            this.setState({day:target.dataset.key})
        });
    }

}