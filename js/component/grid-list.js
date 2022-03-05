export const gridList = (data, day) => {
  const template = data.toonTest
    .map(
      (v, i) => `
  <div class="toon-daytop_frame">
    <div class="toon-daytop_frame_box">
        <img src=${v.image} class="toon-daytop_frame__image"/>
        <div class="toon-daytop_frame_box__rank flex-center">
            ${i + 1 <= 5 ? i + 1 + `위` : `★  ` + v.score}
            <img src=${
              data.icon.grayTimer
            } alt="timer-image" class="timer-image"/>
        </div>
    </div>
  <div class="toon-daytop_frame__title text-ellipsis" >${v.title}</div>
  <div class="toon-daytop_frame__detail flex-center">
     ${v.tag
       .map(
         (tagName) =>
           `<img src=${data.icon[tagName]} class=${tagName}-image alt=${tagName}-image />`
       )
       .join("")}
    <img src=${data.icon.grayMan} class=man-image alt=man-image />
    ${v.view}
  </div>
</div>`
    )
    .join("");
  return template;
};
