function createDayNav() {
  const dayNav = `
  <nav>
    <ul class="day-nav">
        <li class="day-nav__item day-nav__item--selected" data-day="mon">월</li>
        <li class="day-nav__item" data-day="tue">화</li>
        <li class="day-nav__item" data-day="wed">수</li>
        <li class="day-nav__item" data-day="thu">목</li>
        <li class="day-nav__item" data-day="fri">금</li>
        <li class="day-nav__item" data-day="sat">토</li>
        <li class="day-nav__item" data-day="sun">일</li>
    </ul>
  </nav>
  `;
  document.querySelector("body").addEventListener("click", (e) => {
    const dayNav = e.target.closest(".day-nav");
    if (!dayNav) return;
    e.target
      .closest("section")
      .querySelector(
        ".contents-wrapper"
      ).innerText = `${e.target.dataset.day} 컨텐츠 보여주기`;
    const itemSelected = dayNav.querySelector(".day-nav__item--selected");
    if (itemSelected !== null) {
      itemSelected.classList.remove("day-nav__item--selected");
    }
    e.target.classList.add("day-nav__item--selected");
  });

  return dayNav;
}

export { createDayNav };
