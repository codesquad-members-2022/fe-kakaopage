
import { select } from "./util.js";
import { webtoonData } from "./webtoonData.js"

export function createRecommend(genre) {
    const $recommend = document.createElement('div');
    $recommend.className = "margin-center recommend";
    let template = ``;
    template = `<div class="recommend__text">
                <span>오늘의 추천</span><span>더보기</span>
                </div>
                <ul class="l-inline recommend__nav"></ul>`;
    $recommend.innerHTML = template;

    const $main = select('.main')
    $main.appendChild($recommend)
    getRecommendNav(genre)
}

function getRecommendNav(genre) {
    const $recommend_nav = select('.recommend__nav')
    let template = ``;
    let count = 0;
    webtoonData.forEach((data) => {
        const genreCheck = data.genre.includes(genre);
        const upCheck = data.additional.up
        if(genreCheck === true && upCheck === true && count < 4) {
            template += `<li class="recommend__list">
                            <img class="recommend__img" src=${data.src}>
                                <div class="recommend__title">${data.title}</div>
                                <div class="daily__views">${data.views}만</div>
                        </li>`
            count ++;
        }
    })

    $recommend_nav.innerHTML = template;
}
