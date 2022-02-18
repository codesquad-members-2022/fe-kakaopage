import { $ } from "./utils.js";
import { issueComponent } from "../component/issueComponent.js";
import { advertiseComponent } from "../component/advertiseComponent.js";
import { issueObj, rowListTitleObj } from "./constants.js";
import { recommendationObj, dayofWeekObj } from "./dummy.js";
import { rowListContainer } from "../container/rowListContainer.js";
import { weekListContainer } from "../container/weekListContainer.js";

export const main = {
    addAdvertiseComponent: function() {
        return advertiseComponent();
    },
    removeAdvertiseComponent: function() {
        const advertiseElement = $(".advertise");
        if(advertiseElement === null) return;
        advertiseElement.remove();
    },
    addIssueComponent: function(menu) {
        if(Array.isArray(issueObj[menu]) && issueObj[menu].length === 0) return;
        return issueComponent(issueObj[menu]);
    },
    removeIssueComponent: function() {
        const issueElement = $(".issue");
        if(issueElement === null) return;
        issueElement.remove();
    },
    addRecommendationComponent: function(menu) {
        if(Array.isArray(recommendationObj[menu]) && recommendationObj[menu].length === 0) return;
        return rowListContainer(rowListTitleObj.recommendation, recommendationObj[menu]);
    },
    removeRecommendationComponent: function() {
        const recommendElement = $(".recommend");
        if(recommendElement === null) return;
        recommendElement.remove();
    },
    addWeeksComponent: function(menu) {
        console.log(menu === "요일연재");
        if(menu !== "요일연재") return;
        return weekListContainer(menu, dayofWeekObj);
    },
    removeWeeksComponent: function() {
        const weeksElement = $(".weeks");
        if(weeksElement === null) return;
        weeksElement.remove();
    }
}