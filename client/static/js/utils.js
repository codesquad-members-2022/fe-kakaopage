import { serverURL } from "../js/constant.js";

export const getData = (...path) => {
    const url = `${serverURL}${path.join('/')}`;
    return fetch(url).then(response => response.json());
}