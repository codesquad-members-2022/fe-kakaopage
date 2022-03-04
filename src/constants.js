const SERVER_FETCH_URL = "http://127.0.0.1:3000/";
const HEROKU_SERVER_URL = "https://fe-kakaopage-back.herokuapp.com/";
const KAKAO_DATA_URL = "https://dn-img-page.kakao.com/download/resource?kid=";
const API_POINT = ({ categoryId, genreId }) =>
  `v2/?categoryId=${categoryId}&genreId=${genreId}`;
export { HEROKU_SERVER_URL, SERVER_FETCH_URL, KAKAO_DATA_URL, API_POINT };
