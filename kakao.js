const mainCategoryMenu = document.querySelectorAll(".main_category ul li");
const weekend = document.querySelectorAll(".underline ul li");

const webtoonTitle = document.querySelector(".webtoon_title");
const slideShow = document.querySelector(".slideshow_slide");
const slideshowInfo = document.querySelector(".slideshow_info");

const underLine = document.querySelector(".underline");
const allWeb = document.querySelector(".all_web")


function webtoonContent(){
    mainCategoryMenu.classList.add("sub_active");
    preCategoryMenu.classList.remove("sub_active");

    slideShow.style.backgroundImage ="url('img/extream.jpg')";
    webtoonTitle.innerText="더 익스트림";
    slideshowInfo.innerText = "외발소년의 스포츠 성장드라마";

    allWeb.style.display = "none";
}

function originalContent(){
    preCategoryMenu.classList.add("sub_active");
    mainCategoryMenu.classList.remove("sub_active");

    webtoonTitle.innerText="로드 오브 머니";
    slideShow.style.backgroundImage ="url('img/roadofmoney.jpg')";
    slideshowInfo.innerText = "세상에 없던 꼴통 재벌이 되다.";

    allWeb.style.display = "flex";
}

preCategoryMenu.addEventListener("click",originalContent);
mainCategoryMenu.addEventListener("click",webtoonContent);