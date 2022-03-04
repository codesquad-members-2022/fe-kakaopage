import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
        this.menus = params.menus;
    }

    getHtml() {
        const html = this.menus
            .map(
                (menu, idx) =>
                    `<li ${
                        idx === 0 ? "class='active'" : ""
                    }><a href="" data-link="${idx}">${menu}</a></li>`
            )
            .join("");
        return html;
    }
}
