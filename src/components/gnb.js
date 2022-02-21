import { gnbData } from "../data/gnbData.js"

const gnb = document.querySelector('.gnb')

const renderGnb = () => {    
    gnb.innerHTML = `
    <ul class="gnb__container tab__container">
        ${gnbData.map(data => `
            <li class="gnb__item center">
                <a href=${data.link}><img src=${data.src} alt=${data.alt} /></a>
            </li>`
        ).join('')}
    </ul>
    `
    const defaultClicked = document.querySelector('.gnb__item:nth-child(2)')
    defaultClicked.classList.add('tab__item--selected');
}

const setEvent = () => {
    gnb.addEventListener('click', (e) => {
        const prevClicked = document.querySelector('.gnb .tab__item--selected');
        const targetLi = e.target.closest('li');
        if (prevClicked === targetLi) return;
        prevClicked.classList.remove('tab__item--selected');
        targetLi.classList.add('tab__item--selected');
    });
}


export {renderGnb, setEvent};


