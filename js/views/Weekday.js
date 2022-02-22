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
        <div class="week-day-submenu group-flex margin-top-default padding-default">
        <ul class="group-flex">
        <li class="active">전체</li>
        <li>웹툰</li>
        <li>⏱웹툰</li>
        </ul>
        <div>전체(000)</div>
        </div>
        <ol class="webtoon-card-wrap group-flex padding-default"></ol>

        </div>
        `;
    }
}
