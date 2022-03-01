import { days } from "../js/utils.js";

export const WeekComponent = (today) => {
    return /* html */`
        <nav class="week__nav">
            <ul class="week__nav-ul">
                ${days.reduce((prev, cur, index) => {
                    prev += `<li class="week__nav_day">`;

                    return days[index] === today ?
                    prev += `<a data-id=${days[index]} class="week__nav_link week__nav_day_selected">${cur}</a></li>` :
                    prev += `<a data-id=${days[index]} class="week__nav_link">${cur}</a></li>`
                }, "")}
            </ul>
        </nav>`
}