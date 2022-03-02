export const gridList = (data, day) => {
  // 컴포넌트 파일에 이러한 데이터 조건이 들어가면 안되지 않을까
  // 그렇다고 앞에다 두면 너무 더럽지만, 직관적인긴 함
  // 매직넘버 10
  const UNTILDATA = 10;
  const { icon, toonTest } = data;

  const filterTopView = toonTest
    .filter((toon, i) => toon.day === day)
    .sort((a, b) => b.view - a.view)
    .slice(0, UNTILDATA);

  const template = filterTopView
    .map(
      (v, i) => `
  <div class="toon-daytop_frame">
    <div class="toon-daytop_frame_box">
        <img src=${v.image} class="toon-daytop_frame__image"/>
        <div class="toon-daytop_frame_box__rank flex-center">
            ${i + 1 <= 5 ? i + 1 + `위` : `★  ` + v.score}
            <img src=${icon.grayTimer} alt="timer-image" class="timer-image"/>
        </div>
    </div>
  <div class="toon-daytop_frame__title text-ellipsis" >${v.title}</div>
  <div class="toon-daytop_frame__detail flex-center">
     ${v.tag
       .map(
         (tagName) =>
           `<img src=${icon[tagName]} class=${tagName}-image alt=${tagName}-image />`
       )
       .join("")}
    <img src=${icon.grayMan} class=man-image alt=man-image />
    ${v.view}만명
  </div>
</div>`
    )
    .join("");
  return template;
};
