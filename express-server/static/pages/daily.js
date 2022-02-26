import {BannerBox} from "../components/bannerBox.js";
import {DailyHeader} from "../components/dailyHeader.js";
import {myFetch} from '../utils.js';
// export const daily = async (target, position)=>{
export const Daily = class extends Component{
    template(){
        return `
             <div class="listContentBox BannerBox">
        </div>
        <div class="catchphrase">
                <span>
                    짐승같은 신작보고 캐시받자!
                </span>
        </div>
    `
    }
    render(){
        const header= this.$target.firstElementChild;
        this.$target.innerHTML = this.template();
        this.$target.insertAdjacentElement('afterbegin', header);
    }

    mounted(){
        new BannerBox(this.select('.BannerBox'));
        new DailyHeader(this.$target)
    }

}
