import { IssueComponent } from "../component/IssueComponent.js";
import { AdvertiseComponent } from "../component/AdvertiseComponent.js";
import { issueObj, rowListTitleObj } from "./constants.js";
import { WebtoonData } from "./dummy.js";
import { RowListContainer } from "../container/RowListContainer.js";
import { WeekListContainer } from "../container/WeekListContainer.js";

export const ContentListInfos = {
    addAdvertiseComponent() {
        return AdvertiseComponent();
    },
    addIssueComponent(menu) {
        if(Array.isArray(issueObj[menu]) && issueObj[menu].length === 0) return;
        return IssueComponent(issueObj[menu]);
    },
    addRecommendationComponent(menu) {
        if(menu === '0' || menu === '1' || menu === '2') return;
        const recommendData = WebtoonData.filter(data => data.genre === menu);
        return RowListContainer(rowListTitleObj.recommendation, recommendData.splice(0, 4));
    },
    addWeeksComponent(menu) {
        if(menu !== '1') return;
        const weeksData = WebtoonData.filter(data => data.week.includes(2));
        return WeekListContainer(rowListTitleObj.weeks, weeksData);
    },
    addRomanceComponent(menu) {
        if(menu !== '0') return;
        const romanceData = WebtoonData.filter(data => data.genre === '4');
        return RowListContainer(rowListTitleObj.romanceTop, romanceData.splice(0, 5));
    },
    addNobilityComponent(menu) {
        if(menu !== '0') return;
        const nobilityData = WebtoonData.filter(data => data.genre === '6');
        return RowListContainer(rowListTitleObj.nobilityTop, nobilityData.splice(0, 5));
    },
    addDramaComponent(menu) {
        if(menu !== '0') return;
        const dramaData = WebtoonData.filter(data => data.genre === '4');
        return RowListContainer(rowListTitleObj.dramaTop, dramaData.splice(0, 5));
    }
}