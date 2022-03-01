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