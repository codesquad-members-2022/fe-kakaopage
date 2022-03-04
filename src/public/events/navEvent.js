import { $, days, fetchData, scrollMove } from "../utils/utils.js";
import { handleCategoryMenu } from "../views/handleCategoryMenu.js";
import { ContentListInfos } from "../views/ContentListInfos.js";
import { LoadingComponent } from "../components/LoadingComponent.js";

export const navEvent = {
    categoryClick() {
        const categoryElement = $(".main__nav-ul");
        categoryElement.addEventListener("click", ({ target }) => {
            if(target.tagName === 'A') {
                const navList = $('.nav-list');
                navList?.remove();

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
                weeks.remove();
                setTimeout(() => {
                    loadingElement.remove();
                }, 200);
                contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(weeksData));
            }
        });
    },
    remoteClick() {
        const navList = $('.nav-list');
        navList.addEventListener("click", (e) => {
            if(e.target.className !== 'nav-list_link') return;
            e.preventDefault();

            const component = document.querySelector(e.target.hash);
            if(component) {
                const offTop = component.getBoundingClientRect().top + window.pageYOffset - 170;
                scrollMove(offTop);
            }
        });
    },
    removeLinkColor(elements, style) {
        for(const element of elements) {
            element.firstChild.classList.remove(style);
        }
    }
}