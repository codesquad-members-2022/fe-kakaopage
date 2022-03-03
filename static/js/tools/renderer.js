import { $ } from "../utils/dom.js";

export const render = (html) => {
    $("#app").innerHTML = html;
};
