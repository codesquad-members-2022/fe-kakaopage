function renderNav(className, textLists) {
    const lists = textLists.reduce((acc,textList) => {
        return acc + `<li class="${className}-list">${textList}</li>`;
    }, '')

    return `<nav class="${className}">
    <ul class="${className}-lists">
        ${lists}
    </ul>
</nav>`
}

export { renderNav };
