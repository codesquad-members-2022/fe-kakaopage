function createGenreNav() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <ul class="genre-nav">
        <li class="genre-nav__item genre-nav__item--selected">
            <button>홈</button>
        </li>
        <li class="genre-nav__item">
            <button>요일연재</button>
        </li>
        <li class="genre-nav__item">
            <button>웹툰</button>
        </li>
        <li class="genre-nav__item">
            <button>소년</button>
        </li>
        <li class="genre-nav__item">
            <button>드라마</button>
        </li>
        <li class="genre-nav__item">
            <button>로맨스</button>
        </li>
        <li class="genre-nav__item">
            <button>로판</button>
        </li>
        <li class="genre-nav__item">
            <button>액션무협</button>
        </li>
        <li class="genre-nav__item">
            <button>BL</button>
        </li>
    </ul>
    `;
    nav.addEventListener('click', (e) => {
        const selectedItem = e.target.closest('li');
        const previousSelectedItem = nav.querySelector('.genre-nav__item--selected');
        
        if (selectedItem === previousSelectedItem) return;

        if (previousSelectedItem !== null) {
            previousSelectedItem.classList.remove('genre-nav__item--selected');
        }
        selectedItem.classList.add('genre-nav__item--selected');
    });

    return nav;
}

export { createGenreNav };