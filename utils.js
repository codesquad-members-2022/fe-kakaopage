import {ComicItem} from "./components/ComicsGrid.js";

export const el = (el, attr = {}) => Object.entries(attr).reduce((el, v) => {
    typeof el[v[0]] == 'function' ? el[v[0]](v[1]) : (el[v[0]] = v[1])
    return el;
}, el instanceof HTMLElement ?  el :document.createElement(el) );

export const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const shuffled = (array, n) => array.sort(() => 0.5 - Math.random()).slice(0, n);




export const tabs = {
    홈: "home",
    웹툰: "toon",
    소설: "novel",
    영화: "movie",
    방송: "broadcast",
    책: "books"
}
export const week = ["월", "화", "수", "목", "금", "토", "일", "완결"]
export const CATS = ["홈", "요일연재", "웹툰", "소년", "드라마", "로맨스", "로판", "액션무협", "BL"];
export const jsonRoute =(function(){
    const route = {
        0: "mon",
        1: "tue",
        2: "wed",
        3: "thu",
        4: "fri",
        5: "sat",
        6: "sun",
        7: "completed",
    }
  return function(key){
        return route[key]
  }
})();
export const renderGrid = (data, infographic, target,key)=>{
    data[jsonRoute(key)].map(comic=>new ComicItem(target))
}
