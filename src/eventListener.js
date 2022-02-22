import { $, $$ } from './utility.js';
import { renderDayTopContent } from './render/dayTop.js';

const addDayTopTabEvent = () => {
    $$('.day-top-tab__button').forEach((tab, idx) => {
        (function() {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                $('.day-top-tab__button.on').classList.remove('on');
                renderDayTopContent(idx);
            });
        })(idx);
    });
}

export { addDayTopTabEvent };