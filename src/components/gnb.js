import { gnbData } from "../data/gnbData.js"
import { DEFAULT_PAGE } from "../constant.js";

const gnb = document.querySelector('.gnb')

const renderGnb = () => {    
    gnb.innerHTML = getTemplate();
    setDefault();
}

const getTemplate = () => {
    return `
        <ul class="gnb__container tab__container">
        ${gnbData.map(data => `
            <li class="gnb__item center" data-gnb=${data.dataTab}>
                <a href=${data.link}><img src=${data.src} alt=${data.alt} /></a>
            </li>`).join('')}
        </ul>
    `
}

const setDefault = () => {
    const defaultClicked = document.querySelector(`.gnb__item[data-gnb=${DEFAULT_PAGE}]`);
    defaultClicked.classList.add('gnb-tab__item--selected');
}

export {renderGnb};


