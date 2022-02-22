import { $, today } from "./utils.js";
import { ContentListInfos } from "./ContentListInfos.js";
import { nav } from "./nav.js";

const commonGenreRender = (element, menu) => {
    element.insertAdjacentHTML("beforeend", ContentListInfos.addExclusiveComponent(menu));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addTodayGiftComponent(menu));
    element.insertAdjacentHTML("beforeend", ContentListInfos.addPopularityComponent(menu));
}

export const handleCategoryMenu = (menu) => {
    const contents = $(".main__contents");
    contents.innerHTML = "";
    contents.insertAdjacentHTML("beforeend", ContentListInfos.addIssueComponent(menu) ? ContentListInfos.addIssueComponent(menu) : "");
    contents.insertAdjacentHTML("beforeend", ContentListInfos.addAdvertiseComponent(menu) ? ContentListInfos.addAdvertiseComponent(menu) : "");
    contents.insertAdjacentHTML("beforeend", ContentListInfos.addRecommendationComponent(menu) ? ContentListInfos.addRecommendationComponent(menu) : "");
    switch(menu) {
        case '0':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addRomanceComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addNobilityComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addDramaComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addDailyRankingComponent(menu));
            break;
        case '1':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeekComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addFilterComponent(menu));
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(menu, today));
            nav.weekClick();
            break;
        case '2':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWebToonComponent(menu));
            break;
        case '3':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addBoyComponent(menu));
            commonGenreRender(contents, menu);
            break;
        case '4':
            commonGenreRender(contents, menu);
            break;
        case '5':
            commonGenreRender(contents, menu);
            break;
        case '6':
            commonGenreRender(contents, menu);
            break;
        case '7':
            commonGenreRender(contents, menu);
            break;
        case '8':
            commonGenreRender(contents, menu);
            break;
        default:
            console.log(`${menu} is not valid.`);
    }
}