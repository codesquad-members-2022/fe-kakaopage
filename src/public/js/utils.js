export const $ = (className) => document.querySelector(className);
export const days = ['월', '화', '수', '목', '금', '토', '일', '완결'];
export const today = days[new Date().getDay() - 1];
import { serverURL } from "./constants.js";

export const getWebtoonData = (url) => {
    // fetch test func
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

export const fetchData = (path, id) => {
    const url = id !== undefined ? `${serverURL}/${path}/${id}` : `${serverURL}/${path}`;
    return fetch(url).then(response => {
        return response.json();
    });
}

export const scrollMove = (moveY) => {
    const speed = 3;
    let vy = 0;
    let scrollY = 0;

    const loop = setInterval(()=> {
        const direction = moveY > window.pageYOffset ? 1 : -1;
        vy += speed * direction;

        if(direction > 0) {
            scrollY = Math.min(moveY, window.pageYOffset + vy);
        } else {
            scrollY = Math.max(moveY, window.pageYOffset + vy);
        }
        window.scrollTo(0, scrollY);


        if(scrollY >= moveY && direction > 0 || scrollY <= moveY && direction < 0) {
            clearInterval(loop);
        }
    }, 10);
}