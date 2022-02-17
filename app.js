function renderArticle__webtoonRowList() {
    return `<li class="article__webtoon-row-list">
    <div class="article__webtoon-row-img-wrapper">
        <img src="./useimages/환골탈태.png" alt="">
    </div>
    <div class="article__webtoon-row-text-wrapper">
        <h3 class="article__webtoon-row-tittle">
            제목
        </h3>
        <span class="article__webtoon-row-text">천천히 치유되는 그날의 상처</span>
        <span class="article__webtoon-row-text">1.3만명</span>
    </div>
    </li>`
}

const navListsEl = document.querySelectorAll('.nav__list');
const main = document.querySelector('main');

navListsEl.forEach((navList) => {
    navList.addEventListener(('click'), (e) => {
        if(!e.target.classList.contains('active')) {
            navListsEl.forEach((navList) => {
                navList.classList.remove('active');
            })
            main.innerHTML = '';
            e.target.classList.add('active');
            main.innerHTML += renderArticle__webtoonRowList();
        }
    })
})