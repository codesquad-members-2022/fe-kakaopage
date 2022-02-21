import { $ } from "./utils.js";
import { ContentListInfos } from "./ContentListInfos.js";

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
            break;
        case '1':
            contents.insertAdjacentHTML("beforeend", ContentListInfos.addWeeksComponent(menu));
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        default:
            console.log(`${menu} is not valid.`);
    }
}