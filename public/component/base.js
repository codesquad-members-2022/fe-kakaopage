// 모든 페이지에 공통적으로 사용되며, 변화가 미미한 부분

function renderHeader() {
    const headerNav = ['홈', '웹툰', '웹소설', '영화', '방송', '책'];
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
    ${renderNav('header__nav', headerNav)}
</header>`
}

const clasfyData = ['홈', '요일', '웹툰', '소년', '드라마', '로맨스', '로판','액션무협', 'BL'];

// 수정할필요가 없고, 재사용할 필요가 없는 부분.
function renderBanner() {
    return `    
    <div class="aside__banner-wrapper">
    <aside class="aside__banner">
        <i class="fas fa-chevron-circle-left" id="banner-left-icon"></i>
        <i class="fas fa-chevron-circle-right" id="banner-right-icon"></i>
        <img src="./img/웹툰 _ 롱리브더킹 7타 _ 10-21.png" alt="image">
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
            <img src="./img/ok mark.png" alt="image">
        </div>
    </div>
</footer>`
}

function renderBase() {
    return renderHeader() + renderNav('nav', clasfyData) + renderBanner() + renderMain() + renderFooter();
}

import { renderNav } from './nav.js'
export { renderBase }
