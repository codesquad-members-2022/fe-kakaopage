

function renderWeekdays_base() {
    return renderWeekdays_nav() + renderWeekdays_clasifyNav() + renderWeekdays_Article()
}

function renderWeekdays_nav() {
    return `    <nav class="nav__weekdays">
    <ul class="nav__weekdays-ul">
        <li class="nav__weekdays-list active">월</li>
        <li class="nav__weekdays-list">화</li>
        <li class="nav__weekdays-list">수</li>
        <li class="nav__weekdays-list">목</li>
        <li class="nav__weekdays-list">금</li>
        <li class="nav__weekdays-list">토</li>
        <li class="nav__weekdays-list">일</li>
        <li class="nav__weekdays-list">완결</li>
    </ul>
</nav>`
}

function renderWeekdays_clasifyNav() {
    return `<nav class="nav__clasify">
    <div class="nav__clasify-buttons-wrapper">
        <button class="nav__clasify-button">
            전체
        </button>
        <button class="nav__clasify-button">
            웹툰
        </button>
        <button class="nav__clasify-button">
            <i class="fas fa-solid fa-clock"></i>
            웹툰
        </button>
    </div>

    <div class="nav__clasfify-toggle-wrapper">
        <button class="nav__clasify-toggle">
            전체 (138)
            <i class="fas fa-solid fa-arrow-down"></i>
        </button>
    </div>
</nav>`
}

function renderWeekdays_Article() {
    return `<article class="article__weekdays">
    <div class="section__book-wrapper">
    </div>
</article>`
}

function addWeekdays_ArticleSection(num) {
    const sectionBookWrapperEl = document.querySelector('.section__book-wrapper');

    for(let i = 0; i < num; i++) {
        sectionBookWrapperEl.innerHTML += renderWeekdays_ArticleSection();
    }
}

function renderWeekdays_ArticleSection() {
    return `  <section class="section__book">
    <div class="section__book-image-wrapper">
        <img src="/useimages/환골탈태.png" alt="">
        <div class="section__book-image-infor">
            <span>1위</span>
            <i class="fas fa-solid fa-clock"></i>
        </div>
    </div>
    <div class="section__book-text-wrapper">
        <h4>어쩌고 저쩌고</h4>
        <span><i class="fas fa-user-alt"></i> 28.5만명</span>
    </div>
</section>`
}
// 나중에 무한스크롤해서 section 추가되는거 구현하면 필요한 부분

export {renderWeekdays_base, addWeekdays_ArticleSection}