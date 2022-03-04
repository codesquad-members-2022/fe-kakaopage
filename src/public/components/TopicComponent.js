export const TopicComponent = (title) => {
    return /* html */ `<div class="topic">
                <h1 class="topic__title">${title}</h1>
                <a class="topic__see" href="#">
                    <span>더보기</span>
                    <img class="topic__see_img" src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e" alt="더보기 이미지"/>
                </a>
            </div>`;
}
