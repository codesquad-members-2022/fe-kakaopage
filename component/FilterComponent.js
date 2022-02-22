export const FilterComponent = () => {
    return /* html */ `
    <div class="filter">
        <div class="filter__left">
            <button class="filter_button text_selected">전체</button>
            <div class="filter__separator"></div>
                <button class="filter_button">웹툰</button>
                <div class="filter__separator"></div>
                <button class="filter_button"><img class="filter__left_img" src="images/ico_wait-off.svg" alt="웹툰" />웹툰</button>
            </div>
        <div class="filter__right">
            <span class="filter_genre_finds">전체(180)</span>
            <img class="filter_sortImg" src="images/ico_sorting_arrow.svg" alt="장르별 필터 보기" />
        </div>
    </div>
    `;
}