
import {BannerBox} from "../components/BannerBox.js";
import {myFetch} from "../utils.js";
import {AdBanner} from "../components/AdBanner.js";
import {GrayCube} from "../components/GrayCube.js";
import {comicItem} from "../components/comicsGrid.js";
import {homeHeader} from "../components/homeHeader.js";


export const home = async(target, position)=>{
    const template = `
         <div class="listContentBox BannerBox">
        </div>
        <div class="catchphrase">
                <span>
                    짐승같은 신작보고 캐시받자!
                </span>
        </div>
        <div class="listContentBox freeComics">
            
        </div>
    `
    const header= target.firstElementChild;
    target.innerHTML = template;
    target.insertAdjacentElement('afterbegin', header);
    const bannerBox = target.querySelector('.BannerBox');
    const images = await myFetch('images');
    const infographic = await myFetch('infographic');
    BannerBox(bannerBox, images, infographic);
    GrayCube(target.querySelector('.catchphrase'), 'afterend');
    AdBanner( target.querySelector('.catchphrase'), 'afterend', images, infographic);
    await homeHeader(target.querySelector('.freeComics'), 'afterbegin');
}