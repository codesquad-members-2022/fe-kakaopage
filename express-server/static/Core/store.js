
let currentObserver;
const observe = fn => {
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
const observable = obj => {
        const observers = new Map();
        const isProxy = Symbol("isProxy")
        const handler = {
            get(target, key) {
                if (key === isProxy) return true;
                const prop = target[key];
                if (typeof prop == 'undefined') return;
                if (!prop.isProxy && typeof prop == 'object') target[key] = new Proxy(prop, handler)
                if (currentObserver) {
                    if (observers.has(key))return;
                    else{
                        observers.set(key)
                    }
                }
                return target[key];
            },
            set(target, key, value) {
                target[key] = value;
                if (!observers.has(key)) return
                observers.get(key).forEach(fn => fn())
                return true;
            }
        }
    return new Proxy(obj, handler);
}
const state = {a:30, b:50}
observable()
observe(()=>console.log(state.a))
observe(()=>console.log(state.b))
state.a = 50;
state.b = 100;