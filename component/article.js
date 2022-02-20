function renderArticle(className, id ='', headerTittle, headerSubText = '') {
    return `
    <article class="${className}" id="${id}">
        <header class="article__header">
        <div class="article__header-wrapper">
            <div class="article__header-text-wrapper">
                <h2 class="article__header-tittle">${headerTittle}</h2>
                <span class="article__header-sub-text">${headerSubText}</span>
            </div>
            <button class="article__header-button">더보기 ></button>
        </div>
        </header>
    </article>`
}

export { renderArticle };