const getSectionTopTemplate = (data) => {
    const worksNum = data.worksLength ?
    `<span class="section__work-number"> (${data.worksLength})</span>`
    : '';
    return (
        `<div class="section__top">
            <h3 class="section__title">${data.sectionTitle}${worksNum}</h3>
            <a href="#" class="section__more-button right-button">더보기</a>
        </div>`
    );
}

export { getSectionTopTemplate };