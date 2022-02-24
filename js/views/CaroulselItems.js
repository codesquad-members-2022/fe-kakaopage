import Page from "./Page.js";
import CarouselClonedItems from "./CarouselClonedItems.js";

export default class extends Page {
    constructor(params) {
        super();
        this.carouselImgs = params.carouselImgs;
    }

    getOriginalItemsHtml() {
        return this.carouselImgs
            .map((carouselImg) => {
                return `
            <div class="carousel-item">
        <img
            src="${carouselImg.img}"
            alt="${carouselImg.title}"
            class="carousel-img"
        />
        <div class="cover-image-description group-flex">
        <p class="title">${carouselImg.title}</p>
        <div class="description">
        <div>
            <span>${carouselImg.subscriber}</span>
        </div>
        </div>
        <div
            class="cover-info-oneline group-flex flex-center"
        >
        <span>${carouselImg.info}</span>
        </div>
        </div>
        </div>
            `;
            })
            .join("");
    }

    getHtml() {
        const carouselImgs = this.carouselImgs;
        const cloneditems = new CarouselClonedItems({ carouselImgs });

        let html = "";
        html += cloneditems.getLastClonedItem();
        html += this.getOriginalItemsHtml();
        html += cloneditems.getFirstClonedItem();

        return html;
    }
}
