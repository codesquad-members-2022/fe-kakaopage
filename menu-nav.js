(function (){
    const mainContainer = document.querySelector('main .container');
    const webtoonMain = mainContainer.innerHTML;
    const dummy = `
        <div>
            <img src="https://static.turbosquid.com/Preview/2019/02/18__04_59_25/Crash_Test_Dummy_Rigged_c4d_00.jpg06869F8F-4BC5-4818-AAAD-72A1BCBF72C5DefaultHQ.jpg">
        </div>
        `;
    const mainHTMLs = {
        'home': dummy,
        'webtoon': webtoonMain,
        'webnovel': dummy,
        'movie': dummy,
        'broadcast': dummy,
        'book': dummy
    };

    const menu = document.querySelector('.menu-nav');
    const menuItems = menu.querySelectorAll('.menu-nav__item');

    menuItems.forEach(item => {
        const itemButton = item.querySelector('button');
        itemButton.addEventListener('click', () => {
            menu.querySelector('.menu-nav__item--selected').classList.remove('menu-nav__item--selected');
            item.classList.add('menu-nav__item--selected');
            mainContainer.innerHTML = mainHTMLs[itemButton.value];
        });
    });
})();
