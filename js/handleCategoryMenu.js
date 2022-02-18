import { $ } from "./utils.js";
import { main } from "./main.js";

export const handleCategoryMenu = (menu) => {
    const carousel = $(".carousel");
    main.removeAdvertiseComponent();
    main.removeRecommendationComponent();
    main.removeIssueComponent();
    main.removeWeeksComponent();

    carousel.insertAdjacentHTML("afterend", main.addAdvertiseComponent(menu) ? main.addAdvertiseComponent(menu) : "");
    carousel.insertAdjacentHTML("afterend", main.addRecommendationComponent(menu) ? main.addRecommendationComponent(menu) : "");
    carousel.insertAdjacentHTML("afterend", main.addIssueComponent(menu) ? main.addIssueComponent(menu) : "");
    carousel.insertAdjacentHTML("afterend", main.addWeeksComponent(menu) ? main.addWeeksComponent(menu) : "");
}