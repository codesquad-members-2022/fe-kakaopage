
import Component from "../Core/Component.js";
import {store} from "../Core/Store.js";




// export const menuNav = (target)=>{
export const MenuNav = class extends Component{

    template (){
        const {menuicons} = store.state;
        const {tab} = this.$props;
        return`
        <ul class="menuNav">
            ${Object.entries(menuicons).map(([name, src])=>`<li class="menu ${tab===name? 'selected':''}" data-name=${name}><a><img src=${src}/></a></li>`).join('')}
        </ul>`
    }
    setEvent() {
        const{onClickPage} = this.$props;
        this.addEvent('click', '.menu', ({target})=>{
            onClickPage(target.dataset.name);
        })
    }

}