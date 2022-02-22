import {weeklyPublicationTemplate} from "./weeklyPublication.js";
import {homeTemplate} from "./home.js";

init();

function init() {
  createHTML("요일연재");
}

let previousSelectedSubCategory = document.createElement("div");
const subCategoryNav = document.querySelector(".sub_category_navigation");
subCategoryNav.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (targetElement.tagName === "DIV") {
    selectSubCategory(targetElement);
    createHTML(targetElement.innerText);
  }
});

function selectSubCategory(subCategoryDiv) {
  previousSelectedSubCategory.classList.remove("bold");
  subCategoryDiv.classList.add("bold");
  previousSelectedSubCategory = subCategoryDiv;
}

function createHTML(subCategory) {
  const subCategorySection = document.querySelector(".sub_category_section");
  switch (subCategory) {
    case "요일연재":
      subCategorySection.innerHTML = weeklyPublicationTemplate;
      break;
    case "홈":
      subCategorySection.innerHTML = homeTemplate;
      break;
    case "웹툰": case "소년": case "드라마": case "로맨스": case "로판": case "액션무협": case "BL":
      subCategorySection.innerHTML = "";
      break;
  }
}
