import { ImagePosterDetailComponent } from "./ImagePosterDetailComponent.js";

export const ImagePosterComponent = (obj, content) => {
    return /* html */`
    <a class="image-poster__${obj.name}-wrapper">
        <div class="image-poster__${obj.imageSize}">
            <div class="image-poster__${obj.imageSize}-item">
                <div class="${obj.imageSize}-item__inner-wrapper">
                    ${obj.imageStatus === 'clock' ? `<img class="image-poster_status" src="https://static-page.kakao.com/static/common/badge_time.png?4f8e2321988f4826b438a4ab2509e82a" />` : ''}
                    <img src="${content.img}" class="image-poster__${obj.imageSize}_img" alt="이미지 포스터" />
                </div>
                ${obj.imageStatus === 'grade' ?
                `<div class="item__inner">
                    <img class="item__inner_star" src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac" />
                    <span class="item__inner_rank">${content.rating}</span>
                    <img class="item__inner_wait" src="images/bmbadge_waitfree.svg" alt="시계 이미지" />
                </div>`
                : ''}
            </div>
            ${ImagePosterDetailComponent(content)}
        </div>
    </a>`;
}