
function renderHeader() {
    return `<header class="header">
    <div class="header__tittle-wrapper">
        <h1>Kakaopage</h1>
        <div class="header__button-wrapper">
            <div class="header__search-wrapper">
                <input type="text" class="header__search">
                <i class="fas fa-search"></i>
            </div>
            <button class="header__button">Stage</button>
            <button class="header__button">캐시충전</button>
            <button class="header__button">로그인</button>
        </div>
    </div>
    <nav class="header__nav">
        <ul class="header__nav-lists">
            <li><a href="#">홈</a></li>
            <li><a href="#">웹툰 ・
                <i class="fas fa-solid fa-clock"></i>
            </a></li>
            <li><a href="#">웹소설 ・
                <i class="fas fa-solid fa-clock"></i>
            </a></li>
            <li><a href="#">영화</a></li>
            <li><a href="#">방송</a></li>
            <li><a href="#">책</a></li>
        </ul>
    </nav>
</header>`
}


function renderNav() {
    
    return `
    <nav class="nav">
    <ul class="nav__ul">
        <li class="nav__list active">홈</li>
        <li class="nav__list">요일</li>
        <li class="nav__list">웹툰</li>
        <li class="nav__list">소년</li>
        <li class="nav__list">드라마</li>
        <li class="nav__list">로맨스</li>
        <li class="nav__list">로판</li>
        <li class="nav__list">액션</li>
        <li class="nav__list">BL</li>
    </ul>
</nav>`
}
// 수정할필요가 없고, 재사용할 필요가 없는 부분.


function renderBanner() {
    return `    
    <div class="aside__banner-wrapper">
    <aside class="aside__banner">
        <i class="fas fa-chevron-circle-left" id="left-icon"></i>
        <i class="fas fa-chevron-circle-right" id="right-icon"></i>
        <img src="./useimages/웹툰 _ 롱리브더킹 7타 _ 10-21.png" alt="image">
        <div class="aside__banner-tittle-wrapper">
            <br>
            <h3 class="aside__banner-tittle">롱리브더킹</h3>
        </div>
        <div class="aside__banner-lists-wrapper">
            <ul class="aside__banner-lists">
                <li><i class="fas fa-solid fa-clock">웹툰</i></li>
                <li><i class="fas fa-user-alt">30.5만명</i></li>
            </ul>
        </div>
        <div class="aside__banner-footer"><p>어쩌고 저쩌고</p></div>
    </aside>
</div>`
}

// 배너는 추후에 수정이 필요할 수 있음..

function renderMain() {
    return `<main>
    </main>`
}

// main에 내용 변화를 주려고 하므로 필요한 부분.

function renderFooter() {
    return `    
    <footer class="footer">
    <button class="footer__toApp-button">
        카카오페이지 앱으로 보기 >
    </button>
    <div class="footer__infor-wrapper">
        <div class="footer__infor-text-wrapper">
            <div class="footer__infor-text">
                회사소개 이용약관 개인정보처리방침 청소년보호정책 공지사항
            </div>
            <div class="footer__infor-text">
                (주)카카오엔터테인먼트 사업자 정보 <u>사업자 정보 확인</u>
            </div>
            <div class="footer__infor-text">
                Kakao Entertainment Corp.
            </div>
        </div>
        <div class="footer__infor-image-wrapper">
            <img src="./useimages/ok mark.png" alt="image">
        </div>
    </div>
</footer>`
}

function renderBase() {
    return renderHeader() + renderNav() + renderBanner() + renderMain() + renderFooter();
}


function renderArticle(className, headerTittle, headerSubText = '') {
    return `
    <article class="${className}">
        <header class="article__header">
        <div class="article__header-wrapper">
            <div class="article__header-text-wrapper">
                <h2 class="article__header-tittle">${headerTittle}</h2>
                <span class="article__header-sub-text">${headerSubText}</span>
            </div>
            <button class="article__header-button">더보기 ></button>
        </div>
        </header>
    </article>`
}
// 모든 article에는 header가 들어가므로, 하나로 합쳐도 될 것 같음.

// function renderArticleHeader() {
//     return `    
//     <header class="article__header">
//     <div class="article__header-wrapper">
//         <div class="article__header-text-wrapper">
//             <h2 class="article__header-tittle">요일 연재 TOP</h2>
//             <span class="article__header-sub-text">(1,622)</span>
//         </div>
//         <button class="article__header-button">더보기 ></button>
//     </div>
//     </header>`
// } 
// 위 함수로 합쳐진 부분.

function renderArticleSections(num) {
    const sections = renderSection(num);
    return `
    <div class="section__book-wrapper">${sections}
    </div>`
}

function renderSection(num) {
    let sections = '';
    for(let i = 0; i < num; i++) {
        sections += `               
        <section class="section__book">
        <div class="section__book-image-wrapper">
            <img src="./useimages/학사재생.png" alt="images">
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

function renderMidButton(listNames) {
    let lists = '';
    listNames.forEach((listName) => {
        lists += `<button class="mid-button">${listName}</button>`
    })

    return `<div class="mid-button__wrapper">
    ${lists}
    </div>`
}

export { renderBase, renderArticle, renderArticleSections, renderMidButton };