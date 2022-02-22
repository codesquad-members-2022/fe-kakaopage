export default class Component{

    #target;
    #props;
    #state;
    constructor(target,props) {
        this.#target = target;
        this.#props = props;
        this.setup();
        this.setEvent();
        this.render();

    }
    setup(){
        this.init()
    }
    init(){}
    mount(){}
    template(){
        return ``
    }
    render(){
        this.#target.innerHTML = this.template();
        this.mount()
    }
    setEvent(){
    }

}