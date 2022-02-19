import {randomGen, shuffled} from "../utils.js";

export const comicItem = (thumbnails,
    {clock, Person, rating}, target) => {
    const arr = shuffled(rating,2);
    const template =  `
    <a class="wrapper">
        <div class="thumbnail">
            <img src=${randomGen(thumbnails)} />
            <div class="rank">
                <div>1위</div>
                <img src=${clock} />
            </div>
        </div>

        <div class="title">
            흑막을 버리는데 실패했다.
        </div>
        <div class="infographic">
            <img src=${arr[0]}/>
            <img src=${arr[1]}/>
            <img src=${Person}/>
            <div>29.2만명</div>
        </div>
    </a>
`;
    target.insertAdjacentHTML('afterbegin',template);
}