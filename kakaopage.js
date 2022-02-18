import { webtoons } from "./fixing-webtoons";

const $ = (selector) => document.querySelector(selector);

const renderingWebtoon = (day) => {
  const dayWebtoons = webtoons
    .filter((e) => e.day === day)
    .map(
      (e) => `<div class="dowTop__webtoon_card">
  <div class="dowTop__webtoon_info">
    <img
      src=${e.img}
      class="dowTop__webtoon_img"
      alt="webtoon"
    />
    <p>${
      isNaN(e.info)
        ? e.info
        : `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path
            fill="#FFD200"
            fill-rule="evenodd"
            stroke="#FFD200"
            stroke-linejoin="round"
            d="M6.5.747L4.553 5.221.069 5.33l3.278 3.195-.757 4.416 3.91-2.35 3.91 2.35-.757-4.416L12.93 5.33l-4.484-.108L6.5.747z"
          ></path>
        </svg> ` + e.info
    }</p>
    <svg class="webtoon_bar__clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#999" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.5 4c-.828 0-1.5.672-1.5 1.5v4c0 .139.019.273.053.4-.128.485-.004 1.023.372 1.405l3.812 3.868.018.018c.557.545 1.451.536 1.997-.022.558-.57.557-1.483-.003-2.051l-3.277-3.327c.018-.094.028-.191.028-.291v-4c0-.828-.672-1.5-1.5-1.5z"/>
  </svg>
      <path
        fill="#999"
        fill-rule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.5 4c-.828 0-1.5.672-1.5 1.5v4c0 .139.019.273.053.4-.128.485-.004 1.023.372 1.405l3.812 3.868.018.018c.557.545 1.451.536 1.997-.022.558-.57.557-1.483-.003-2.051l-3.277-3.327c.018-.094.028-.191.028-.291v-4c0-.828-.672-1.5-1.5-1.5z"
      ></path>
    </svg>
    <div class="webtoon_bar"></div>
  </div>
  <p class="dowTop__webtoon_title">${e.title}</p>
  <p class="dowTop__webtoon_user"><svg 
    class="webtoon_bar__up" xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 22">
    <g fill="none" fill-rule="evenodd">
        <g>
            <rect width="32" height="22" fill="#7FB4FF" rx="2"/>
            <path fill="#FFF" fill-rule="nonzero" d="M10.92 17.256c1.525 0 2.72-.376 3.584-1.128.864-.752 1.296-1.901 1.296-3.448V5.576h-2.512v7.104c0 .853-.17 1.48-.512 1.88-.341.4-.96.6-1.856.6-.512 0-.92-.072-1.224-.216-.304-.144-.541-.33-.712-.56-.17-.23-.283-.493-.336-.792-.053-.299-.08-.603-.08-.912V5.576H6.056v7.104c0 1.557.424 2.71 1.272 3.456.848.747 2.045 1.12 3.592 1.12zM20.472 17v-4.096h2.64c.715 0 1.323-.104 1.824-.312.501-.208.91-.483 1.224-.824.315-.341.544-.733.688-1.176.144-.443.216-.893.216-1.352 0-.47-.072-.923-.216-1.36-.144-.437-.373-.827-.688-1.168-.315-.341-.723-.616-1.224-.824-.501-.208-1.11-.312-1.824-.312H17.96V17h2.512zm1.952-6.048h-1.952V7.528h1.952c.288 0 .565.021.832.064s.501.125.704.248c.203.123.365.296.488.52.123.224.184.517.184.88s-.061.656-.184.88c-.123.224-.285.397-.488.52s-.437.205-.704.248c-.267.043-.544.064-.832.064z"/>
        </g>
    </g>
  </svg>
  <img class="mainAdBanner__status__person" src="png/icon_read_count.png" alt="person">
  ${e.user}</p>
  </div>`
    )
    .reduce((acc, cur) => acc + cur);
  $(".dowTop__webtoon").innerHTML = dayWebtoons;
};

const renderingNav = (nav, selected) => {
  document.querySelectorAll(`.${nav}__nav__btn`).forEach((e) => {
    e.id = "";
  });
  selected.id = "selected";
};

$(".dowTop__nav").addEventListener("click", (e) => {
  if (e.target.nodeName !== "LI") return;
  renderingNav("dowTop", e.target);
  renderingWebtoon(e.target.innerText);
});

$(".page-main__nav").addEventListener("click", (e) => {
  if (e.target.nodeName !== "LI") return;
  renderingNav("page-main", e.target);
});
