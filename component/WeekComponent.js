export const WeekComponent = (today, contents) => {
    const days = ['월', '화', '수', '목', '금', '토', '일', '완결'];
    return /* html */`
        <nav class="week__nav">
            <ul class="week__nav-ul">
                ${days.reduce((prev, cur, index) => {
                    prev += `<li class="week__nav_day">`;
                    
                    return index === today ?
                    prev += `<a data-id=${index} class="week__nav_link week__nav_day_selected">${cur}</a></li>` :
                    prev += `<a data-id=${index} class="week__nav_link">${cur}</a></li>`
                }, "")}
            </ul>
        </nav>`
}