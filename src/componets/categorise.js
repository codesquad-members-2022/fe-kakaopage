const getCategoryTemp = (dataEl) => {
    return (
        `<li class="category"><a href="javascript:;" class="category__link" data-category="${dataEl}">${dataEl}</a></li>`
    );
}

const getCategoriesTemp = (data) => {
    const categoryList = data.reduce((acc, cur) => acc += getCategoryTemp(cur), '');
    return (
        `<ul class="categories">
            ${categoryList}
        </ul>`
    );
}

export { getCategoriesTemp };