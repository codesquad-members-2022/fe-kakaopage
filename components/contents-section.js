function createContentsSection({id = '', header}) {
    const section = document.createElement('section');
    section.className = 'contents-section';
    section.id = id;
    section.innerHTML = `
    <div class="contents-header">
        <h2>${header}</h2>
        <div>
            <a href="">더보기 ></a>
        </div>
    </div>
    <div class="contents-wrapper"></div>
    `
    return section;
}

export { createContentsSection };