import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
    }

    getCategoryLinks() {
        return `
        <a
                                href=""
                                class="group-flex flex-center"
                                data-link=""
                            >
                                <span>오늘 UP</span
                                ><span class="badge group-flex flex-center"
                                    >200</span
                                >
                            </a>
                            <a
                                href=""
                                class="group-flex flex-center"
                                data-link=""
                            >
                                <span>오늘 신작</span
                                ><span class="badge group-flex flex-center"
                                    >4</span
                                >
                            </a>
                            <a
                                href=""
                                class="group-flex flex-center"
                                data-link=""
                            >
                                <span>오리지널</span
                                ><span class="badge group-flex flex-center"
                                    >2,332</span
                                >
                            </a>
                            <a
                                href=""
                                class="group-flex flex-center"
                                data-link=""
                                >완결까지 정주행</a
                            >
                            <a
                                href=""
                                class="group-flex flex-center"
                                data-link=""
                                >독립운동가 웹툰</a
                            >
                            <a
                                href=""
                                class="group-flex flex-center"
                                data-link=""
                                ><span>오늘 랭킹</span
                                ><span class="badge group-flex flex-center"
                                    >1위</span
                                ></a
                            >
        `;
    }

    render() {
        this.clearRoot();

        this.root.innerHTML = `
        <div class="category bg-white margin-top-default padding-default">
        <div class="category-links-wrap group-flex">
        ${this.getCategoryLinks()}
        </div>
        </div>
        `;
    }
}
