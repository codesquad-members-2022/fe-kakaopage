import { $ } from "./utils.js";
import { main } from "./main.js";

export const category = {
    menuClick: function() {
        const categoryEl = $(".main__nav-ul");
        categoryEl.addEventListener("click", (e) => {
            if(e.target.tagName === 'A') {
                const menu = e.target.textContent;
                this.removeLinkColor(categoryEl.children);
                e.target.classList.add('main__nav_link_active');
                // 각 메뉴에 맞게 컴포넌트 핸들링?

                // if문 .... 나중에 함수로 따로 빼기
                const funcs = [];
                const carousel = $(".carousel");
                if(menu === '홈') {
                    main.removeRecommendationComponent();
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('홈'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('홈'));
                } else if(menu === '요일연재') {
                    main.removeAdvertiseComponent();
                    main.removeRecommendationComponent();
                    main.removeIssueComponent();
                } else if(menu === '웹툰') {
                    main.removeAdvertiseComponent();
                    main.removeRecommendationComponent();
                    main.removeIssueComponent();
                } else if(menu === '소년') {
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('소년'));
                    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('소년'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('소년'));
                } else if(menu === '드라마') {
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('드라마'));
                    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('드라마'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('드라마'));
                } else if(menu === '로맨스') {
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('로맨스'));
                    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('로맨스'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('로맨스'));
                } else if(menu === '로판') {
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('로판'));
                    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('로판'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('로판'));
                } else if(menu === '액션무협') {
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('액션무협'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('액션무협'));
                } else if(menu === 'BL') {
                    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('액션무협'));
                    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('BL'));
                    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('BL'));
                    carousel.insertAdjacentHTML("afterend", main.addIssueComponent('BL'));
                }
            }
        });
    },
    
    removeLinkColor: function(elements) {
        for(const element of elements) {
            element.firstChild.classList.remove('main__nav_link_active')
        }
    }
}