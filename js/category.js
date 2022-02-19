import { $ } from "./utils.js";
import { handleCategoryMenu } from "./handleCategoryMenu.js";

export const category = {
    menuClick() {
        const categoryElement = $(".main__nav-ul");
        categoryElement.addEventListener("click", (e) => {
            if(e.target.tagName === 'A') {
                this.removeLinkColor(categoryElement.children);
                e.target.classList.add('main__nav_link_active');
                // 각 메뉴에 맞게 컴포넌트 핸들링?
                handleCategoryMenu(e.target.textContent);
            }
        });
    },
    removeLinkColor(elements) {
        for(const element of elements) {
            element.firstChild.classList.remove('main__nav_link_active')
        }
    }
}