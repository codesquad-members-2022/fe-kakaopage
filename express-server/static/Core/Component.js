import {observable, observe} from "./observer.js";
import {myFetch} from "../utils.js";

export class Component{
    $target;
    $state;
    $props;
    constructor(target,props) {
        this.$target = target;
        this.$props = props;
        this.setup();
    }
    setup(){
        this.$state = observable(this.initState())
        observe(()=>{
            this.render();
            this.setEvent();
            this.mounted();
        })
    }
    async initState(){

    }
    mounted(){}
    render(){
        this.$target.innerHTML =this.template();
    }
    template(){
        return ``;
    }
    setEvent(){}
    setState(newState){this.$state = {...this.$state, ...newState};}
    addEvent = ( eventType, selector, callback) => {
        const children = [...this.$target.querySelectorAll(selector)]
        const ok = (eventTarget) => children.includes(eventTarget) || eventTarget.closest(selector)
        this.$target.addEventListener(eventType, event => {
            if (!ok(event.target)) return false;
            callback(event);
        })
    }
    select = ( selector)=>this.$target.querySelector(selector);
    selectAll = ( selector)=>this.$target.querySelectorAll(selector);
}