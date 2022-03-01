import {jsonRoute, renderGrid, week} from "../utils.js";

import {ComicItem} from "./ComicsGrid.js";
import Component from "../Core/Component.js";
import {store} from "../Core/Store.js";


// export const dailyHeader = (target, position, comics, infographic)=>{
export const DailyHeader = class extends Component {
    setup() {
        this.$state = {day: (new Date().getDay() + 6) % 7}
    }

    template() {
        const {comics, infographic, images} = store.state;
        return `
      <ul class="dailyHeader">
        ${week.map((day, index) => `<li ${this.$state.day == index ? "class='selected'" : ""} data-key=${index}>${day}</li>`).join('')}
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
            <div class="comicsGrid">
               ${comics[jsonRoute(this.$state.day)].map(comic => {
                const {image, title, author, totalView, additional: {adult}} = comic;
                return ` <a class="wrapper">
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
        </a>`
        }).join('')}
</div>
        </div>
    `;
    }

    render() {
        this.$target.innerHTML = this.template();
        this.select('.comicsGrid').style.paddingTop = "";
        this.mounted();
    }



    setEvent() {
        const {comics} = store.state;
        this.addEvent('click', 'li', ({target: eventTarget}) => {

            this.setState({day: eventTarget.dataset.key})
        })
    }

}
//new 어쩌구는 return this로 객체를 생성해준다.


