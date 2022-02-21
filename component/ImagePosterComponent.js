import { ImagePosterDetailComponent } from "./ImagePosterDetailComponent.js";

export const ImagePosterComponent = (axis = 'col', obj, content) => {
    return /* html */`
    <a class="image-poster__${obj.name}-wrapper">
    ${axis === 'col' ?
    `<div class="image-poster__${obj.imageSize} flex-${axis}">` :
    `<div class="image-poster flex-${axis}">`}
            <div class="image-poster__${obj.imageSize}-item flex-${axis}_mr20">
                <div class="${obj.imageSize}-item__inner-wrapper">
                    ${obj.imageStatus === 'clock' ? `<img class="image-poster_status" alt="상태 이미지" />` : ''}
                    <img src="${content.img}" class="image-poster__${obj.imageSize}_img" alt="이미지 포스터" />
                </div>
                ${obj.imageStatus === 'grade' ?
                `<div class="item__inner">
                    <img class="item__inner_star" alt="별 이미지" />
                    <span class="item__inner_rank">${content.rating}</span>
                    <img class="item__inner_wait" src="images/bmbadge_waitfree.svg" alt="시계 이미지" />
                </div>`
                : ''}
            </div>
            <div class="image-poster__detail-wrapper">
                ${ImagePosterDetailComponent(content)}
            </div>
        </div>
    </a>`;
}