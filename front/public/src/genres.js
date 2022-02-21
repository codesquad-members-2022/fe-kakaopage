import HomeGenre from "./screens/Webtoon/genre/HomeGenre.js";
import DaysGenre from "./screens/Webtoon/genre/DaysGenre.js";
import WebtoonGenre from "./screens/Webtoon/genre/WebtoonGenre.js";
import BoyGenre from "./screens/Webtoon/genre/BoyGenre.js";
import DramaGenre from "./screens/Webtoon/genre/DramaGenre.js";
import RomanceGenre from "./screens/Webtoon/genre/RomanceGenre.js";
import RofanGenre from "./screens/Webtoon/genre/RofanGenre.js";
import ActionGenre from "./screens/Webtoon/genre/ActionGenre.js";
import BLGenre from "./screens/Webtoon/genre/BLGenre.js";
import DummyGenre from "./screens/Home/genre/DummyGenre.js";

const genres = {
  home: {
    home: { name: "홈", screen: DummyGenre },
  },
  webtoon: {
    home: { name: "홈", screen: HomeGenre },
    days: { name: "요일연재", screen: DaysGenre },
    webtoon: { name: "웹툰", screen: WebtoonGenre },
    boy: { name: "소년", screen: BoyGenre },
    drama: { name: "드라마", screen: DramaGenre },
    romance: { name: "로맨스", screen: RomanceGenre },
    rofan: { name: "로판", screen: RofanGenre },
    action: { name: "액션무협", screen: ActionGenre },
    bl: { name: "BL", screen: BLGenre },
  },
  webnovel: {
    home: { name: "홈", screen: DummyGenre },
    days: { name: "요일연재", screen: DummyGenre },
    webnovel: { name: "웹소설", screen: DummyGenre },
    fantasy: { name: "판타지", screen: DummyGenre },
    hyunfan: { name: "현판", screen: DummyGenre },
    romance: { name: "로맨스", screen: DummyGenre },
    rofan: { name: "로판", screen: DummyGenre },
    action: { name: "무협", screen: DummyGenre },
    fande: { name: "판드", screen: DummyGenre },
    bl: { name: "BL", screen: DummyGenre },
    sepvol: { name: "단행본", screen: DummyGenre },
  },
  webnovel: {
    home: { name: "홈", screen: DummyGenre },
    days: { name: "요일연재", screen: DummyGenre },
    webnovel: { name: "웹소설", screen: DummyGenre },
    fantasy: { name: "판타지", screen: DummyGenre },
    hyunfan: { name: "현판", screen: DummyGenre },
    romance: { name: "로맨스", screen: DummyGenre },
    rofan: { name: "로판", screen: DummyGenre },
    action: { name: "무협", screen: DummyGenre },
    fande: { name: "판드", screen: DummyGenre },
    bl: { name: "BL", screen: DummyGenre },
    sepvol: { name: "단행본", screen: DummyGenre },
  },
  movie: {
    home: { name: "홈", screen: DummyGenre },
    ranking: { name: "랭킹", screen: DummyGenre },
    romance: { name: "로맨스", screen: DummyGenre },
    action: { name: "액션", screen: DummyGenre },
    animation: { name: "애니메이션", screen: DummyGenre },
    genreAll: { name: "장르전체", screen: DummyGenre },
  },
  broadcast: {
    home: { name: "홈", screen: DummyGenre },
    entertain: { name: "예능", screen: DummyGenre },
    drama: { name: "드라마", screen: DummyGenre },
    animation: { name: "애니메이션", screen: DummyGenre },
    overseas: { name: "해외시리즈", screen: DummyGenre },
    ranking: { name: "랭킹", screen: DummyGenre },
    genreAll: { name: "장르전체", screen: DummyGenre },
  },
  book: {
    home: { name: "홈", screen: DummyGenre },
    serial: { name: "연재", screen: DummyGenre },
    bestseller: { name: "베스트셀러", screen: DummyGenre },
    ranking: { name: "랭킹", screen: DummyGenre },
    thriller: { name: "스릴러", screen: DummyGenre },
    selfDev: { name: "자기계발", screen: DummyGenre },
    learning: { name: "학습만화", screen: DummyGenre },
  },
};

export default genres;
