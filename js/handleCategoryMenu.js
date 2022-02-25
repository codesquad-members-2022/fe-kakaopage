import { $, today } from "./utils.js";
import { ContentListInfos } from "./ContentListInfos.js";

const commonGenreRender = (element, menu) => {
    element.insertAdjacentHTML("beforeend", ContentListInfos.addExclusiveComponent(menu));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addTodayGiftComponent(menu));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addPopularityComponent(menu));
}

export const handleCategoryMenu = (menu) => {
    const contents = $(".main__contents");
    contents.innerHTML = "";
    contents.insertAdjacentHTML("beforeend", ContentListInfos.addIssueComponent(menu) ? ContentListInfos.addIssueComponent(menu) : "");
    contents.insertAdjacentHTML("beforeend", ContentListInfos.addBannerComponent(menu) ? ContentListInfos.addBannerComponent(menu) : "");
    contents.insertAdjacentHTML("beforeend", ContentListInfos.addRecommendationComponent(menu) ? ContentListInfos.addRecommendationComponent(menu) : "");
    switch(menu) {
        case '홈':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addRomanceComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addNobilityComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addDramaComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addDailyRankingComponent(menu));
            break;
        case '요일연재':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeekComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addFilterComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(menu, today));
            break;
        case '웹툰':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWebToonComponent(menu));
            break;
        case '소년':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addBoyComponent(menu));
            commonGenreRender(contents, menu);
            break;
        case '드라마':
            commonGenreRender(contents, menu);
            break;
        case '로맨스':
            commonGenreRender(contents, menu);
            break;
        case '로판':
            commonGenreRender(contents, menu);
            break;
        case '액션무협':
            commonGenreRender(contents, menu);
            break;
        case 'BL':
            commonGenreRender(contents, menu);
            break;
        default:
            console.log(`${menu} is not valid.`);
    }
}