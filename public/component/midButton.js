function renderMidButton(listNames) {
    let lists = listNames.reduce((acc, listName) => {
        return acc + `<button class="mid-button">${listName}</button>`
    }, '')
    return `<div class="mid-button__wrapper">
    ${lists}
    </div>`
}

export { renderMidButton };
