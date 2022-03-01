import { $, fetchData, days, today } from "./utils.js";
import { ContentListInfos } from "./ContentListInfos.js";
import { categoryObj } from "./constants.js";

const commonGenreRender = async (element, categoryId) => {
    const issueData = await fetchData('category/issue', categoryId);
    const recommendData = await fetchData('webtoon/recommend', categoryId);
    const bannerData = await fetchData('category/banner', categoryId);
    const popularityData = await fetchData('webtoon/popularity', categoryId);
    const exclusiveData = await fetchData('webtoon/exclusive', categoryId);
    const todayGiftData = await fetchData('webtoon/todayGift', categoryId);
    const dailyRankData = await fetchData('webtoon/dailyRank', categoryId);

    element.insertAdjacentHTML("beforeend", ContentListInfos.addIssueComponent(issueData));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addRecommendationComponent(recommendData));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addBannerComponent(bannerData));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addPopularityComponent(popularityData));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addExclusiveComponent(exclusiveData));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addTodayGiftComponent(todayGiftData));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addDailyRankingComponent(dailyRankData));
}

export const handleCategoryMenu = async (menu) => {
    const contents = $(".main__contents");
    contents.innerHTML = "";

    try{
        const categoryId = categoryObj[menu];
        switch(menu) {
            case '홈':
                break;
            case '요일연재':
                const weeksData = await fetchData('webtoon/weeks', days.indexOf(today));
                contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeekComponent());
                contents.insertAdjacentHTML("beforeend", ContentListInfos.addFilterComponent());
                contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(weeksData));
                break;
            case '웹툰':
                const webtoonsData = await fetchData('webtoon');
                contents.insertAdjacentHTML("beforeend", ContentListInfos.addWebToonComponent(webtoonsData));
                break;
            case '소년':
            case '드라마':
            case '로맨스':
            case '로판':
            case '액션무협':
            case 'BL':
                commonGenreRender(contents, categoryId);
                break;
            default:
                console.log(`${menu} is not valid.`);
        }
    } catch(error) {
        console.log(error);
    }
}