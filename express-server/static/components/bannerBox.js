import {addEvent, randomGen, select, selectAll} from "../utils.js";
import {carouselSlider} from "./carousel.js";


export const BannerBox = (target,images, infographic )=>{

    let idx = 1;
    const template =
    `<div class="carousel">
            ${images.banner.map((image,idx)=>`
            <div class="slide">
                <img src=${image} />
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
                       
                    </div>
                </div>
            </div>`).join('')}
        </div>
         <div class="page"></div>
        <div class="control">
        <button type="button" class="prevBtn">
            <img src=${infographic.prev}>
        </button>
        <button class="nextBtn">
            <img src=${infographic.next}/>
        </button>
        </div>
              `
    target.innerHTML = template;
    carouselSlider(target);

}