import { IssueComponent } from "../components/IssueComponent.js";
import { BannerComponent } from "../components/BannerComponent.js";
import { rowListTitleObj } from "../constants/constants.js";
import { RowListContainer } from "../container/RowListContainer.js";
import { WeekListContainer } from "../container/WeekListContainer.js";
import { ColumnListContainer } from "../container/ColumnListContainer.js";
import { FilterComponent } from "../components/FilterComponent.js";
import { WeekComponent } from "../components/WeekComponent.js";
import { today } from "../utils/utils.js";

export const ContentListInfos = {
    addBannerComponent(bannerData) {
        return BannerComponent(bannerData);
    },
    addIssueComponent(issueData) {
        return IssueComponent(issueData);
    },
    addRecommendationComponent(recommendData) {
        return RowListContainer(rowListTitleObj.recommendation, recommendData);
    },
    addFilterComponent() {
        return FilterComponent();
    },
    addWeekComponent() {
        return WeekComponent(today);
    },
    addWeeksComponent(weeksData) {
        return WeekListContainer(rowListTitleObj.weeks, weeksData);
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
    addDailyRankingComponent(topData) {
        return ColumnListContainer(rowListTitleObj.dailyRankingTop, topData);
    },
    addWebToonComponent(WebtoonData) {
        return ColumnListContainer(rowListTitleObj.webtoons, WebtoonData);
    },
    addTodayGiftComponent(todayGiftData) {
        return ColumnListContainer(rowListTitleObj.todayGift, todayGiftData);
    },
    addPopularityComponent(popularityData) {
        return ColumnListContainer(rowListTitleObj.popularity, popularityData);
    },
    addExclusiveComponent(exclusiveData) {
        return RowListContainer(rowListTitleObj.exclusive, exclusiveData);
    }
}