import { dayRankingData } from "../../data/works/dayRanking.js";
import { makeWorkContainer } from "./workContainer.js";
import { icons } from "../../data/icons.js";
import { DEFAULT_DAY } from "../../constant.js";

const dataDic = {
  "dayRanking": dayRankingData,
}

export const renderWorkSection = (layout, contents, genre) => {
  const workSection = document.createElement('section');
  workSection.insertAdjacentHTML('beforeend', getHeaderTemplate());
  workSection.insertAdjacentHTML('beforeend', getWorkContainerTemplate(layout, contents, genre));
  document.querySelector('.tab-contents').appendChild(workSection);
}

const getHeaderTemplate = () => {
    return  `
    <div class="section__header">
          <div class="section__title-box">
            <span class="section__title">요일 연재 TOP</span>
            <span class="section__title-num">(1,622)</span>
          </div>
          <div class="section__more-btn">
            <span>더보기</span>
            <img src=${icons.rightArrow} />
          </div>
        </div>`
}

const getWorkContainerTemplate = (layout, contents, genre) => {
  const data = dataDic[contents][genre][DEFAULT_DAY];
  return makeWorkContainer(data, layout);
} 