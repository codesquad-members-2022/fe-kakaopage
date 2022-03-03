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

// ==================slide
function showSlides(){
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slides > div");
    const prevBtn = document.querySelector(".slider_btn_left");
    const nextBtn = document.querySelector(".slider_btn_right");
    let currentSlide = 0;
    const slideWidth = 720;
    const slideCount = slide.length;
    let timer = 0;

    function appendClone(){
        for (let i = 0; i < slideCount; i++) {
            const cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add("clone");
            slides.appendChild(cloneSlide);
        }
    }

    function prependClone(){
        for (let i = slideCount - 1; i >= 0; i--) {
            const cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add("clone");
            slides.prepend(cloneSlide);
        }
    }

    function makeWidth() {
        const currentSlides = document.querySelectorAll(".slides > div");
        const newSlideCount = currentSlides.length;
        const newWidth = `${slideWidth * newSlideCount}px`;
        slides.style.width = newWidth;
    }

    function getFirstSlide() {
        const settingSlide = -slideWidth * slideCount;
        slides.style.transform = `translateX(${settingSlide}px)`;
    }

    function moveSlide(num) {
    slides.style.left = `${-num * slideWidth}px`;
    currentSlide = num;
        if (currentSlide === slideCount || currentSlide === -slideCount) {
            setTimeout(function () {
            slides.classList.remove("activeSlide");
            slides.style.left = "0px";
            currentSlide = 0;
            },500);
            setTimeout(function () {
            slides.classList.add("activeSlide");
            },600);
        }
    }

    prevBtn.addEventListener("click", () => {
        moveSlide(currentSlide - 1);
    });

    nextBtn.addEventListener("click", () => {
        moveSlide(currentSlide + 1);
    });
    
// 자동슬라이드
    function autoSlide(){
        if(timer == 0){
            timer = setInterval(function(){
            moveSlide(currentSlide + 1);
            },3000);
        }
    }

    function stopSlide(){
        clearInterval(timer);
        timer = 0;
    }

    function makeSlide() {
        appendClone();
        prependClone();
        makeWidth();
        getFirstSlide();
        autoSlide();
        setTimeout(function () {
            slides.classList.add("activeSlide");
        }, 100);
    }
    
    makeSlide();
};

showSlides();


