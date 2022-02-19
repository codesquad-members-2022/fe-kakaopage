import {weeklyPublicationTemplate} from "./weeklyPublication.js";

init();

function init() {
  createHTML("요일연재");
}

const subCategoryDivs = document.querySelectorAll(".sub_category");
subCategoryDivs.forEach((subCategoryDiv) => {
  subCategoryDiv.addEventListener("click", selectSubCategory);
});
let previousSelectedSubCategory = document.createElement("div");

function selectSubCategory(event) {
  const subCategoryDiv = event.target;
  const subCategory = event.target.innerText;
  previousSelectedSubCategory.classList.remove("bold");
  subCategoryDiv.classList.add("bold");
  previousSelectedSubCategory = subCategoryDiv;
  createHTML(subCategory);
}

function createHTML(subCategory) {
  const totalSection = document.querySelector(".total_section");
  switch (subCategory) {
    case "요일연재":
      totalSection.appendChild(weeklyPublicationTemplate);
      break;
    case "홈":
      const homeTemplate = createHomeTemplate();
      totalSection.innerHTML = homeTemplate;
      break;
    case "웹툰":
      totalSection.innerHTML = "";
      break;
    case "소년":
      totalSection.innerHTML = "";
      break;
    case "드라마":
      totalSection.innerHTML = "";
      break;
    case "로맨스":
      totalSection.innerHTML = "";
      break;
    case "로판":
      totalSection.innerHTML = "";
      break;
    case "액션무협":
      totalSection.innerHTML = "";
      break;
    case "BL":
      totalSection.innerHTML = "";
      break;
  }
}

function createHomeTemplate() {
  return `
  <section class="today_category_container">
    <div class="grid_container">
      <div class="today_category grid_item">오늘 UP</div>
      <div class="today_category grid_item">오늘 신작</div>
      <div class="today_category grid_item">오리지널</div>
      <div class="today_category grid_item">완결까지 정주행</div>
      <div class="today_category grid_item">독립운동가 웹툰</div>
      <div class="today_category grid_item">오늘 랭킹 1위</div>
    </div>
  </section>
  `;
}
