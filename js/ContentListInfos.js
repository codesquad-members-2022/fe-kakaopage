import { IssueComponent } from "../component/IssueComponent.js";
import { BannerComponent } from "../component/BannerComponent.js";
import { issueObj, rowListTitleObj } from "./constants.js";
import { WebtoonData } from "./dummy.js";
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
        const recommendData = WebtoonData.filter(data => data.genre === menu).slice(0, 4);
        return RowListContainer(rowListTitleObj.recommendation, recommendData);
    },
    addFilterComponent(menu) {
        if(menu !== '요일연재') return;
        return FilterComponent();
    },
    addWeekComponent(menu) {
        if(menu !== '요일연재') return;
        return WeekComponent(today);
    },
    addWeeksComponent(menu, today) {
        if(menu !== '요일연재') return;
        const weeksData = WebtoonData.filter(data => data.week.includes(today)).sort((a, b) => b.rating - a.rating);
        return WeekListContainer(rowListTitleObj.weeks, weeksData);
    },
    addRomanceComponent(menu) {
        if(menu !== '홈') return;
        const romanceData = WebtoonData.filter(data => data.genre === '로맨스').slice(0, 5);
        return RowListContainer(rowListTitleObj.romanceTop, romanceData);
    },
    addNobilityComponent(menu) {
        if(menu !== '홈') return;
        const nobilityData = WebtoonData.filter(data => data.genre === '로판').slice(0, 5);
        return RowListContainer(rowListTitleObj.nobilityTop, nobilityData);
    },
    addDramaComponent(menu) {
        if(menu !== '홈') return;
        const dramaData = WebtoonData.filter(data => data.genre === '드라마').slice(0, 5);
        return RowListContainer(rowListTitleObj.dramaTop, dramaData);
    },
    addBoyComponent(menu) {
        if(menu !== '홈' && menu !== '소년') return;
        const boyData = WebtoonData.filter(data => data.genre === '소년').slice(0, 3);
        return ColumnListContainer(rowListTitleObj.boyTop, boyData);
    },
    addDailyRankingComponent(menu) {
        if(menu !== '홈') return;
        const dailyRankingData = WebtoonData.sort((a, b) => {
            return b.rating - a.rating;
        }).slice(0, 3);
        return ColumnListContainer(rowListTitleObj.dailyRankingTop, dailyRankingData);
    },
    addWebToonComponent(menu) {
        if(menu !== '웹툰') return;
        return ColumnListContainer(rowListTitleObj.webtoons, WebtoonData);
    },
    addTodayGiftComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        const todayGiftData = WebtoonData.filter(data => data.genre === menu).slice(0, 4);
        return ColumnListContainer(rowListTitleObj.todayGift, todayGiftData);
    },
    addPopularityComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        const popularityData = WebtoonData.filter(data => data.genre === menu).sort((a, b) => b.rating - a.rating).slice(0, 4);
        return ColumnListContainer(rowListTitleObj.popularity, popularityData);
    },
    addExclusiveComponent(menu) {
        if(menu === '홈' || menu === '요일연재' || menu === '웹툰') return;
        const exclusiveData = WebtoonData.filter(data => data.genre === menu).sort((a, b) => b.subscriptions - a.subscriptions).slice(0, 4);
        return RowListContainer(rowListTitleObj.exclusive, exclusiveData);
    }
}