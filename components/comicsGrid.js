import {getWebtoonData, randomGen, shuffled} from "../utils/utils.js";
import Component from "./Component.js";
import {infographic} from "../utils/infographic.js";



export const comicItem = (comic,target) => {
    const {rating,image, title, author, totalView, additional:{adult,rest,up}} = comic;
    const template =  `
    <a class="wrapper">
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
            ${adult? `<img src=${infographic.adult}/>`:""}
            <img src=${infographic.Person}/>
            <div>${(totalView/10000).toFixed(1)} 만명</div>
        </div>
    </a>
`;
    target.insertAdjacentHTML('afterbegin',template);
}
