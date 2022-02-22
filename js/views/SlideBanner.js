import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
    }

    getHtml() {
        return `
        <div class="slide-banner group-flex bg-white margin-top-default">
        <div class="arrow group-flex flex-center">
            <img src="./images/paging_back.svg" alt="이전">
        </div>
        <img src="./images/img_slide_banner.png" alt="웹툰 아카데미 카카페 데뷔반 2기 모집중!" class="banner">
        <div class="arrow group-flex flex-center">
            <img src="./images/paging_next.svg" alt="다음">
        </div>
        </div>
        `;
    }
}
