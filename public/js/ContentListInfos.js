import { IssueComponent } from "../component/IssueComponent.js";
import { BannerComponent } from "../component/BannerComponent.js";
import { issueObj, rowListTitleObj } from "./constants.js";
import { RowListContainer } from "../container/RowListContainer.js";
import { WeekListContainer } from "../container/WeekListContainer.js";
import { ColumnListContainer } from "../container/ColumnListContainer.js";
import { FilterComponent } from "../component/FilterComponent.js";
import { WeekComponent } from "../component/WeekComponent.js";
import { today } from "./utils.js";

export const ContentListInfos = {
    addBannerComponent() {
        return BannerComponent();
    },
    addIssueComponent(menu) {
        if(Array.isArray(issueObj[menu]) && issueObj[menu].length === 0) return;
        return IssueComponent(issueObj[menu]);
    },
    addRecommendationComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        // const recommendData = WebtoonData.filter(data => data.genre === menu).slice(0, 4);
        // return RowListContainer(rowListTitleObj.recommendation, recommendData);
    },
    addFilterComponent() {
        return FilterComponent();
    },
    addWeekComponent() {
        return WeekComponent(today);
    },
    addWeeksComponent(today) {
        // const weeksData = WebtoonData.filter(data => data.week.includes(today)).sort((a, b) => b.rating - a.rating);
        // return WeekListContainer(rowListTitleObj.weeks, weeksData);
    },
    addRomanceComponent() {
        // const romanceData = WebtoonData.filter(data => data.genre === '로맨스').slice(0, 5);
        // return RowListContainer(rowListTitleObj.romanceTop, romanceData);
    },
    addNobilityComponent() {
        // const nobilityData = WebtoonData.filter(data => data.genre === '로판').slice(0, 5);
        // return RowListContainer(rowListTitleObj.nobilityTop, nobilityData);
    },
    addDramaComponent() {
        // const dramaData = WebtoonData.filter(data => data.genre === '드라마').slice(0, 5);
        // return RowListContainer(rowListTitleObj.dramaTop, dramaData);
    },
    addBoyComponent() {
        // const boyData = WebtoonData.filter(data => data.genre === '소년').slice(0, 3);
        // return ColumnListContainer(rowListTitleObj.boyTop, boyData);
    },
    addDailyRankingComponent() {
        // const dailyRankingData = WebtoonData.sort((a, b) => {
        //     return b.rating - a.rating;
        // }).slice(0, 3);
        // return ColumnListContainer(rowListTitleObj.dailyRankingTop, dailyRankingData);
    },
    addWebToonComponent() {
        // return ColumnListContainer(rowListTitleObj.webtoons, WebtoonData);
    },
    addTodayGiftComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        // const todayGiftData = WebtoonData.filter(data => data.genre === menu).slice(0, 4);
        // return ColumnListContainer(rowListTitleObj.todayGift, todayGiftData);
    },
    addPopularityComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        // const popularityData = WebtoonData.filter(data => data.genre === menu).sort((a, b) => b.rating - a.rating).slice(0, 4);
        // return ColumnListContainer(rowListTitleObj.popularity, popularityData);
    },
    addExclusiveComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        // const exclusiveData = WebtoonData.filter(data => data.genre === menu).sort((a, b) => b.subscriptions - a.subscriptions).slice(0, 4);
        // return RowListContainer(rowListTitleObj.exclusive, exclusiveData);
    }
}