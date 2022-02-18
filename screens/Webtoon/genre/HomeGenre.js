import BigCardList from "../../Components/BigCardList.js";
import DateTop from "../../Components/DateTop.js";
import DaysTop from "../../Components/DaysTop.js";
import GenreTop from "../../Components/GenreTop.js";
import MainBanner from "../../Components/MainBanner.js";
import NavDetail from "../../Components/NavDetail.js";
import RecommendEvent from "../../Components/RecommendEvent.js";
import SubBanner from "../../Components/SubBanner.js";

const HomeGenre = (webtoons) => {
  const today = new Date().getDay() - 1;
  const days = ["월", "화", "수", "목", "금", "토", "일", "완결"];

  return `
    ${MainBanner(webtoons.filter((wt) => wt.isMain))}
    ${NavDetail()}
    ${SubBanner()}
    ${DaysTop(today, webtoons)}
    ${BigCardList(
      "기대 신작 TOP",
      webtoons.filter((wt) => wt.status === "N" && wt.imageHorizontalUrl)
    )}
    ${GenreTop(
      "로판",
      webtoons.filter((wt) => wt.genre.includes("로판"))
    )}
    ${GenreTop(
      "드라마",
      webtoons.filter((wt) => wt.genre.includes("드라마"))
    )}
    ${DateTop(webtoons.filter((wt) => wt.days.includes(days[today])))}
    ${RecommendEvent()}
`;
};

export default HomeGenre;
