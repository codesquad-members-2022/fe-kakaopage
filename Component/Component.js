class Component{

    #target;
    #props;
    constructor(target,props) {
        this.#target = target;
        this.#props = props;
    }
    init(){
        this.render();
        this.setEvent();
    }
    template(){
        return ``
    }
    render(){
        this.#target.innerHTML = this.template();
    }
    setEvent(){
    }

}