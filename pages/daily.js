import {BannerBox} from "../components/BannerBox.js";
import {dailyHeader} from "../components/dailyHeader.js";

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
    BannerBox(target.querySelector('.BannerBox'));
    await dailyHeader( target, 'beforeend',);
}
