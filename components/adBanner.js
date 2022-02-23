import {randomGen} from '../utils.js';

export const AdBanner = (target, position, images, infographic)=>{

        const template =  `
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
     target.insertAdjacentHTML(position, template );
    }
