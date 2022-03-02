
import {BannerBox} from "../components/BannerBox.js";

import {AdBanner} from "../components/AdBanner.js";
import {GrayCube,} from "../components/GrayCube.js";
import {HomeHeader} from "../components/HomeHeader.js";
import Component, {InnerHTML, InsertAdjacentHTML, Processor} from "../Core/Component.js";


// export const home = async(target, position)=>{
export const Home = class extends Component{
    template(){
        return `
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
    }

    mounted(){
        new BannerBox(this.select(".BannerBox"),  new InnerHTML(), {});
        new GrayCube(this.select('.catchphrase'), new InsertAdjacentHTML('afterend'));
        new AdBanner( this.select('.catchphrase'), new InsertAdjacentHTML('afterend') );
        new HomeHeader(this.select('.freeComics'),  new class extends Processor{render(component) {
            component.$target.innerHTML = component.template();
            component.select('.comicsGrid').style.paddingTop = '10px';
        }});
    }


}