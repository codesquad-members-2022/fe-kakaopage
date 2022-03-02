import Page from "./Page.js";

export default class extends Page {
    constructor(params) {
        super();
        this.carouselImgs = params.carouselImgs;
    }

    getItemHTML(carouselItem, status) {
        return `
        <div class="carousel-item" data-clone="${status}">
        <img
            src="${carouselItem.img}"
            alt="${carouselItem.title}"
            class="carousel-img"
        />
        <div class="cover-image-description group-flex">
        <p class="title">${carouselItem.title}</p>
        <div class="description">
        <div>
            <span>🙍‍♀️ ${carouselItem.subscriber}</span>
        </div>
        </div>
        <div
            class="cover-info-oneline group-flex flex-center"
        >
        <span>${carouselItem.info}</span>
        </div>
        </div>
        </div>
        `;
    }

    getLastClonedItem() {
        const lastIdx = this.carouselImgs.length - 1;
        const carouselItem = this.carouselImgs[lastIdx];
        return this.getItemHTML(carouselItem, "last");
    }

    getFirstClonedItem() {
        const firstIdx = 0;
        const carouselItem = this.carouselImgs[firstIdx];
        return this.getItemHTML(carouselItem, "first");
    }
}
