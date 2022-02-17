import { $ } from "./utils.js";
import { issueComponent } from "../component/issueComponent.js";
import { advertiseComponent } from "../component/advertiseComponent.js";
import { issueObj, recommendationObj, rowListTitleObj } from "./constants.js";
import { rowListComponent } from "../component/rowListComponent.js";

const main = {
    addAdvertiseComponent: function() {
        this.removeAdvertiseComponent();
        return advertiseComponent();
    },
    removeAdvertiseComponent: function() {
        const advertiseEl = $(".advertise");
        if(advertiseEl === null) return;
        advertiseEl.remove();
    },
    addIssueComponent: function(menu) {
        this.removeIssueComponent();
        return issueComponent(issueObj[menu]);
    },
    removeIssueComponent: function() {
        const issueEl = $(".issue");
        if(issueEl === null) return;
        issueEl.remove();
    },
    addRecommendationComponent: function(menu) {
        this.removeRecommendationComponent();
        return rowListComponent(rowListTitleObj.recommendation, recommendationObj[menu]);
    },
    removeRecommendationComponent: function() {
        const recommendEl = $(".recommend");
        if(recommendEl === null) return;
        recommendEl.remove();
    }
}

export { main }