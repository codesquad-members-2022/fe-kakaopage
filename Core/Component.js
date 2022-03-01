import {observable, observe} from "./observer.js";


export default class Component{
    $target;
    $state;
    $props;
    constructor(target,props) {
        this.$target = target;
        this.$props = props;
        this.setup();

        this.render();
        this.setEvent();
    }
    setup(){
    }

    mounted(){}
    render(){
        this.$target.innerHTML =this.template();
        this.mounted();
    }
    template(){
        return ``;
    }
    setEvent(){}
    setState(newState){this.$state = {...this.$state, ...newState}; this.render();}
    addEvent = ( eventType, selector, callback) => {
        const children = [...this.$target.querySelectorAll(selector)]
        const ok = (eventTarget) => children.includes(eventTarget) || eventTarget.closest(selector)
        this.$target.addEventListener(eventType, event => {
            if (!ok(event.target)) return false;
            callback(event);
        })
    }
    select( selector){return this.$target.querySelector(selector);}
    selectAll( selector){return this.$target.querySelectorAll(selector);}
}