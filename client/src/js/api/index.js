const BASE_URL = 'http://localhost:3000';

const request = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const DataApi = {
  getWebtoon(callback) {
    return request(`${BASE_URL}/webtoon`)
      .then(callback);
  },
  getNavItem(callback) {
    return request(`${BASE_URL}/nav-item`)
      .then(callback);
  },
  getBanner(callback) {
    return request(`${BASE_URL}/banner`)
      .then(callback);
  },
  getCategory(callback) {
    return request(`${BASE_URL}/category`)
      .then(callback);
  },
};

export default DataApi;
