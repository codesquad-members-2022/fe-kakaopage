function createContentVerticalSmall(contentData) {
    return `
    <a class="content-wrapper content-vertical-small" href="">
        <div class="thumbnail">
            <img class="thumbnail-img" src="${contentData.thumbnail.img}" alt="썸네일 사진">
            <div class="thumbnail-caption">
                <div>${contentData.thumbnail.caption}</div>
                    <div class="thumbnail-waitfree">
                        <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
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
