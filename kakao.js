import { webtoonData } from "./data.js";
import { webtoonCard } from "./webtoon.js";

const weekCategory = document.querySelector(".tab .main_category ul");
const mainCategory = document.querySelector(".main_category ul");

function mainContent(event){
    if(event.target.tagName !=="LI")return;
    else{
        mainCategory.querySelector(".sub_active").classList.remove("sub_active");
        event.target.classList.add("sub_active");
    }
}

function getDay(event){
    if(event.target.tagName !== "LI") return;
    else{
        weekCategory.querySelector(".weekend_check").classList.remove("weekend_check");
        weekCategory.querySelector(".sub_active").classList.remove("sub_active");
        event.target.classList.add("weekend_check");
        event.target.classList.add("sub_active"); 
        
        showWebtoon(event);
    }
}

function showWebtoon(event){
    const dayWebToonData = webtoonData.filter(function(web){
        return event.target.dataset.value === web.day
    });
    
    // document.querySelector('.webtoon_list ul').innerHTML = "";
    console.log(dayWebToonData);
    makeHtml(dayWebToonData);
}


mainCategory.addEventListener("click",mainContent);
weekCategory.addEventListener("click",getDay);