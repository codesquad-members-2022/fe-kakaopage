function createContentVerticalSmall() {
    const contentData = {
        thumbnail: {
            img: "https://item.kakaocdn.net/do/4be9625c0426fb7d21c0bff1e8af2e1df43ad912ad8dd55b04db6a64cddaf76d",
            caption: "1위"
        },
        description: {
            title: "카카오짱",
            readers: "100만명"
        }
    };

    return `
    <a class="content-wrapper content-vertical-small" href="">
        <div class="thumbnail">
            <img class="thumbnail-img" src="${contentData.thumbnail.img}" alt="썸네일 사진">
            <div class="thumbnail-caption">
                <div>${contentData.thumbnail.caption}</div>
                    <div class="thumbnail-waitfree">
                        <img src="/images/bmbadge_waitfree.svg" alt="">
                    </div>
            </div>
            </div>
        <dl>
            <dt class="content-title">${contentData.description.title}</dt>
            <dd class="content-readers">👨‍💻 ${contentData.description.readers}</dd>
        </dl>
    </a>
    `;
}

export { createContentVerticalSmall };
