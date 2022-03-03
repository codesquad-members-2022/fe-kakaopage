import { webtoonData } from "./data.js";
import { webtoonCard } from "./webtoon.js";

const weekCategory = document.querySelector(".tab .main_category ul");
const mainCategory = document.querySelector(".main_category ul");

mainCategory.addEventListener("click",(event) => {
    if(event.target.tagName !=="LI")return;
    else{
        mainCategory.querySelector(".sub_active").classList.remove("sub_active");
        event.target.classList.add("sub_active");
    }
});

weekCategory.addEventListener("click",(event) => {
    if(event.target.tagName !== "LI") return;
    else{
        weekCategory.querySelector(".weekend_check").classList.remove("weekend_check");
        weekCategory.querySelector(".sub_active").classList.remove("sub_active");
        event.target.classList.add("weekend_check");
        event.target.classList.add("sub_active"); 
        getWebtoonData(event);
    }
});

// ==================json
function getWebtoonData(event){
    fetch('http://localhost:3000/webtoonData/data')
    .then(response => response.json())
    .then(data => getImgData(data,event))
};

function getImgData(data,event){
    document.querySelector('.webtoon_list ul').innerHTML = data.filter((dataEl) => event.target.dataset.value === dataEl.day)
    .map(e => webtoonCard(e))
    .reduce((acc,cur)=>acc+cur,"");
}



