import {comicItem} from "../components/comicsGrid.js";

export const el = (el, attr = {}) => Object.entries(attr).reduce((el, v) => {
    typeof el[v[0]] == 'function' ? el[v[0]](v[1]) : (el[v[0]] = v[1])
    return el;
}, el instanceof HTMLElement ?  el :document.createElement(el) );

export const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const shuffled = (array, n) => array.sort(() => 0.5 - Math.random()).slice(0, n);

export const getWebtoonData = async (day) => await (await fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/week?day=${day}`)).json();
export const AddEvent = (target, eventType, selector, callback) => {
    const children = [...target.querySelectorAll(selector)]
    const ok = (eventTarget) => children.includes(eventTarget) || eventTarget.closest(selector)
    target.addEventListener(eventType, event => {
        if (!ok(event.target)) return false;
        callback(event);
    })
}
const map  = new Map();
map.set('0', 'mon');
map.set('1', 'tue');
map.set('2', 'wed');
map.set('3', 'thu');
map.set('4', 'fri');
map.set('5', 'sat');
map.set('6', 'sun');
map.set('7', 'completed');
export const jsonRoute = (key)=>{
  return map.get(key)
}
export const renderGrid = async(target,key)=>{
    const data = await (await fetch('./utils/comics.json')).json()
    data[jsonRoute(key)].map(comic=>comicItem(comic, target))
}