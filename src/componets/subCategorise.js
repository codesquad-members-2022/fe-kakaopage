const getSubCategoryTemp = (dataEl) => {
    const updateNum = dataEl.updateNum ?
    ` <spn class="sub-category__number">${dataEl.updateNum}</spn>`
    : '';
    return (
        `<li class="sub-category">
            <a href="${dataEl.link}" class="sub-category__link">${dataEl.category}${updateNum}</a>
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