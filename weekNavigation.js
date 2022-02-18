const $weekNav = document.querySelector(".main__week__menu");

const categories = ["월", "화", "수", "목", "금", "토", "일", "완료"];

categories.forEach((category, index) => {
  const $day = document.createElement("li");

  $day.className = `day-${categories[index]}`;
  $day.append(category);
  $weekNav.appendChild($day);
});
