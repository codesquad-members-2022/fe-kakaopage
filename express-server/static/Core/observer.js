import {myFetch} from "../utils.js";

let currentObserver;
export const observe = fn => {
    currentObserver = fn;
    fn();
    currentObserver = null;
}
//observe(fn)
//1. currentobserv가 fn이 됨
//2. fn이 실행되는데 이때 fn은 state getter를 가지고 잇어야 함
// fn이 get하는 key의 observer set에 등록됨
// 현재 state를 getter로 뿌림
//해당 키가 setter로 업데이트 되면 해당 키의 observer 들만 실행 됨.
export const observable = obj => {
        const observeMap = Object.keys(obj).reduce((map, key)=>{
            const symbol = Symbol.for(key)
            map.set(symbol, new Set())
            return map;
        }, new Map())
        const isProxy = Symbol("isProxy")

        const handler = {
            get(target, name) {
                if(name===isProxy)return true;
                const prop = target[name];
                if (typeof prop == 'undefined') return
                const symbol = Symbol.for(name);
                observeMap[symbol] = observeMap[symbol] || new Set();
                if (currentObserver) observeMap[symbol].add(currentObserver)
                if (!prop.isProxy && typeof prop == 'object') target[name] = new Proxy(prop, handler)
                return target[name];
            },
            set(target, name, value) {
                if(target[name] === value)return true;
                target[name] = value
                const symbol = Symbol.for(name)
                if(!observeMap[symbol]) observeMap[symbol] = new Set();
                observeMap[symbol].forEach(fn=>fn());
                return true;
            }
        }
        return new Proxy(obj, handler);
}

const state = observable(await myFetch('comics'));
observe(()=>{console.log(`현재 값:${state['mon']}`)})
observe(()=>{console.log(`현재 값:${state['tue']}`)})
state['mon'] = 50;
state['tue'] = 100;




