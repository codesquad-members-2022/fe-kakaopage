function createContentsSection({id = '', header}) {
    return `
    <section class="contents-section${id && `" id="${id}"`}">
        <div class="contents-header">
            <h2>${header}</h2>
            <div>
                <a href="">더보기 ></a>
            </div>
        </div>
        <div class="contents-wrapper"></div>
    </section>
    `
}

export { createContentsSection };