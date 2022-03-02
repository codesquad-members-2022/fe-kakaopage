const BASE_URL = 'http://localhost:3000';

const request = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const WebtoonApi = {
  getAllWebtoon() {
    return request(`${BASE_URL}/webtoon`);
  },
};

export default WebtoonApi;
