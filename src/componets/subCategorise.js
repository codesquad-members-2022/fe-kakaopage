const getSubCategoryTemp = (dataEl) => {
    return (
        `<li class="sub-category">
            <a href="${dataEl.link}" class="sub-category__link">${dataEl.category}<spn class="sub-category__number">${dataEl.updateNum}</spn></a>
        </li>`
    );
}

const getSubCategoriesTemp = (data) => {
    const subCategoryList = data.reduce((acc, cur) => acc += getSubCategoryTemp(cur), '');
    return (
        `<div class="section section-sub-categorise">
            <ul class="sub-categories">
                ${subCategoryList}
            </ul>
        </div>`
    );
}

export { getSubCategoriesTemp };