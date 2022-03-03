import { DEFAULT_PAGE } from '../constant.js';

export const getGnbTemplate = (gnbData) => {
    return `
        <ul class='gnb__container tab__container'>
        ${gnbData.map(data => `
            <li class='gnb__item center' data-gnb=${data.dataTab}>
                <a href=${data.link}><img src=${data.src} alt=${data.alt} /></a>
                ${data.new ? '<div class="gnb__new-mark"></div>' : ''}
            </li>`).join('')}
        </ul>
    `
}

export const setNewMarkEvent = () => {
    setDefault();
    document.querySelector('.gnb').addEventListener('click', (e) => {
        const clickedTab = e.target.closest('li');
        const newMarker = clickedTab.querySelector('.gnb__new-mark');
        newMarker.classList.add('erase');
    });
}

const setDefault = () => {
    const defaultClicked = document.querySelector(`.gnb__item[data-gnb=${DEFAULT_PAGE}]`);
    defaultClicked.classList.add('gnb-tab__item--selected');
}



