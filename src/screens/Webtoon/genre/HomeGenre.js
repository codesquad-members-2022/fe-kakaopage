import BigCardList from "../../Components/BigCardList.js";
import DateTop from "../../Components/DateTop.js";
import DaysTop from "../../Components/DaysTop.js";
import GenreTop from "../../Components/GenreTop.js";
import MainBanner from "../../Components/MainBanner.js";
import NavDetail from "../../Components/NavDetail.js";
import RecommendEvent from "../../Components/RecommendEvent.js";
import SubBanner from "../../Components/SubBanner.js";
import Component from "../../Component.js";
import {
  createExtendsRelation,
  updateNodeClasses,
  getComponentsTemplate,
} from "../../../utils.js";
import DaysList from "../../Components/DaysList.js";
import ContentsBox from "../../Components/ContentsBox.js";
import FullButton from "../../Components/FullButton.js";

function HomeGenre(target) {
  Component.call(this, target);
  const WEBTOONS_TOTAL_COUNT = 1318;
  const DAYS_TOP_WEBTOON_PER_PAGE = 10;

  /* 메인 배너 Component */
  const mainBanner = new MainBanner(target, { genre: "home" });
  /* Nav Detail (Webtoon Status Nav) Component */
  const navDetail = new NavDetail(target);
  /* 서브 배너 (promotion) Component */
  const subBanner = new SubBanner(target);

  const day = new Date().getDay();
  const days = ["일", "월", "화", "수", "목", "금", "토", "완결"];
  const koreaDay = days[day];

  /* 요일 연재 TOP Component */
  const daysTopBox = new ContentsBox(target, {
    title: "요일 연재 TOP",
    contents: "daysTop",
    titleNum: WEBTOONS_TOTAL_COUNT,
  });
  const daysTopBoxTarget = daysTopBox.state.contentsBodyDiv;
  const daysList = new DaysList("_", {
    koreaDay,
    count: DAYS_TOP_WEBTOON_PER_PAGE,
  });
  const daysTop = new DaysTop(daysTopBoxTarget, {
    days,
    koreaDay,
    daysList,
  });
  daysTopBox.setState({
    contentsBody: daysTop,
  });
  /* 기대 신작 TOP Component */
  const bigCardListBox = new ContentsBox(target, {
    title: "기대 신작 TOP",
    contents: "bigCardList",
    contentsBody: new BigCardList(),
  });
  /* 로판 TOP Component */
  const rofanTopBox = new ContentsBox(target, {
    title: "로판 TOP",
    contents: "rofanTop",
    contentsBody: new GenreTop("_", { genre: "로판" }),
  });
  /* 드라마 TOP Component */
  const dramaTopBox = new ContentsBox(target, {
    title: "드라마 TOP",
    contents: "dramaTop",
    contentsBody: new GenreTop("_", { genre: "드라마" }),
  });
  /* 일간 랭킹 TOP Component */
  const dateTopBox = new ContentsBox(target, {
    title: "일간 랭킹 TOP",
    contents: "dateTop",
    contentsBody: new DateTop("_", { koreaDay }),
  });
  /* 추천 이벤트 Component */
  const recommendEventBox = new ContentsBox(target, {
    title: "추천 이벤트",
    contents: "recommendEvent",
    classes: ["main__mainBanner"],
    contentsBody: new RecommendEvent(),
  });

  this.setState({
    contents: [
      mainBanner,
      navDetail,
      subBanner,
      daysTopBox,
      bigCardListBox,
      rofanTopBox,
      dramaTopBox,
      dateTopBox,
      recommendEventBox,
      new FullButton(),
    ],
  });
}

createExtendsRelation(HomeGenre, Component);

HomeGenre.prototype.setEvent = function () {
  this.addEvent("click", ".daysNav-item", ({ target }) => {
    const eventTarget = target.closest(".daysNav-item");
    updateNodeClasses(eventTarget, "selected");
    const koreaDay = eventTarget.textContent;

    const isDaysTopBox = (content) =>
      content.constructor.name === "ContentsBox" &&
      content.state.contents === "daysTop";

    const daysTopBox = this.state.contents.find((content) =>
      isDaysTopBox(content)
    );

    const { contentsBodyDiv, contentsBody } = daysTopBox.state;
    const daysList = new DaysList(contentsBodyDiv, {
      koreaDay,
      count: DAYS_TOP_WEBTOON_PER_PAGE,
    });

    contentsBody.setState({
      koreaDay,
      daysList,
    });

    this.render();
  });
};

HomeGenre.prototype.template = function () {
  return getComponentsTemplate(this.state.contents);
};

export default HomeGenre;
