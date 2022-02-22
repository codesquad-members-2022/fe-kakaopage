import {randomGen} from "../utils/utils.js";
import Component from "./Component.js";
import {infographic} from "../utils/infographic.js";
import {images} from "../utils/images.js";

export const BannerBox = (target, )=>{
    const template =
    `<div class="carousel">
                <img src=${randomGen(images.banner)} />
                <div class="info">
                    <div class="description">
                        <span>짐승같은 남자</span>
                        <span>짐승남</span>
                    </div>
                    <div class="infographic">

                        <img src=${infographic.Up}/>
                        <img src=${infographic.clock}/>
                        <div>웹툰</div>
                        <img src=${infographic.Separator}
                             alt="Seperator"/>
                        <img src=${infographic.Person}/>
                        <div>81.1만명</div>
                        <div class="page">3 / 13</div>
                    </div>
                </div>
            </div>

            <button type="button" class="prevBtn">
                <img src=${infographic.prev}>
            </button>
            <button class="nextBtn">
                <img src=${infographic.next}/>
            </button>  `
    target.innerHTML =  template
}