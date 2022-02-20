
function renderSections(_id, img, url, ranking='') {
    return  `<section class="section__book">
    <a href = "${url}">
    <div class="section__book-image-wrapper">
        <img src="${img}" alt="images">
        <div class="section__book-image-infor">
            <span>${ranking}위</span>
            <i class="fas fa-solid fa-clock"></i>
        </div>
    </div>
    <div class="section__book-text-wrapper">
        <span class="section__book-text">${_id}</span>
        <span class="section__book-text"><i class="fas fa-user-alt"></i> 28.5만명</span>
    </div>
    </a>
</section>`
}

function renderSectionWrapper(sections) {
    return `<div class="section__book-wrapper">${sections}
    </div>`
}

function renderPromotionBanner() {
    return `<aside class="aside__promotion-banner">
    <div class="aside__promotion-banner-inner">
        <i class="fas fa-chevron-circle-left" id="left-icon"></i>
        <img src="/useimages/promotion.jpg" alt="images">
        <i class="fas fa-chevron-circle-right" id="right-icon"></i>
    </div>
</aside>`
}

function renderRecommandBanner() {
    return ` <aside class="aside__recommend-banner">
    <header class="article__header">
        <div class="article__header-wrapper">
            <div class="article__header-text-wrapper">
                <h2>추천 이벤트</h2>
            </div>
            <button class="article__header-button">더보기 ></button>
        </div>
    </header>
    <div class="aside__reommend-banner-image-wrapper">
        <img src="./useimages/왕실교사 하이네 경품.png" alt="image">
    </div>
</aside>`
}

export {renderSections, renderSectionWrapper, renderPromotionBanner, renderRecommandBanner}