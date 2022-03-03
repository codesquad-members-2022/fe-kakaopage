import { webtoonData } from "./data.js";
import { webtoonCard } from "./webtoon.js";

const weekCategory = document.querySelector(".tab .main_category ul");
const mainCategory = document.querySelector(".main_category ul");

function showMain(){
    function mainContentClickHandler(event){
        if(event.target.tagName !=="LI")return;
        else{
            mainCategory.querySelector(".sub_active").classList.remove("sub_active");
            event.target.classList.add("sub_active");
        }
    }
    mainCategory.addEventListener("click",mainContentClickHandler);
}

function showDayWebtoon(){
    function getDay(event){
        if(event.target.tagName !== "LI") return;
        else{
            weekCategory.querySelector(".weekend_check").classList.remove("weekend_check");
            weekCategory.querySelector(".sub_active").classList.remove("sub_active");
            event.target.classList.add("weekend_check");
            event.target.classList.add("sub_active"); 
            getWebtoonData(event);
        }
    }
    weekCategory.addEventListener("click",getDay);
}

// ==================json
function getWebtoonData(event){
    fetch('http://localhost:3000/webtoonData/data')
    .then(response => response.json())
    .then(data => document.querySelector('.webtoon_list ul').innerHTML = data.filter((e) => event.target.dataset.value === e.day)
    .map(e => webtoonCard(e))
    .reduce((acc,cur)=>acc+cur,""));
};
// ==================slide

function showSlides(){
    const slides = document.querySelectorAll('.slideshow_slide');
    const btnLeft = document.querySelector('.slider_btn_left');
    const btnRight = document.querySelector(".slider_btn_right");
    let curSlide = 0;
    const maxSlide = slides.length;
    
    function moveSlide(slide){
        slides.forEach(
            (slide,index) => (slide.style.transform = `translateX(${100 * (index-curSlide)}%)`)
        );
    }
    moveSlide(0);
    
    function nextSlide(){
        if(curSlide === maxSlide-1){
            curSlide = 0;
        }else{
            curSlide++;
        }
        moveSlide(curSlide);
    }
    
    function prevSlide(){
        if(curSlide === 0){
            curSlide = maxSlide -1;
        }else{
            curSlide--;
        }
        moveSlide(curSlide);
    }
    
    btnRight.addEventListener("click",nextSlide);
    btnLeft.addEventListener("click",prevSlide);
    setInterval(nextSlide, 3000);
};

function init(){
    showMain();
    showDayWebtoon()
    showSlides();
}
init();

