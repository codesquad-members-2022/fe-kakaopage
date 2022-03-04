import {select} from "./util.js";

// createElement 에 innerHTML 을 사용하기 위해서는 HTML 에 위치시켜야한다. (appendChild 등)

export function createCategory(categoryMenus) {
    const $category = document.createElement('div');
    $category.className = 'category';
    $category.innerHTML = `<ul class="l-center category__menus"></ul>`

    const $main = select('.main')
    $main.appendChild($category)

    const $categoryMenus = select('.category__menus')

    let template = ``;
    categoryMenus.forEach((menu) => template += `<li class="category__menu">${menu}</li>`)
    $categoryMenus.innerHTML = template;
}

export function initCategory() {
    return fetch('http://localhost:3000/webtoon/categoryMenus')
        .then(res => res.json())
        .then(data => createCategory(data))
}