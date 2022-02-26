import {comicItem} from "./components/comicsGrid.js";

export const el = (el, attr = {}) => Object.entries(attr).reduce((el, v) => {
    typeof el[v[0]] == 'function' ? el[v[0]](v[1]) : (el[v[0]] = v[1])
    return el;
}, el instanceof HTMLElement ?  el :document.createElement(el) );

export const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const shuffled = (array, n) => array.sort(() => 0.5 - Math.random()).slice(0, n);






export const jsonRoute =(function(){
    const route = {
        "0": "mon",
        "1": "tue",
        "2": "wed",
        "3": "thu",
        "4": "fri",
        "5": "sat",
        "6": "sun",
        "7": "completed",
    }
  return function(key){
        return route[key]
  }
})();
export const renderGrid = (data, infographic, target,key)=>{
    data[jsonRoute(key)].map(comic=>comicItem(comic, target, infographic))
}
export const myFetch = async (key)=>{
    const url = `http://127.0.0.1:3000/data/${key}.json`
    try {
        return await (await fetch(url)).json();
    }catch(e){
        throw e;
    }
}