export const ImagePosterDetailComponent = (content) => {
    return /* html */ `
    <h2 class="image-poster__title">${content.title}</h2>
    <div class="image-poster__detail">
        <img class="image-poster__detail_subscription" src="${content.status}" alt="UP 표시" />
        <img class="image-poster__detail_subscription" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="읽은 사람수 이미지" />
        <span class="image-poster__detail_subscription">${content.subscriptions}만명</span>
    </div>
    `
}