const element = document.querySelector(".main__navigation__menu");

const topics = [
  "홈",
  "요일연재",
  "웹툰",
  "소년",
  "드라마",
  "로맨스",
  "로판",
  "액션무협",
];

topics.forEach((topic) => {
  element.innerHTML += `<li>
      <a>${topic}</a>
    </li>`;
});
