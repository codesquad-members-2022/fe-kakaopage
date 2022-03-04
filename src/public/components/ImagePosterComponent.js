import { ImagePosterDetailComponent } from "./ImagePosterDetailComponent.js";
import { ImagePosterMoreDetailComponent } from "./ImagePosterMoreDetailComponent.js";

export const ImagePosterComponent = (axis = 'col', obj, content) => {
    return /* html */`
    <a class="image-poster-wrapper">
    ${axis === 'col' ?
    `<div class="image-poster__${obj.imageSize} flex-${axis}">` :
    `<div class="image-poster flex-${axis}">`}
            <div class="image-poster__${obj.imageSize}-item">
                <div class="${obj.imageSize}-item__inner-wrapper">
                    ${obj.imageStatus === 'clock' ? `<img class="image-poster_status" alt="상태 이미지" />` : ''}
                    <img src="${content.img}" class="image-poster__${obj.imageSize}_img" alt="이미지 포스터" />
                </div>
                ${obj.imageStatus === 'grade' ?
                `<div class="item__inner">
                    <img class="item__inner_star" alt="별 이미지" />
                    <span class="item__inner_rank">${content.rating}</span>
                    <img class="item__inner_wait" src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="시계 이미지" />
                </div>`
                : ''}
            </div>

            ${axis === 'col' ?
            `<div class="detail-wrapper">${ImagePosterDetailComponent(content)}</div>` :
            `<div class="detail-more-wrapper">${ImagePosterMoreDetailComponent(content)}</div>`}
        </div>
    </a>`;
}