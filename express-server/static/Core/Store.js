import {observable} from "./observer";
import {myFetch} from "../utils";
const [comics, images, infographic] = await Promise.all([myFetch('comics'), myFetch('images'), myFetch('infographic')]);
export const store = {
    state:observable({
        comics, images, infographic
    }),
    setState(newState){
        for(const [key, value] of Object.entries(newState)){
            this.state[key] = value;
        }
    }

}