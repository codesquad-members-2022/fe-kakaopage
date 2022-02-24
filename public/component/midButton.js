function renderMidButton(listNames) {
    let lists = '';
    listNames.forEach((listName) => {
        lists += `<button class="mid-button">${listName}</button>`
    })

    return `<div class="mid-button__wrapper">
    ${lists}
    </div>`
}

export { renderMidButton };
