import { $ } from "../utils/dom.js";

export const preventHyperLinks = () => {
    $("body").addEventListener("click", (e) => {
        if (!e.target.closest("a")) return;
        if (!e.target.closest("a").dataset.link) return;
        e.preventDefault();
    });
};
