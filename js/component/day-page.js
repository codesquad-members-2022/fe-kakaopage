export const dayPage = (data, list) => {
  const template = `
<div class="toon-daytop_header">
  <div class="toon-daytop_title">
    <div class="toon-daytop_title__title">요일 연재 TOP</div>
    <div class="toon-daytop_title__amount">(1,626)</div>
  </div>
  <div class="toon-daytop_title__see-more">더보기 ></div>
</div>
    <ul class="ul-day">
    ${list.map((v) => `<li data-action=toonDaySeriesTop >${v}</li>`).join("")}
    </ul>
    <div class="toon-daytop_album"></div>
</div>`;
  return template;
};
