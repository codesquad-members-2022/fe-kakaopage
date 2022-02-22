import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
        this.menu = params.menu;
        this.today = params.today;
    }

    getMenus() {
        return this.menu
            .map((menuName) => {
                return `
            <li class="${menuName === this.today ? "active" : ""}">
            <a href="" data-link="">${menuName}</a>
            </li>`;
            })
            .join("");
    }

    getHtml() {
        return `
        <div class="weekday-serial bg-white margin-top-default">
        <ul class="week-day-menu group-flex bg-white">
        ${this.getMenus()}
        </ul>
        </div>
        `;
    }
}
