// 함수 네이밍 
//  - 특정 페이지에서 작동할 것 render + 페이지 + 정보
//  - 공통으로 사용하는 것 render + 컴포넌트 이름 

function renderHome_base() {
    return renderHome_midButton()
}

function renderHome_midButton() {
    return `<div class="mid-button__wrapper">
    <button class="mid-button">오늘 UP</button>
    <button class="mid-button">오늘 신작</button>
    <button class="mid-button">오리지널</button>
    <button class="mid-button">완결까지 정주행</button>
    <button class="mid-button">독립운동가 웹툰</button>
    <button class="mid-button">오늘 랭킹</button>
    </div>`
}

function renderHome_ArticelNav() {
    return `        <nav class="article__nav">
    <ul class="article__nav-lists">
        <li><a href="#">월</a></li>
        <li><a href="#">화</a></li>
        <li><a href="#">수</a></li>
        <li><a href="#">목</a></li>
        <li><a href="#">금</a></li>
        <li><a href="#">토</a></li>
        <li><a href="#">일</a></li>
        <li><a href="#">완결</a></li>
    </ul>
</nav>`
}

// 공통적으로 사용되는 부분

function renderArticle(className) {
    return `<article class="${className}">
    </article>`
}

function renderArticleHeader() {
    return `    <header class="article__header">
    <div class="article__header-wrapper">
        <div class="article__header-text-wrapper">
            <h2>요일 연재 TOP</h2>
            <span>(1,622)</span>
        </div>
        <button class="article__header-button">더보기 ></button>
    </div>
    </header>`
}

function renderArticleSections(num) {
    const sections = renderSection(num);
    return `<div class="section__book-wrapper">${sections}
    </div>`
}

function renderSection(num) {
    let sections = '';
    for(let i = 0; i < num; i++) {
        sections += `               <section class="section__book">
        <div class="section__book-image-wrapper">
            <img src="/useimages/환골탈태.png" alt="images">
            <div class="section__book-image-infor">
                <span>1위</span>
                <i class="fas fa-solid fa-clock"></i>
            </div>
        </div>
        <div class="section__book-text-wrapper">
            <span class="section__book-text">어쩌고 저쩌고</span>
            <span class="section__book-text"><i class="fas fa-user-alt"></i> 28.5만명</span>
        </div>
    </section>`
    }
    return sections;
}
// section 관련은 모든 페이지에서 똑같이 사용한다 -> 이함수들로 그대로 재사용할 수 있다.


export { renderHome_base, renderArticle, renderHome_ArticelNav, renderArticleHeader, renderArticleSections }