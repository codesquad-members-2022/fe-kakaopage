
import {BannerBox} from "../components/bannerBox.js";
import {myFetch, select} from "../utils.js";
import {AdBanner} from "../components/adBanner.js";
import {GrayCube} from "../components/grayCube.js";
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
    const bannerBox = select(target,'.BannerBox');
    const images = await myFetch('images');
    const infographic = await myFetch('infographic');
    const comics = await myFetch('comics');
    BannerBox(bannerBox, images, infographic);
    GrayCube(select(target,'.catchphrase'), 'afterend');
    AdBanner( select(target,'.catchphrase'), 'afterend', images, infographic);
    homeHeader(select(target,'.freeComics'), 'afterbegin', comics,infographic);
}