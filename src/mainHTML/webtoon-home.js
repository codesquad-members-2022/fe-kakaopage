import { createBannerSection } from "../components/banner-section.js";
import { createContentVerticalSmall } from "../components/content-vertical-small.js";
import { createContentsSection } from "../components/contents-section.js";
import { createDayTopSection } from "../components/day-top-section.js";
import { createEventSlide } from "../components/event-slide.js";
import { createMainSlide } from "../components/main-slide.js";
import romanceTopData from "../data/webtoon/home/romance-top.js";

const sectionDatas = [
  { id: "new-work-top-section", header: "기대신작 TOP", contents: null },
  {
    id: "romance-top-section",
    header: "로맨스 TOP",
    contents: romanceTopData.map((data) => createContentVerticalSmall(data)).join(),
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
const dayTopData = {
  id: "day-top-section",
  header: "요일 연재 TOP",
  contentsNumber: "1,624",
};

export default function ({ mainSlideData }) {
  return [
    createMainSlide(mainSlideData),
    createBannerSection(),
    createDayTopSection(dayTopData),
    sectionDatas.map((sectionData) => createContentsSection(sectionData)).join(""),
  ].join("");
}
