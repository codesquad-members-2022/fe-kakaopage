import DaysTop from "../../Components/DaysTop.js";
import MainBanner from "../../Components/MainBanner.js";

const DaysGenre = (webtoons) => {
  const today = new Date().getDay() - 1;

  return `
    ${MainBanner(webtoons.filter((wt) => wt.isMain.days))}
    ${DaysTop(today, webtoons)}
`;
};

export default DaysGenre;
