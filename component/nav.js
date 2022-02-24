function renderNav(className, textLists) {
    let lists = '';
    textLists.forEach((textList) => {
        lists += `<li class="${className}-list">${textList}</li>`
    })

    // textLists.reduce((acc, cur) => {
    //     cur = `<li class="${className}-list">${textList}</li>`
    //     acc + cur;
    // }, ) 
    // reduce로 수정하기.
    
    return `<nav class="${className}">
    <ul class="${className}-lists">
        ${lists}
    </ul>
</nav>`
}

export { renderNav };
