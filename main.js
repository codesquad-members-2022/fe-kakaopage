import { renderPageInit } from "./render.js";

const main = () => {
    renderPageInit()

}

main();

//백엔드 서버에서 data.json 전송 테스트용
const promise = fetch("http://127.0.0.1:3000/src")
.then(res => res.json())
.then(json => console.log(json))