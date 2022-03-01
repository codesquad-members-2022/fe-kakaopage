
import {BannerBox} from "../components/BannerBox.js";

import {AdBanner} from "../components/AdBanner.js";
import {GrayCube,} from "../components/GrayCube.js";
import {ComicItem} from "../components/ComicsGrid.js";
import {HomeHeader} from "../components/HomeHeader.js";
import Component from "../Core/Component.js";


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
    render(){
        // this.$target.insertAdjacentHTML('beforeend', this.template())
        const header= this.$target.firstElementChild;
        this.$target.innerHTML = this.template();
        this.$target.insertAdjacentElement('afterbegin', header);
        this.mounted();
    }
    mounted(){
        new BannerBox(this.select(".BannerBox"), {});
        new GrayCube(this.select('.catchphrase'), {});
        new AdBanner( this.select('.catchphrase'), {});
        new HomeHeader(this.select('.freeComics'), {});
    }


}