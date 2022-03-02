import slideData from "../tabData/slideData.js"
function makeSlide(tabName) {  //홈 요일연재 등등 list이므로 인덱스숫자로
  let curSlide = slideData[tabName];
  return    `
  <input type="radio" name="slide" id="slide01" checked>
  <input type="radio" name="slide" id="slide02">
  <input type="radio" name="slide" id="slide03">
  <ul class="slidelist">
    <li class="slideitem">
        <a><img src="${curSlide["img1"]}"></a>
    </li>
    <li class="slideitem">
        <a><img src="${curSlide["img2"]}"></a>
    </li>
    <li class="slideitem">
        <as><img src="${curSlide["img3"]}"></a>
    </li>
  </ul>
  <div class="slide-control">
    <div class="control01">
      <div class="control-label">
        <label for="slide03" class="left"></label>
        <label for="slide02" class="right"></label>
      </div>
      <div class="slide-page">1 / 3</div>
    </div>
    <div class="control02">
      <label for="slide01" class="left"></label>
      <label for="slide03" class="right"></label>
      <div class="slide-page">2 / 3</div>
    </div>
    <div class="control03">
      <label for="slide02" class="left"></label>
      <label for="slide01" class="right"></label>
      <div class="slide-page">3 / 3</div>
    </div>
  </div>`
}

export { makeSlide };

// public/src