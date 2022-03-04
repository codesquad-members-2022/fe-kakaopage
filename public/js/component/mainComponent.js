const getWeekNavHTML = (weekNavinfo) => {
  return /* html */ `<nav class="main__nav__dow">
      <ul class="main__nav__dow--ul">
      ${weekNavinfo.reduce(
        (listHtml, day) => (listHtml += `<li>${day}</li>`),
        ""
      )}
      </ul>
    </nav>
    `;
};

const getToggleNavHTML = ({ left, right }) => {
  return /* html */ `<nav class="main__nav--toggle">
      <ul class="main--toggle--left">
        ${left.reduce((html, font) => (html += `<li>${font}</li>`), "")} 
      </ul>
      <div class="main--toggle--right">${right}</div>
    </nav>`;
};

const getImgCardHtml = ({ imgUrl, title, info }, test) => {
  return /* html */ `
  <li class="main__cartoonZone__cell${test ?? ""}">
    <div class="main__cartoonZone--imageWrapper">
      <img
        src=${imgUrl}
        class="main__cartoonZone--image"
      />
      <div class="main__cartoonZone--imgTag">
        <span class="main__cartoonZone--imgTagLeft">TOP</span>
        <span class="main__cartoonZone--imgTagRight">인기</span>
      </div>
    </div>
    <div class="main__cartoonZone--info">
      <span class="main__cartoonZone--title">${title}</span>
      <span class="main__cartoonZone--description">
        ${info}
      </span>
    </div>
  </li>
`;
};

export { getImgCardHtml, getWeekNavHTML, getToggleNavHTML };
