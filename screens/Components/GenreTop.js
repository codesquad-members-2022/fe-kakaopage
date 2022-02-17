/**
 * CardList (filter genre)
 */

import Card from "./Card.js";

const GenreTop = (genre) => {
  const genreCards = [
    { title: "익애 ~봉황애사~" },
    { title: "상사가 나를 덕질한다" },
    { title: "쓰라는 글은 안쓰고" },
    { title: "열세 번째 밤" },
    { title: "이 봄을 갖고싶다" },
  ];
  return `<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>${genre} TOP</span>
      </div>
      <div class="contents__more">
        <span>더보기></span>
      </div>
    </div>
    <div class="contents__body">
      <ul class="contentsCard">
       ${genreCards.map((card) => Card(card)).join("")}
      </ul>
    </div>
  </div>
</li>`;
};

export default GenreTop;
