import { $ } from "./utils.js";
import { handleCategoryMenu } from "./handleCategoryMenu.js";
import { ContentListInfos } from "./ContentListInfos.js";

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
        contents.addEventListener('click', ({ target }) => {
            if(target.className !== 'week__nav_link') return;
            
            const weeks = $('.weeks');
            const weekElement = $('.week__nav-ul');

            this.removeLinkColor(weekElement.children, 'week__nav_day_selected');
            target.classList.add('week__nav_day_selected');

            weeks.remove();
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent('1', +target.dataset.id));
        });
    },
    removeLinkColor(elements, style) {
        for(const element of elements) {
            element.firstChild.classList.remove(style)
        }
    }
}