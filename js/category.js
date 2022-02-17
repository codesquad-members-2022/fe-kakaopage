import { $ } from "./utils.js";
import { main } from "./main.js";

const category = {
    menuClick: function() {
        const categoryEl = $(".main__nav-ul");
        categoryEl.addEventListener("click", (e) => {
            if(e.target.tagName === 'A') {
                // 똑같은 곳 눌렀을시 -> return 

                this.changeColor(categoryEl.children);
                e.target.classList.add('main__nav_link_active');

                // 각 메뉴에 맞게 컴포넌트 핸들링?
                // 나중에 함수로 따로 빼기
                if(e.target.textContent === '홈') {
                    main.addIssueComponent('홈');
                } else if(e.target.textContent === '요일연재') {
                    main.removeIssueComponent();
                } else if(e.target.textContent === '웹툰') {
                    main.removeIssueComponent();
                } else if(e.target.textContent === '소년') {
                    main.addIssueComponent('소년');
                } else if(e.target.textContent === '드라마') {
                    main.addIssueComponent('드라마');
                } else if(e.target.textContent === '로맨스') {
                    main.addIssueComponent('로맨스');
                } else if(e.target.textContent === '로판') {
                    main.addIssueComponent('로판');
                } else if(e.target.textContent === '액션무협') {
                    main.addIssueComponent('액션무협');
                } else if(e.target.textContent === 'BL') {
                    main.addIssueComponent('BL');
                }
            }
        });
    },
    
    changeColor: function(elements) {
        for(const element of elements) {
            element.firstChild.classList.remove('main__nav_link_active')
        }
    }
}

export { category }