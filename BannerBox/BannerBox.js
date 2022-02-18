import {randomGen} from "../utils.js";

export const BannerBox = (target, position, images, {clock,
    Up,
    Person,
    Separator,
    rating,
    prev,
    next,
    down,})=>{
    const template =  `
         <div class="carousel">
                <img src=${randomGen(images.banner)} />
                <div class="info">
                    <div class="description">
                        <span>짐승같은 남자</span>
                        <span>짐승남</span>
                    </div>
                    <div class="infographic">

                        <img src=${Up}/>
                        <img src=${clock}/>
                        <div>웹툰</div>
                        <img src=${Separator}
                             alt="Seperator"/>
                        <img src=${Person}/>
                        <div>81.1만명</div>
                        <div class="page">3 / 13</div>
                    </div>
                </div>
            </div>

            <button type="button" class="prevBtn">
                <img src=${prev}>
            </button>
            <button class="nextBtn">
                <img src=${next}/>
            </button>
    `
    target.insertAdjacentHTML(position, template)
}