import { createTopListHTML } from "./HTMLCreator.js"

function renderTopList(listType, dataKey = null){
    const comicList = document.getElementById(`list-${listType}`);
    comicList.innerHTML = createTopListHTML(dataKey ? dataKey : listType);
}

function renderGenreTop(){
    const genreList = ['romance', 'rofan', 'drama', 'bl', 'boy', 'action'];
    genreList.map(genre => renderTopList(genre));
}

function renderDailyTop(selectedWeek = 'mon'){
    renderTopList('week', selectedWeek);
}

export { renderDailyTop, renderGenreTop };