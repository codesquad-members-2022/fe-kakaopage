import { footer } from "./footer.js";
import { gnb } from "./gnb.js"

const init = () => {
    // gnb listener
    gnb.menuClick();

    // footer listener
    footer.detailSlide();
}

// async function getWebtoonData() {
//     const res = await fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/week`, {
//         method: 'GET'
//     }),
//     json = await res.json();
//     console.log(json);
//     return json;
// }

init();