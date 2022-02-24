const webtoonData = {
    nav: ['월', '화', '수', '목', '금', '토', '일', '전체'],
    parms: [ 'week?day=0', 'week?day=1', 'week?day=2', 'week?day=3', 'week?day=4', 'week?day=5', 'week?day=6', ''],
    sectionNums: 11,
}

async function renderWebtoon() {
    const mainEL = document.querySelector('main');
    mainEL.innerHTML += renderNav('nav__webtoon', webtoonData.nav) + renderArticleWebtoonRow();
    document.querySelector('.nav__webtoon-list').classList.add('active');
    await renderRowArticle(0, webtoonData.sectionNums);
    navClickEventHandler('nav__webtoon-lists', webtoonData.nav, renderRowArticle, webtoonData.sectionNums);
}

function renderArticleWebtoonRow() {
    return `<article class="article__webtoon-row">
    </article>`
}

function renderRowArticle(index, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/${webtoonData.parms[index]}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderRowList(json[i].title, json[i].img, json[i].url)
        }
        return html;
    })
    .then(html => {
        deleteInnerHTML('.article__webtoon-row');
        document.querySelector('.article__webtoon-row').innerHTML += renderRowListWrapper(html);
    })
}


function renderRowList(tittle, img, url, ranking='') {
    return  `
    <li class="article__webtoon-row-list">
    <div class="article__webtoon-row-img-wrapper">
        <img src="${img}" alt="images">
    </div>
    <div class="article__webtoon-row-text-wrapper">
        <h3 class="article__webtoon-row-tittle">
            ${tittle};
        </h3>
        <p class="article__webtoon-row-text">천천히 치유되는 그날의 상처</p>
        <p class="article__webtoon-row-text">1.3만명</p>
    </div>
</li>`
}

function renderRowListWrapper(lists) {
    return `<ul class="article__webtoon-row-lists">
    ${lists}
    </ul>`
}

export { renderWebtoon };
import { renderNav } from '../component/nav.js'
import { navClickEventHandler } from '../utils/eventHandler.js';
import { deleteInnerHTML } from '../utils/deleteInnerHTML.js';
