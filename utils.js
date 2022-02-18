export const el = (el, attr = {}) => Object.entries(attr).reduce((el, v) => {
    typeof el[v[0]] == 'function' ? el[v[0]](v[1]) : (el[v[0]] = v[1])
    return el;
}, typeof el == 'string' ? document.createElement(el): el);

export const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const shuffled = (array, n)=> array.sort(() => 0.5 - Math.random()).slice(0,n);
export const AddEvent = (target, eventType, selector, callback)=>{
    const children = [...target.querySelectorAll(selector)]
    const ok = (eventTarget)=>children.includes(eventTarget) || eventTarget.closest(selector)
    target.addEventListener(eventType, event=>{
        if(!ok(event.target))return false;
        callback(event);
    })
}
function render(target){
    if(render.map.has(target)){
        target.innerHTML = render.map.get(target)
        render.map.delete(target);
    }else{
        render.map.put(target, target.innerHTML);
        target.innerHTML = ''
    }
}
render.map = new Map();
