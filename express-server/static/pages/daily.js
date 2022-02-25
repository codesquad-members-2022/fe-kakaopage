import {BannerBox} from "../components/bannerBox.js";
import {dailyHeader} from "../components/dailyHeader.js";
import {myFetch, select} from '../utils.js';
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
    const [comics, images, infographic] = await Promise.all([myFetch('comics'), myFetch('images'), myFetch('infographic')])
    BannerBox(select(target, '.BannerBox'), images, infographic);
    dailyHeader( target, 'beforeend', comics, infographic);
}
