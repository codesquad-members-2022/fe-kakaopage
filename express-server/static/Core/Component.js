import {observable, observe} from "./store";
import {myFetch} from "../utils";

class Component{
    #target;
    #state;
    #props;
    constructor(target,props) {
        this.#target = target;
        this.#props = props;
        this.setup();
    }
    setup(){
        this.#state = observable(this.initState())
        observe(()=>{
            this.render();
            this.setEvent();
            this.mounted();
        })
    }
    async initState(){
        const [comics, infographic, images] = await Promise.all([myFetch('comics'),myFetch('infographic'),myFetch('images')])
        return {comics, infographic, images}
    }
    mounted(){}
    render(){
        this.#target.innerHTML =this.template();
    }
    template(){
        return ``;
    }
    setEvent(){}
    setState(newState){this.#state = {...this.#state, ...newState};}

}