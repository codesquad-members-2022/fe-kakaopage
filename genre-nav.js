function createEventListnerGenreNav() {
    const genreNav = document.querySelector('.genre-nav');
    genreNav.querySelectorAll('.genre-nav__item').forEach(item => {
        const itemButton = item.querySelector('button');
        itemButton.addEventListener('click', () => {
            genreNav.querySelector('.genre-nav__item--selected').classList.remove('genre-nav__item--selected');
            item.classList.add('genre-nav__item--selected');
        });
    });
}

export { createEventListnerGenreNav };