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
    Object.keys(obj).forEach(key => {
        let _value = obj[key];
        const observers = new Set();

        Object.defineProperty(obj, key, {
            get () {
                if (currentObserver) observers.add(currentObserver);
                return _value;
            },

            set (value) {
                _value = value;
                observers.forEach(fn => fn());
            }
        })
    })
    return obj;
}
const state = {a:30, b:50}
observable(state)
observe(()=>console.log(state.a))


observe(()=>console.log(state.b))
state.a = 50;
state.b = 100;
state.a = 40;