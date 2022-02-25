import { createContentsSection } from "../components/contents-section.js";
import romanceTopData from "../data/webtoon/home/romance-top.js";
import { createContentVerticalSmall } from "../components/content-vertical-small.js";
import { createDayNav } from "../components/day-nav.js";
import { createEventSlide } from "../components/event-slide.js";
import { createBannerSection } from "../components/banner-section.js";
import { createGenreNav } from "../components/genre-nav.js";
import { mainContainer } from "../index.js";
import { createMainSlide } from "../components/main-slide.js";
import mainSlideData from "../data/webtoon/home/main-slide.js";
import { createDayTopSection } from "../components/day-top-section.js";

const fragment = document.createElement("div");
const sectionDatas = [
  { id: "new-work-top-section", header: "기대신작 TOP", contents: null },
  {
    id: "romance-top-section",
    header: "로맨스 TOP",
    contents: romanceTopData
      .map((data) => createContentVerticalSmall(data))
      .join(),
  },
  { id: "romance-fantasy-top-section", header: "로판 TOP", contents: null },
  { id: "drama-top-section", header: "드라마 TOP", contents: null },
  { id: "bl-gl-top-section", header: "BL/GL TOP", contents: null },
  { id: "boy-top-section", header: "소년 TOP", contents: null },
  { id: "action-top-section", header: "액션무협 TOP", contents: null },
  { id: "daily-ranking-section", header: "일간 랭킹", contents: null },
  {
    id: "recommend-event-section",
    header: "추천 이벤트",
    contents: createEventSlide(),
  },
];
fragment.innerHTML = [
  createGenreNav(),
  createMainSlide(mainSlideData),
  createBannerSection(),
  createDayTopSection({
    id: "day-top-section",
    header: '요일 연재 TOP <span class="number-of-contents">(1,624)</span>',
  }),
  sectionDatas
    .map((sectionData) => createContentsSection(sectionData))
    .join(""),
].join("");

function renderWebtoonMain() {
  mainContainer.replaceChildren(fragment);
  console.log("render");
}

export { renderWebtoonMain };
