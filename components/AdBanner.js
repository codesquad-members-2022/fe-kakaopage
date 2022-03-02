
import {store} from "../Core/Store.js";
import Component from "../Core/Component.js";

// export const AdBanner = (target, position, images, infographic)=>{
export const AdBanner = class extends Component {
    template() {
        const {infographic, images} = store.state;
        return `
     <div class="listContentBox AdBanner">
            <button type="button" class="prevBtn">
                <img src=${infographic.prev}>
            </button>

            <img src=${images.ad[0]}/>

            <button class="nextBtn">
                <img src=${infographic.next}/>
            </button>
        </div>
    `;
    }

}
