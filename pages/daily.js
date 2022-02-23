import {BannerBox} from "../components/bannerBox.js";
import {dailyHeader} from "../components/dailyHeader.js";
import {myFetch} from '../utils.js';
export const daily = async (target, position)=>{
    const template = `
             <div class="listContentBox BannerBox">
        </div>
        <div class="catchphrase">
                <span>
                    짐승같은 신작보고 캐시받자!
                </span>
        </div>
    `
    const header= target.firstElementChild;
    target.innerHTML = template;
    target.insertAdjacentElement('afterbegin', header);
    const images = await myFetch('images');
    const infographic = await myFetch('infographic');
    BannerBox(target.querySelector('.BannerBox'), images, infographic);
    await dailyHeader( target, 'beforeend', infographic);
}
