/**
 * CardList (filter genre)
 */

import Card from "./Card.js";

const GenreTop = (genre, webtoons) => {
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
       ${webtoons.map((webtoon) => Card(webtoon)).join("")}
      </ul>
    </div>
  </div>
</li>`;
};

export default GenreTop;
