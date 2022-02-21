import { gnbData } from "../data/gnbData.js"

const gnb = document.querySelector('.gnb')
const DEFAULT_TAB = 'webtoon';

const renderGnb = () => {    
    gnb.innerHTML = getTemplate();
    setDefault();
}

const getTemplate = () => {
    return `
        <ul class="gnb__container tab__container">
        ${gnbData.map(data => `
            <li class="gnb__item center" data-tab=${data.dataTab}>
                <a href=${data.link}><img src=${data.src} alt=${data.alt} /></a>
            </li>`).join('')}
        </ul>
    `
}

const setDefault = () => {
    const defaultClicked = document.querySelector(`.gnb__item[data-tab=${DEFAULT_TAB}]`);
    defaultClicked.classList.add('tab__item--selected');
}

const setGnbEvent = () => {
    gnb.addEventListener('click', (e) => {
        const prevClicked = document.querySelector('.gnb .tab__item--selected');
        const targetLi = e.target.closest('li');
        if (prevClicked === targetLi) return;
        prevClicked.classList.remove('tab__item--selected');
        targetLi.classList.add('tab__item--selected');
    });
}


export {renderGnb, setGnbEvent};


