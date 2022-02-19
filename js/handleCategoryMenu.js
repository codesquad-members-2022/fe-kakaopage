import { $ } from "./utils.js";
import { ContentListInfos } from "./ContentListInfos.js";

export const handleCategoryMenu = (menu) => {
    const carousel = $(".carousel");
    ContentListInfos.removeAdvertiseComponent();
    ContentListInfos.removeRecommendationComponent();
    ContentListInfos.removeIssueComponent();
    ContentListInfos.removeWeeksComponent();

    carousel.insertAdjacentHTML("afterend", ContentListInfos.addAdvertiseComponent(menu) ? ContentListInfos.addAdvertiseComponent(menu) : "");
    carousel.insertAdjacentHTML("afterend", ContentListInfos.addRecommendationComponent(menu) ? ContentListInfos.addRecommendationComponent(menu) : "");
    carousel.insertAdjacentHTML("afterend", ContentListInfos.addIssueComponent(menu) ? ContentListInfos.addIssueComponent(menu) : "");
    carousel.insertAdjacentHTML("afterend", ContentListInfos.addWeeksComponent(menu) ? ContentListInfos.addWeeksComponent(menu) : "");
}