import { $ } from "../utils/dom.js";

export const preventHyperLinks = () => {
    $("body").addEventListener("click", (e) => {
        if (!e.target.matches("[data-link]")) return;
        e.preventDefault();
    });
};
