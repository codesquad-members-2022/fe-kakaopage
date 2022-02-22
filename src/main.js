import { renderDailyTop, renderGenreTop } from "./Render.js"
import { setWeekNavEvent } from "./NavEventController.js"

function init(){
    renderDailyTop();
    renderGenreTop();
    setWeekNavEvent();
}

init();