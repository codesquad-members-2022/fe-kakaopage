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

export { renderPromotionBanner, renderRecommandBanner };
