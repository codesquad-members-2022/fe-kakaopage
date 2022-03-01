import {BannerBox} from "../components/BannerBox.js";
import {DailyHeader} from "../components/DailyHeader.js";
import Component, {InnerHTML, Processor} from "../Core/Component.js";

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
        <div></div>
    `
    }

    mounted(){
        new BannerBox(this.select('.BannerBox'),  new InnerHTML(), {});
        new DailyHeader(this.$target.lastElementChild, new class extends Processor{
            render(component) {
                component.$target.innerHTML = component.template();
                component.select('.comicsGrid').style.paddingTop = "";
            }
        })
    }

}
