
const homeData = {
    'midButton' : ['오늘 UP', '오늘 신작', '오리지널', '완결가지 정주행', '독립운동가 웹툰', '오늘 랭킹'],
    'articleName' : ['요일연재 TOP', '로맨스 TOP', '일일랭킹 TOP'],
    'articleNav' : ['월', '화', '수', '목', '금', '토', '일', '완결'],
    'articleBooks5Lists' : [ 
        {
            id : 'romance-TOP',
            type : '로맨스'
        }, 
        {
            id : 'romanceFantasy-TOP',
            type : '판타지'
        },
        {
            id : 'drama-TOP',
            type : '드라마'
        },
        {
            id : 'blgl-TOP',
            type : 'BL'
        },
        {
            id : 'youth-TOP',
            type : '소년'
        }
    ],
    sectionNums: 10,
}

async function renderHome() {
    const mainEL = document.querySelector('main');
    mainEL.innerHTML += renderMidButton(homeData.midButton);
    mainEL.innerHTML += renderArticle('article__weekdays-top', '','요일연재 TOP', '(1658)');
    mainEL.innerHTML += renderPromotionBanner();
    const articleWeekdaysTopEL = document.querySelector('.article__weekdays-top');
    articleWeekdaysTopEL.innerHTML += renderNav('article__nav', homeData.articleNav);

    // articleBooks5Lists.forEach((articleBook, index) => {
    //     document.querySelector('main').innerHTML += renderArticle('article__books5', `${articleBook.id}`, `${articleBook.type} TOP`)
    //     console.log(`${articleBook.type} TOP`, `${articleBook.type}`, `${articleBook.id}`, 5)
    //     await displayBooks5(`${articleBook.type} TOP`, `${articleBook.type}`, `${articleBook.id}`, 5)
    // }) app.js:72 Uncaught SyntaxError: Unexpected reserved word 오류
    // forEach에서 fetch 안됨

    await displayWeekRanking(0, homeData.sectionNums);
    // 앞의 숫자: 요일 숫자, 뒤에 숫자 : 출력할 작품 수

    for(let i=0; i<homeData['articleBooks5Lists'].length; i++) {
        document.querySelector('main').innerHTML += renderArticle('article__books5', `${homeData['articleBooks5Lists'][i].id}`, `${homeData['articleBooks5Lists'][i].type} TOP`);
        await displayBooks5(`${homeData['articleBooks5Lists'][i].type} TOP`, `${homeData['articleBooks5Lists'][i].type}`, `${homeData['articleBooks5Lists'][i].id}`, 5);
    }

    mainEL.innerHTML += renderRecommandBanner();
}

function displayWeekRanking(day, sectionNums) {

    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/week?day=${day}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderSections(json[i].title, json[i].img, json[i].url, i+1)
        }
    document.querySelector('.article__weekdays-top').innerHTML += renderSectionWrapper(html);
});
}

function displayBooks5(tittle, type, id, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/search?keyword=${type}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderSections(json[i].title, json[i].img, json[i].url, i+1)
        }
    document.querySelector(`#${id}`).innerHTML += renderSectionWrapper(html);
    })
}

export { renderHome };
import { renderMidButton } from './component/midButton.js';
import { renderNav } from './component/nav.js';
import { renderArticle } from './component/article.js';
import { renderSections, renderSectionWrapper } from './component/section.js';
import { renderPromotionBanner, renderRecommandBanner } from './component/banner.js';
// function renderPromotionBanner() {
//     return `<aside class="aside__promotion-banner">
//     <div class="aside__promotion-banner-inner">
//         <i class="fas fa-chevron-circle-left" id="left-icon"></i>
//         <img src="./img/promotion.jpg" alt="images">
//         <i class="fas fa-chevron-circle-right" id="right-icon"></i>
//     </div>
// </aside>`
// }

// function renderRecommandBanner() {
//     return ` <aside class="aside__recommend-banner">
//     <header class="article__header">
//         <div class="article__header-wrapper">
//             <div class="article__header-text-wrapper">
//                 <h2>추천 이벤트</h2>
//             </div>
//             <button class="article__header-button">더보기 ></button>
//         </div>
//     </header>
//     <div class="aside__reommend-banner-image-wrapper">
//         <img src="./img/왕실교사 하이네 경품.png" alt="image">
//     </div>
// </aside>`
// }

// github pages 배포하는 과정에서 따로 만들어둔 ./componet/banner.js 파일에서 404오류가 계속 나길래 일단 임시로
// 여기에 추가해주었습니다. 다른 파일들은 문제없이 수신이 되고 있는데 해당 파일만 그래서 😂 추후 해결 방법을 찾아보고자 합니다.