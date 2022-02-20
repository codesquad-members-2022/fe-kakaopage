const webtoonData = {
    nav: ['월', '화', '수', '목', '금', '토', '일', '전체'],
}

async function renderWebtoon() {
    const mainEL = document.querySelector('main');
    mainEL.innerHTML += renderNav('nav__webtoon', webtoonData.nav) + renderArticleWebtoonRow();
    document.querySelector('.nav__webtoon-list').classList.add('active');
    await renderRowArticle(0, 11);
    const navWebtoonListsEL = document.querySelector('.nav__webtoon-lists');
    navWebtoonListsEL.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
            [...navWebtoonListsEL.children].forEach((weekdaysList) => {
                weekdaysList.classList.remove('active');
            })
            // children은 HTMLCOLLECTION이라서, 배열 메서드를 사용할 수 없었음.
            target.classList.add('active');
        }
        document.querySelector('.article__webtoon-row').innerHTML = '';

        if(target.textContent === '월') renderRowArticle(0, 11);
        if(target.textContent === '화') renderRowArticle(1, 11);
        if(target.textContent === '수') renderRowArticle(2, 11);
        if(target.textContent === '목') renderRowArticle(3, 11);
        if(target.textContent === '금') renderRowArticle(4, 11);
        if(target.textContent === '토') renderRowArticle(5, 11);
        if(target.textContent === '일') renderRowArticle(6, 11);
    })
}

function renderArticleWebtoonRow() {
    return `<article class="article__webtoon-row">
    </article>`
}

function renderRowArticle(day, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/week?day=${day}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderRowList(json[i].title, json[i].img, json[i].url)
        }
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
import { renderNav } from './component/nav.js'
