import * as Utils from "./Utils.js";
import * as Render from "./Render.js"
import * as HTMLCreator from "./HTMLCreator.js"

function init() {
    Utils.getData('icon-src').then((data) => {
        HTMLCreator.setIconSrc(data);
        Render.rendering('home');
    });
}

init();