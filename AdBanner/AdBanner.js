import {infographic} from "../infographic.js";
import {randomGen} from "../utils.js";
import {images} from "../images.js";

export const AdBanner = ()=>`
     <div class="listContentBox AdBanner">
            <button type="button" class="prevBtn">
                <img src=${infographic.prev}>
            </button>

            <img src=${randomGen(images.ad)}/>

            <button class="nextBtn">
                <img src=${infographic.next}/>
            </button>
        </div>
`;