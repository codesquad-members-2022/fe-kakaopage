//import {weeklyPublicationTemplate} from "./weeklyPublication.js";

const subCategoryDivs = document.querySelectorAll(".sub_category");
const subCategoryDetailSection = document.querySelector(".sub_category_details");
subCategoryDivs.forEach((subCategoryDiv) => {
  subCategoryDiv.addEventListener("click", selectSubCategory);
});
let previousSelectedSubCategory = document.createElement("div");

function selectSubCategory(event) {
  const subCategoryDiv = event.target;
  subCategoryDiv.classList.add("bold");
  previousSelectedSubCategory.classList.remove("bold");
  previousSelectedSubCategory = subCategoryDiv;
  createRestHTML(subCategoryDiv);
}

function createRestHTML(subCategoryDiv) {
  const subCategoryText = subCategoryDiv.innerText;
  switch (subCategoryText) {
    case "요일연재":
      const weeklyPublicationTemplate = createWeeklyPublicationTemplate();
      subCategoryDetailSection.innerHTML = weeklyPublicationTemplate;
      //subCategoryDetailSection.appendChild(weeklyPublicationTemplate);
      break;
    case "홈":
      const homeTemplate = createHomeTemplate();
      subCategoryDetailSection.innerHTML = homeTemplate;
      break;
    case "웹툰":
      subCategoryDetailSection.innerHTML = "";
      break;
    case "소년":
      subCategoryDetailSection.innerHTML = "";
      break;
    case "드라마":
      subCategoryDetailSection.innerHTML = "";
      break;
    case "로맨스":
      subCategoryDetailSection.innerHTML = "";
      break;
    case "로판":
      subCategoryDetailSection.innerHTML = "";
      break;
    case "액션무협":
      subCategoryDetailSection.innerHTML = "";
      break;
    case "BL":
      subCategoryDetailSection.innerHTML = "";
      break;
  }
}

function createWeeklyPublicationTemplate() {
  return `
  <section class="webtoon_category_container">
    <nav class="weekday_category_navigation category_align">
      <div class="weekday_category">월</div>
      <div class="weekday_category">화</div>
      <div class="weekday_category">수</div>
      <div class="weekday_category">목</div>
      <div class="weekday_category">금</div>
      <div class="weekday_category">토</div>
      <div class="weekday_category">일</div>
      <div class="weekday_category">완결</div>
    </nav>
    <nav class="webtoon_type_navigation category_align">
      <div class="webtoon_type_filter">
        <div class="webtoon_type">전체</div>
        <div class="webtoon_type">웹툰</div>
        <div class="webtoon_type"><img src="./image/wait_sign.svg" alt="wait_sign"/>웹툰</div>
      </div>
      <ul class="webtoon_genre_filter">전체(152)
        <li class="webtoon_genre none">전체</li>
        <li class="webtoon_genre none">소년</li>
        <li class="webtoon_genre none">드라마</li>
        <li class="webtoon_genre none">로맨스</li>
        <li class="webtoon_genre none">로판</li>
        <li class="webtoon_genre none">액션무협</li>
        <li class="webtoon_genre none">BL</li>
      </ul>
    </nav>
  </section>
  <section class="webtoon_board">
    <div class="webtoon">
      <div class="webtoon_preview">
        <img src="./image/1위.png" alt="first_score" />
        <div class="webtoon_score category_align">
          1위
          <img src="./image/wait_sign.svg" alt="wait_sign"/>
        </div>
      </div>
      <div class="webtoon_title">
        흑막을 버리는 데 실패했다
      </div>
      <div class="webtoon_details">
        <img src="./image/update_webtoon.svg" alt="update_webtoon" />
        <img src="./image/15years.png" alt="15years_webtoon" />
        <img src="./image/read_count.png" alt="read_count_icon" />
        <span class="read_count">29.1만명</span>
      </div>
    </div>
    <div class="webtoon">
      <div class="webtoon_preview">
        <img src="./image/1위.png" alt="1위웹툰" />
        <div class="webtoon_score category_align">
          1위
          <img src="./image/wait_sign.svg" alt="wait_sign"/>
        </div>
      </div>
      <div class="webtoon_title">
        흑막을 버리는 데 실패했다
      </div>
      <div class="webtoon_details">
        <img src="./image/update_webtoon.svg" alt="update_webtoon" />
        <img src="./image/15years.png" alt="15years_webtoon" />
        <img src="./image/read_count.png" alt="read_count_icon" />
        <span class="read_count">29.1만명</span>
      </div>
    </div>
    <div class="webtoon">
      <div class="webtoon_preview">
        <img src="./image/1위.png" alt="1위웹툰" />
        <div class="webtoon_score category_align">
          1위
          <img src="./image/wait_sign.svg" alt="wait_sign"/>
        </div>
      </div>
      <div class="webtoon_title">
        흑막을 버리는 데 실패했다
      </div>
      <div class="webtoon_details">
        <img src="./image/update_webtoon.svg" alt="update_webtoon" />
        <img src="./image/15years.png" alt="15years_webtoon" />
        <img src="./image/read_count.png" alt="read_count_icon" />
        <span class="read_count">29.1만명</span>
      </div>
    </div>
    <div class="webtoon">
      <div class="webtoon_preview">
        <img src="./image/1위.png" alt="1위웹툰" />
        <div class="webtoon_score category_align">
          1위
          <img src="./image/wait_sign.svg" alt="wait_sign"/>
        </div>
      </div>
      <div class="webtoon_title">
        흑막을 버리는 데 실패했다
      </div>
      <div class="webtoon_details">
        <img src="./image/update_webtoon.svg" alt="update_webtoon" />
        <img src="./image/15years.png" alt="15years_webtoon" />
        <img src="./image/read_count.png" alt="read_count_icon" />
        <span class="read_count">29.1만명</span>
      </div>
    </div>
    <div class="webtoon">
      <div class="webtoon_preview">
        <img src="./image/1위.png" alt="1위웹툰" />
        <div class="webtoon_score category_align">
          1위
          <img src="./image/wait_sign.svg" alt="wait_sign"/>
        </div>
      </div>
      <div class="webtoon_title">
        흑막을 버리는 데 실패했다
      </div>
      <div class="webtoon_details">
        <img src="./image/update_webtoon.svg" alt="update_webtoon" />
        <img src="./image/15years.png" alt="15years_webtoon" />
        <img src="./image/read_count.png" alt="read_count_icon" />
        <span class="read_count">29.1만명</span>
      </div>
    </div>
  </section>
  `;
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
