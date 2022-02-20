export const ImagePosterComponent = (menu = 'default', content) => {
    return /* html */`<a class="image-poster__${menu}-wrapper">
                <div class="image-poster__${menu}">
                    <div class="image-poster__${menu}-item">
                        <img src="${content.img}" class="image-poster__${menu}_img" alt="이미지 포스터" />
                        <div class="item__inner">
                            <span class="item__inner_rank">1위</span>
                            <img class="item__inner_wait_img" src="images/bmbadge_waitfree.svg" alt="시계 이미지" />
                        </div>
                    </div>
                    <h2 class="image-poster__title">${content.title}</h2>
                    <div class="image-poster__detail">
                        <img class="image-poster__detail_subscription" src="${content.status}" alt="UP 표시" />
                        <img class="image-poster__detail_subscription" src="images/icon_read_count.png" alt="읽은 사람수 이미지" />
                        <span class="image-poster__detail_subscription">${content.subscriptions}</span>
                    </div>
                </div>
            </a>`;
}