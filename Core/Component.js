
import {type} from "../utils.js";

export class Processor {
    render(component) {
        throw 'override';
    };
}

export class InnerHTML extends Processor {
    render(component) {
        component.$target.innerHTML = component.template();
    }
}

export class InsertAdjacentHTML extends Processor {
    $position;

    constructor(position) {
        super();
        this.$position = position;
    }

    render(component) {
        component.$target.insertAdjacentHTML(this.$position, component.template());
    }
}



export default class Component {
    $target;
    $state;
    $props;
    #willRender = false;
    $processor;
    static #subjects = new Set();
    static #inited = false;

    static #notify(v, _ = type(v, Component)) {
        this.#subjects.add(v);
        if (this.#inited) return;
        this.#inited = true;

        const f = _ => {
            this.#subjects.forEach(v => {
                if (!v.#willRender) return;
                v.render()
                v.#willRender = false;
            })
            requestAnimationFrame(f);
        }
        requestAnimationFrame(f);
    }

    constructor(target, processor, props, _1 = type(target, HTMLElement), _2 = type(processor, Processor)) {
        this.$target = target;
        this.$props = props;
        this.$processor = processor;
        this.setup();
        this.render();
        this.setEvent();
        Component.#notify(this);
    }

    setup() {
    }

    mounted() {
    }

    render() {

        this.$processor.render(this);
        this.mounted();
    }

    template() {
        return ``;
    }

    setEvent() {
    }

    setState(newState) {
        this.$state = {...this.$state, ...newState};
        this.#willRender = true;
    }

    addEvent(eventType, selector, callback) {
        const children = [...this.$target.querySelectorAll(selector)];
        const isTarget = (target) => target.closest(selector) || children.includes(target);
        this.$target.addEventListener(eventType, (e) => {
            if (!isTarget(e.target)) return false;
            callback(e);
        })
    }

    select(selector) {
        return this.$target.querySelector(selector);
    }

    selectAll(selector) {
        return this.$target.querySelectorAll(selector);
    }
}

function debounceFrame(callback) {
    let nextFrameCallback = -1;
    return () => {
        cancelAnimationFrame(nextFrameCallback);
        nextFrameCallback = requestAnimationFrame(callback)
    }
};
