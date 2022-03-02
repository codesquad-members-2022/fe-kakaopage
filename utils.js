

export const el = (el, attr = {}) => Object.entries(attr).reduce((el, v) => {
    typeof el[v[0]] == 'function' ? el[v[0]](v[1]) : (el[v[0]] = v[1])
    return el;
}, el instanceof HTMLElement ?  el :document.createElement(el) );

// export const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];
// export const shuffled = (array, n) => array.sort(() => 0.5 - Math.random()).slice(0, n);


export const type = (target, type) => {//
//typeof 값은 항상 문자열이며, 문자열이 아닌경우 instanceof로 검사해주면 됨
    if (typeof type == "string") { //문자열끼리 비교하므로 강제현변환이 일어나지 않으므로 ==도 사용가능하며, ===보다 ==이 빨리 작동함
        if (typeof target != type) throw`invaild type ${target}: ${type}`;
    } else if (!(target instanceof type)) throw`invaild type ${target}: ${type}`;
    return target;
};

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

