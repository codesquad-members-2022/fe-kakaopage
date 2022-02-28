import webtoonDaySeries from "../mainHTML/webtoon-day-series.js";
import webtoonHome from "../mainHTML/webtoon-home.js";

function createGenreNav() {
  const nav = `
  <nav>
    <ul class="genre-nav">
        <li class="genre-nav__item genre-nav__item--selected" data-genre="home">
            <button>홈</button>
        </li>
        <li class="genre-nav__item" data-genre="day-series">
            <button>요일연재</button>
        </li>
        <li class="genre-nav__item" data-genre="webtoon">
            <button>웹툰</button>
        </li>
        <li class="genre-nav__item" data-genre="boy">
            <button>소년</button>
        </li>
        <li class="genre-nav__item" data-genre="drama">
            <button>드라마</button>
        </li>
        <li class="genre-nav__item" data-genre="romance">
            <button>로맨스</button>
        </li>
        <li class="genre-nav__item" data-genre="rofan">
            <button>로판</button>
        </li>
        <li class="genre-nav__item" data-genre="action">
            <button>액션무협</button>
        </li>
        <li class="genre-nav__item" data-genre="bl">
            <button>BL</button>
        </li>
    </ul>
  </nav>  
  `;
  document.querySelector("body").addEventListener("click", (e) => {
    const genreNav = e.target.closest(".genre-nav");
    if (!genreNav) return;

    const genres = {
      home: webtoonHome,
      "day-series": webtoonDaySeries,
      webtoon: "웹툰 페이지",
      boy: "소년 페이지",
      drama: "드라마",
      rofan: "로맨스 판타지 페이지",
      action: "악숀",
      bl: "BL",
    };

    const selectedItem = e.target.closest(".genre-nav__item");
    const previousSelectedItem = genreNav.querySelector(
      ".genre-nav__item--selected"
    );

    if (selectedItem === previousSelectedItem) return;

    if (previousSelectedItem !== null) {
      previousSelectedItem.classList.remove("genre-nav__item--selected");
    }
    selectedItem.classList.add("genre-nav__item--selected");
    document.querySelector(".sections-wrapper").innerHTML =
      genres[selectedItem.dataset.genre];
  });

  return nav;
}

export { createGenreNav };
