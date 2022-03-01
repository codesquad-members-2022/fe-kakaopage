import {observable, observe} from "./observer.js";

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

export const type = (target, type) => {//
//typeof 값은 항상 문자열이며, 문자열이 아닌경우 instanceof로 검사해주면 됨
    if (typeof type == "string") { //문자열끼리 비교하므로 강제현변환이 일어나지 않으므로 ==도 사용가능하며, ===보다 ==이 빨리 작동함
        if (typeof target != type) throw`invaild type ${target}: ${type}`;
    } else if (!(target instanceof type)) throw`invaild type ${target}: ${type}`;
    return target;
};

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
        // Component.#notify(this);
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
        this.render();
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
