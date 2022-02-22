import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
        this.genre = params.genre;
        this.genreItem = params.genreItem;
    }

    getGenreItem() {
        return this.genreItem
            .map((el) => {
                const { img, score, title } = el;
                return `
            <li class="webtoon-card">
            <div class="thumbnail-wrap">
            <img src="${img}" alt="${title}" class="thumbnail">
            <div class="group-flex rank-info">
            <div>
            <span>★</span><span>${score}</span>
            </div>
            <img src="../images/bmbadge_waitfree.svg" alt="기다리면 무료 아이콘">
            </div>
            </div>
            <p class="title">${title}</p>
            <div class="reader-info">
            <span>UP</span>
            <span>아이콘</span>
            <span>인원수</span>
            </div>
            </li>
            `;
            })
            .join("");
    }

    getHtml() {
        return `
        <div class="genre-best margin-top-default bg-white padding-default">
        <div class="section-header group-flex">
        <h3>${this.genre} TOP</h3>
        </div>
        <ol class="webtoon-card-wrap group-flex">
        ${this.getGenreItem()}
        </ol>
        </div>
        `;
    }
}
