export const CarouselContent = (carousel) => {
    return /* html */`
        <h1 class="carousel__title">${carousel.title}</h1>
        <div class="carousel__detail">
            <img class="carousel_img" src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b" alt="최신 이미지"/>
            <img class="carousel_img" src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858" alt="시계 이미지" /> <span class="carousel_text">${carousel.menu}</span>
            <img class="carousel_img" src="images/line_top_banner.png" alt="이미지 사이 구분자"/>
            <img class="carousel_img" src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e" alt="사람 이미지" /> <span class="carousel_text">${carousel.subscriptions}만명</span>
        </div>
    `
}