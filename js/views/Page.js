import { $ } from "../utils/dom.js";

export default class {
    constructor(params) {
        this.params = params;
        this.root = $("#app");
    }

    clearRoot() {
        this.root.innerHTML = "";
    }

    getHtml() {
        return ``;
    }
}
