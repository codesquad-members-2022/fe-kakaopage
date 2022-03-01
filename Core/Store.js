


export const myFetch = async (key)=>{
    const url = `http://127.0.0.1:3000/${key}`
    try {
        return await (await fetch(url)).json();
    }catch(e){
        throw e;
    }
}
const [comics, images, infographic, menuicons] = await Promise.all([myFetch('comics'), myFetch('images'), myFetch('infographic'), myFetch('menuicons')]);

export const store = {
    state:{
        comics, images, infographic, menuicons
    },
    setState(newState){
        for(const [key, value] of Object.entries(newState)){
            this.state[key] = value;
        }
    }

}