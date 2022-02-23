import Menu from "./data/Menu.json" assert { type: "json" };
import * as HTMLCreator from "./HTMLCreator.js"
import { setNavEvent } from "./EventController.js"

const $body_main = document.querySelector('.custom');

export function rendering(tabName){
    const renders = {
        'home' : null,
        'daily' : null,
        'webToon' : null,
        'boy' : null,
        'drama' : null,
        'romance' : null,
        'rofan' : null,
        'action' : null,
        'bl' : null
    }

    $body_main.innerHTML = '';
    // renders[tabName](tabName);
    setNavEvent('main-nav__list');
}