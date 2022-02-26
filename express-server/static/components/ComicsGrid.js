// export const comicItem = (comic,target, infographic) => {
import {Component} from "../Core/Component.js";

export const ComicItem = class extends Component {

    template() {
        const {comics, infographic, images} = store;
        const {rating, image, title, author, totalView, additional: {adult, rest, up}} = comics;
        return `
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
            ${adult ? `<img src=${infographic.adult}/>` : ""}
            <img src=${infographic.Person}/>
            <div>${(totalView / 10000).toFixed(1)} 만명</div>
        </div>
    </a>
`;
    }

    render() {
        this.$target.insertAdjacentHTML('afterbegin', template);
    }
}
