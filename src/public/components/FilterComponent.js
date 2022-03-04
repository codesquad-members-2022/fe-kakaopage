export const FilterComponent = () => {
    return /* html */ `
    <div class="filter">
        <div class="filter__left">
            <button class="filter_button text_selected">전체</button>
            <div class="filter__separator"></div>
                <button class="filter_button">웹툰</button>
                <div class="filter__separator"></div>
                <button class="filter_button"><img class="filter__left_img" src="https://static-page.kakao.com/static/common/ico_wait-off.svg?cb16228c070950e8b1bb33d712ac8b7a" alt="웹툰" />웹툰</button>
            </div>
        <div class="filter__right">
            <span class="filter_genre_finds">전체(180)</span>
            <img class="filter_sortImg" src="https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345" alt="장르별 필터 보기" />
        </div>
    </div>
    `;
}