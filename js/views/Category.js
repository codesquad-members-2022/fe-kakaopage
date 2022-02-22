import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
        this.categories = params.categories;
    }

    getCategoryLinks() {
        const template = this.categories
            .map((el) => {
                const badge = el.badge
                    ? `
            <span class = "badge group-flex flex-center">
            ${el.badge}
            </span>
            `
                    : "";
                return `
            <a href="" class="group-flex flex-center" data-link="">
            <span>${el.title}</span>
            ${badge}
            </a>
        `;
            })
            .join("");
        return template;
    }

    getHtml() {
        return `
            <div class="category bg-white margin-top-default padding-default">
            <div class="category-links-wrap group-flex">
            ${this.getCategoryLinks()}
            </div>
            </div>
        `;
    }
}
