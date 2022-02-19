export const ImagePosterComponent = (content) => {
    return `<a class="image-poster__wrapper">
                <div class="image-poster">
                    <img src="${content.img}" class="image-poster__img" alt="이미지 포스터" />
                    <h2 class="image-poster__title">${content.title}</h2>
                    <span class="image-poster__subscription">${content.subscriptions}</span>
                </div>
            </a>`;
}