
function renderSections(_id, img, url, ranking='') {
    return  `<section class="section__book">
    <a href = "${url}">
    <div class="section__book-image-wrapper">
        <img src="${img}" alt="images">
        <div class="section__book-image-infor">
            <span>${ranking}위</span>
            <i class="fas fa-solid fa-clock"></i>
        </div>
    </div>
    <div class="section__book-text-wrapper">
        <span class="section__book-text">${_id}</span>
        <span class="section__book-text"><i class="fas fa-user-alt"></i> 28.5만명</span>
    </div>
    </a>
</section>`
}

function renderSectionWrapper(sections) {
    return `<div class="section__book-wrapper">${sections}
    </div>`
}

export {renderSections, renderSectionWrapper };
