import { $ } from "./utils.js";
import { main } from "./main.js";

export const handleCategoryMenu = (menu) => {
    // if문 .... 나중에 함수로 따로 빼기
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
        carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('액션무협'));
        carousel.insertAdjacentHTML("afterend", main.addIssueComponent('액션무협'));
    } else if(menu === 'BL') {
        carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent('BL'));
        carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent('BL'));
        carousel.insertAdjacentHTML("afterend", main.addIssueComponent('BL'));
    }
}