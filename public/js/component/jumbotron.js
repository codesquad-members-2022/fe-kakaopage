export const jumbotron = (data) => {
  const carouselData = data.toonTest.filter((v) => v.carousel === true);

  const template = carouselData
    .map(({ bigimage, title, category, view, subtitle, tag }) => {
      return `
    <div class="toon-jumbotron_carousel">
    <img src=${bigimage}>
    <button class="toon-jumbotron_left"  data-action='carousel' "><img src=${
      data.icon.leftBtn
    }></button>
    <button class="toon-jumbotron_right" data-action='carousel' "><img src=${
      data.icon.rightBtn
    }></button>
    <div class="toon-jumbotron-box">
      <div class="toon-jumbotron__title">${title}</div>
      <div class="toon-jumbotron_content">
        <div class="toon-jumbotron__tag">
        <img src=${tag === "event" ? data.icon.event : data.icon.new}>
        </div>
        <div class="toon-jumbotron__category">
        <img src=${data.icon.clock}>
        ${category} </div>
        <div class="toon-jumbotron__view">
        <img src=${data.icon.man}>
        ${view}만명</div>
      </div>
      <div class="toon-jumbotron__intro">
        <span> ${subtitle} </span>
      </div>
    </div>
    </div>`;
    })
    .join("");

  return template;
};
