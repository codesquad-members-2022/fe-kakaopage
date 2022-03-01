import { $ } from "./utils.js";
import { handleCategoryMenu } from "./handleCategoryMenu.js";
import { ContentListInfos } from "./ContentListInfos.js";
import { serverURL } from "./constants.js";

export const nav = {
    categoryClick() {
        const categoryElement = $(".main__nav-ul");
        categoryElement.addEventListener("click", ({ target }) => {
            if(target.tagName === 'A') {
                this.removeLinkColor(categoryElement.children, 'main__nav_link_active');
                target.classList.add('main__nav_link_active');
                fetch(`${serverURL}/category/${target.dataset.id}`).then(res => res.json()).then(data => console.log(data));
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
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(target.dataset.id));
        });
    },
    removeLinkColor(elements, style) {
        for(const element of elements) {
            element.firstChild.classList.remove(style)
        }
    }
}