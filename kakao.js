const mainCategoryMenu = document.querySelector(".tab .main_category ul");

function showContent(event){
    if(event.target.tagName !== "LI") return;
    else{
        console.log(event.target);
        event.target.classList.add("weekend_check");
        event.target.classList.add("sub_active");  
    }
}

mainCategoryMenu.addEventListener("click",showContent);
