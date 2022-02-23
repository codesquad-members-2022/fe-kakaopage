function renderNav(className, textLists) {
    let lists = '';
    textLists.forEach((textList) => {
        lists += `<li class="${className}-list">${textList}</li>`
    })
    return `<nav class="${className}">
    <ul class="${className}-lists">
        ${lists}
    </ul>
</nav>`
}

export { renderNav };
