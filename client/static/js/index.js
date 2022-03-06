import { initRender, activateTabs } from "./render.js";

const main = () => {
    initRender().then(() => {activateTabs()})
}

main();