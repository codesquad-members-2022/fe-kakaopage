import BigCardList from "../../Components/BigCardList.js";
import DateTop from "../../Components/DateTop.js";
import DaysTop from "../../Components/DaysTop.js";
import GenreTop from "../../Components/GenreTop.js";
import MainBanner from "../../Components/MainBanner.js";
import NavDetail from "../../Components/NavDetail.js";
import RecommendEvent from "../../Components/RecommendEvent.js";
import SubBanner from "../../Components/SubBanner.js";

const Home = () => {
  return `
    ${MainBanner()}
    ${NavDetail()}
    ${SubBanner()}
    ${DaysTop()}
    ${BigCardList("기대 신작 TOP")}
    ${GenreTop("로맨스")}
    ${GenreTop("드라마")}
    ${DateTop()}
    ${RecommendEvent()}
`;
};

export default Home;
