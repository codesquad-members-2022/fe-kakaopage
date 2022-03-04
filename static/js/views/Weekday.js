import Page from "./Page.js";

export default class extends Page {
    constructor(params, today) {
        super();
        this.menu = params.menu;
        this.today = today;
        this.data = params.data;
    }

    getMenus() {
        return this.menu
            .map((menuName) => {
                return `
            <li class="${menuName === this.today ? "active" : ""}">
            <a href="" data-link="true">${menuName}</a>
            </li>`;
            })
            .join("");
    }

    getItems() {
        const selectedData = this.data[this.today];
        return selectedData
            .map((cur, idx) => {
                return `
                <li class="webtoon-card">
                <div class="thumbnail-wrap">
                <img
                    src="${cur.img}"
                    alt="${cur.title}"
                    class="thumbnail"
                />
                <div class="group-flex rank-info">
                    <div>
                        <span>${idx + 1}위</span>
                    </div>
                    <img
                        src="./images/bmbadge_waitfree.svg"
                        alt="기다리면 무료 아이콘"
                    />
                </div>
            </div>
            <p class="title">${cur.title}</p>
            <div class="reader-info">
                <span>🙍‍♀️</span>
                <span>${cur.subscriber}</span>
            </div>
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
        <ol class="webtoon-card-wrap group-flex padding-default">
        ${this.getItems()}
        </ol>

        </div>
        `;
    }
}
