//웹툰을 클릭한다.
const preCategoryMenu = document.querySelector(".main_category ul li:nth-child(2)")
const mainCategoryMenu = document.querySelector(".main_category ul li:nth-child(3)");
const slideShow = document.querySelector(".slideshow_slide");
const slideshowInfo = document.querySelector(".slideshow_info");


function changeContent(){
    mainCategoryMenu.classList.add("sub_active");
    preCategoryMenu.classList.remove("sub_active");

    slideShow.style.backgroundImage ="url('img/extream.jpg')";
    slideshowInfo.innerText = "외발소년의 스포츠 성장드라마";
}

mainCategoryMenu.addEventListener("click",changeContent);
