import { $ } from "./utils.js";
import { issueComponent } from "../component/issueComponent.js";
import { issueObj } from "./constants.js";

const main = {
    addIssueComponent: function(menu) {
        this.removeIssueComponent();
        const carousel = $(".carousel");
        carousel.insertAdjacentHTML("afterend", issueComponent(issueObj[menu]));
    },
    removeIssueComponent: function() {
        const issueEl = $(".issue");
        if(issueEl === null) return;
        issueEl.remove();
    }
}

export { main }