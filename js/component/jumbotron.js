export const jumbotron = (data, list) => {
  // ⚠️ carousel 수만큼 반복넣어야함
  const carouselData = data.toon.filter((v) => v.carousel === true);
  const tagIcon =
    carouselData[0].tag === "event" ? data.icon.event : data.icon.new;

  const template = `
  <img src=${carouselData[0].bigimage}>
  <button class="toon-jumbotron_left"><img src=${data.icon.leftBtn}></button>
  <button class="toon-jumbotron_right"><img src=${data.icon.rightBtn}></button>
  <div class="toon-jumbotron-box">
    <div class="toon-jumbotron__title">${carouselData[0].title}</div>
    <div class="toon-jumbotron_content">
      <div class="toon-jumbotron__tag">
      <img src=${tagIcon}>
      </div>
      <div class="toon-jumbotron__category">
      <img src=${data.icon.clock}>
      ${carouselData[0].category} </div>
      <div class="toon-jumbotron__view">
      <img src=${data.icon.man}>
      ${carouselData[0].view}</div>
    </div>
    <div class="toon-jumbotron__intro">
      <span> ${carouselData[0].subtitle} </span>
    </div>
  </div>`;

  return template;
};
