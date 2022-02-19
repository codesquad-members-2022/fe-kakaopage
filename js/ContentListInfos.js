import { $, removeElement } from "./utils.js";
import { IssueComponent } from "../component/IssueComponent.js";
import { AdvertiseComponent } from "../component/AdvertiseComponent.js";
import { issueObj, rowListTitleObj } from "./constants.js";
import { recommendationObj, dayofWeekObj } from "./dummy.js";
import { RowListContainer } from "../container/RowListContainer.js";
import { WeekListContainer } from "../container/WeekListContainer.js";

export const ContentListInfos = {
    addAdvertiseComponent() {
        return AdvertiseComponent();
    },
    removeAdvertiseComponent() {
        const advertiseElement = $(".advertise");
        removeElement(advertiseElement);
    },
    addIssueComponent(menu) {
        if(Array.isArray(issueObj[menu]) && issueObj[menu].length === 0) return;
        return IssueComponent(issueObj[menu]);
    },
    removeIssueComponent() {
        const issueElement = $(".issue");
        removeElement(issueElement);
    },
    addRecommendationComponent(menu) {
        if(Array.isArray(recommendationObj[menu]) && recommendationObj[menu].length === 0) return;
        return RowListContainer(rowListTitleObj.recommendation, recommendationObj[menu]);
    },
    removeRecommendationComponent() {
        const recommendElement = $(".recommend");
        removeElement(recommendElement);
    },
    addWeeksComponent(menu) {
        if(menu !== "요일연재") return;
        return WeekListContainer(menu, dayofWeekObj);
    },
    removeWeeksComponent() {
        const weeksElement = $(".weeks");
        removeElement(weeksElement);
    }
}