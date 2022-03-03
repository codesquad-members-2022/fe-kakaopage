import { initRender, activateAll } from "./render.js";

const main = () => {
    initRender().then(() => {activateAll()})
}

main();