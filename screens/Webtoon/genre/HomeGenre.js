import BigCardList from "../../Components/BigCardList.js";
import DateTop from "../../Components/DateTop.js";
import DaysTop from "../../Components/DaysTop.js";
import GenreTop from "../../Components/GenreTop.js";
import MainBanner from "../../Components/MainBanner.js";
import NavDetail from "../../Components/NavDetail.js";
import RecommendEvent from "../../Components/RecommendEvent.js";
import SubBanner from "../../Components/SubBanner.js";

const HomeGenre = (webtoons) => {
  const today = new Date().getDay();
  return `
    ${MainBanner(webtoons.filter((wt) => wt.isMain))}
    ${NavDetail()}
    ${SubBanner()}
    ${DaysTop(today, webtoons)}
    ${BigCardList("기대 신작 TOP")}
    ${GenreTop("로맨스")}
    ${GenreTop("드라마")}
    ${DateTop()}
    ${RecommendEvent()}
`;
};

export default HomeGenre;
