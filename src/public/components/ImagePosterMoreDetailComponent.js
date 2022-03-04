export const ImagePosterMoreDetailComponent = (content) => {
    return /* html */ `
        <div class="detail-more__inner">
            <img class="image-poster__detail_subscription" src="${content.status}" alt="상태 표시" />
            <h2 class="detail-more__title">${content.title}</h2>
        </div>
        <div class="detail-more__inner">
            <span class="image-poster__detail_subscription">${content.description}</span>
        </div>
        <div class="detail-more__inner">
            <img class="image-poster__detail_subscription" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="읽은 사람수 이미지" />
            <span class="image-poster__detail_subscription">${content.subscriptions}만명</span>
            <div class="image-poster__detail_separator"></div>
            <span class="image-poster__detail_subscription">${content.author}</span>
        </div>
    `
}