import { $, days, fetchData } from "./utils.js";
import { handleCategoryMenu } from "./handleCategoryMenu.js";
import { ContentListInfos } from "./ContentListInfos.js";
import { LoadingComponent } from "../component/LoadingComponent.js";

export const nav = {
    categoryClick() {
        const categoryElement = $(".main__nav-ul");
        categoryElement.addEventListener("click", ({ target }) => {
            if(target.tagName === 'A') {
                this.removeLinkColor(categoryElement.children, 'main__nav_link_active');
                target.classList.add('main__nav_link_active');
                handleCategoryMenu(target.dataset.id);
            }
        });
    },
    weekClick() {
        const contents = $('.main__contents');
        contents.addEventListener('click', async ({ target }) => {
            if(target.className !== 'week__nav_link') return;

            const weeks = $('.weeks');
            const weekElement = $('.week__nav-ul');

            this.removeLinkColor(weekElement.children, 'week__nav_day_selected');
            target.classList.add('week__nav_day_selected');

            weekElement.insertAdjacentHTML("afterend", LoadingComponent());
            const weeksData = await fetchData('webtoon/weeks', days.indexOf(target.dataset.weekday));

            if(weeksData) {
                const loadingElement = $('.loading');
                setTimeout(() => {
                    loadingElement.remove();
                    weeks.remove();
                }, 200);
                contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(weeksData));
            }
        });
    },
    removeLinkColor(elements, style) {
        for(const element of elements) {
            element.firstChild.classList.remove(style)
        }
    }
}