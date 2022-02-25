function createGenreNav() {
  const nav = `
  <nav>
    <ul class="genre-nav">
        <li class="genre-nav__item genre-nav__item--selected">
            <button>홈</button>
        </li>
        <li class="genre-nav__item">
            <button>요일연재</button>
        </li>
        <li class="genre-nav__item">
            <button>웹툰</button>
        </li>
        <li class="genre-nav__item">
            <button>소년</button>
        </li>
        <li class="genre-nav__item">
            <button>드라마</button>
        </li>
        <li class="genre-nav__item">
            <button>로맨스</button>
        </li>
        <li class="genre-nav__item">
            <button>로판</button>
        </li>
        <li class="genre-nav__item">
            <button>액션무협</button>
        </li>
        <li class="genre-nav__item">
            <button>BL</button>
        </li>
    </ul>
  </nav>  
  `;
  document.querySelector("body").addEventListener("click", (e) => {
    const genreNav = e.target.closest(".genre-nav");
    if (!genreNav) return;

    const selectedItem = e.target.closest(".genre-nav__item");
    const previousSelectedItem = genreNav.querySelector(
      ".genre-nav__item--selected"
    );

    if (selectedItem === previousSelectedItem) return;

    if (previousSelectedItem !== null) {
      previousSelectedItem.classList.remove("genre-nav__item--selected");
    }
    selectedItem.classList.add("genre-nav__item--selected");
  });

  return nav;
}

export { createGenreNav };
