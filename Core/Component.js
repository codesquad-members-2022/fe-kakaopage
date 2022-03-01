import {observable, observe} from "./observer.js";


export default class Component{
    $target;
    $state;
    $props;
    #willRender = false;
    static #subjects = new Set;
    static #inited = false;

    static #notify(v){
        this.#subjects.add(v);
        if(this.#inited)return;
        this.#inited = true;
        const f = _=>{
            this.#subjects.forEach(v=>{
                if(!v.#willRender)return;
                v.render()
                v.#willRender = false;
            })
            requestAnimationFrame(f);
        }
        requestAnimationFrame(f);
    }
    constructor(target,props) {
        this.$target = target;
        this.$props = props;
        this.setup();
        this.render();
        this.setEvent();
        Component.#notify(this);
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
    setState(newState){this.$state = {...this.$state, ...newState}; this.#willRender=true}
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