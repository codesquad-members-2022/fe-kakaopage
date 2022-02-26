
import {BannerBox} from "../components/bannerBox.js";
import {myFetch} from "../utils.js";
import {AdBanner} from "../components/adBanner.js";
import {GrayCube,} from "../components/grayCube.js";
import {ComicItem} from "../components/comicsGrid.js";
import {HomeHeader} from "../components/homeHeader.js";
import {Component} from "../Core/Component.js";


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
        const header= this.$target.firstElementChild;
        this.$target.innerHTML = this.template();
        this.$target.insertAdjacentElement('afterbegin', header);
    }
    mounted(){
        new BannerBox(this.select(".BannerBox"));
        new GrayCube(this.select('.catchphrase'), 'afterend');
        new AdBanner( this.select('.catchphrase'), 'afterend');
        new HomeHeader(this.select('.freeComics'), 'afterbegin');
    }


}